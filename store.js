import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import leaguesFilterSlice from "./features/leaguesFilter/leaguesFilterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    leaguesFilter: leaguesFilterSlice,
  },
});
