// // src/features/auth/authSlice.js
// import { apiSlice } from "../api/apiSlice";

// export const authApi = apiSlice.injectEndpoints({
//   endpoints: (build) => ({
//     login: build.mutation({
//       query: (body) => ({
//         url: "/auth/login",
//         method: "POST",
//         body,
//       }),
//     }),
//     register: build.mutation({
//       query: (body) => ({
//         url: "/auth/register", // matches your backend
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useRegisterMutation } = authApi;


import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: build.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;