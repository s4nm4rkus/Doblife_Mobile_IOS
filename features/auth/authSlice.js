// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   step: 1,
//   userInfo: {},
//   emailOrMobile: false,
//   userId: null,
//   password: null,
//   isVisible: false,
//   errors: {},
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setStep: (state, action) => {
//       state.step = action.payload;
//     },
//     addStep: (state, action) => {
//       state.step = state.step + 1;
//     },
//     removeStep: (state, action) => {
//       state.step = state.step - 1;
//     },
//     setUserInfo: (state, action) => {
//       state.userInfo = action.payload;
//     },
//     setEmailOrMobile: (state, action) => {
//       state.emailOrMobile = action.payload;
//     },
//     setUserId: (state, action) => {
//       state.userId = action.payload;
//     },
//     setPassword: (state, action) => {
//       state.password = action.payload;
//     },
//     setIsVisible: (state, action) => {
//       state.isVisible = action.payload;
//     },
//     setErrors: (state, action) => {
//       state.errors = action.payload;
//     },
//     reset: () => initialState,
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   setStep,
//   setUserInfo,
//   setEmailOrMobile,
//   setUserId,
//   setPassword,
//   addStep,
//   removeStep,
//   setIsVisible,
//   reset,
//   setErrors,
// } = authSlice.actions;
// export const stepValue = (state) => state.auth.step;
// export const userInfoValue = (state) => state.auth.userInfo;
// export const userIdValue = (state) => state.auth.userId;
// export const emailOrMobileValue = (state) => state.auth.emailOrMobile;
// export const passwordValue = (state) => state.auth.password;
// export const isVisibleValue = (state) => state.auth.isVisible;
// export const errorsValue = (state) => state.auth.errors;

// export default authSlice.reducer;
