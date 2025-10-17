import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedAccessToken, getDecryptedRefreshToken, storeAccessToken, storeRefreshToken, clearTokens } from "../../utils/tokenUtils";
import { setCredentials, clearCredentials } from "../auth/authSlide";

const baseQueryCustom = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken = getDecryptedAccessToken();
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQueryCustom(args, api, extraOptions);

  if (result.error?.status === 401) {
    const refreshToken = getDecryptedRefreshToken();
    if (refreshToken) {
      try {
        const refreshResult = await baseQueryCustom(
          {
            url: "/auth/refresh-token",
            method: "POST",
            body: { refreshToken },
          },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const { accessToken, refreshToken: newRefreshToken } = refreshResult.data.data;
          storeAccessToken(accessToken);
          storeRefreshToken(newRefreshToken);
          api.dispatch(setCredentials({ accessToken, refreshToken: newRefreshToken }));
          result = await baseQueryCustom(args, api, extraOptions);
        } else {
          api.dispatch(clearCredentials());
          clearTokens();
        }
      } catch (error) {
        console.error("Refresh token error:", error);
        api.dispatch(clearCredentials());
        clearTokens();
      }
    } else {
      api.dispatch(clearCredentials());
      clearTokens();
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (build) => ({}),
});

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
    getUser: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      transformResponse: (response) => response.data,
      providesTags: ["User"],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials({ user: { name: data.name, email: data.email } }));
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      },
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: { refreshToken: getDecryptedRefreshToken() },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useGetUserQuery, useRefreshTokenMutation } = authApi;