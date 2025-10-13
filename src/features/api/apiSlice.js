import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDecryptedAccessToken } from "../../utils/tokenUtils";

// custom fetchBaseQuery to handle the base URL
const baseQueryCustom = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    const accessToken = getDecryptedAccessToken();

    if (accessToken) {
      headers.set("Authorization", accessToken);
    }

    return headers;
  },
});

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryCustom,
  tagTypes: ["User"], // Optional: Add tag types if you plan to use invalidations later (e.g., for logout or profile updates)
  endpoints: (build) => ({}),
});

// Inject all auth endpoints here (consolidated to avoid duplication)
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
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;