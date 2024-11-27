import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import leaguesFilterSlice from "./features/leaguesFilter/leaguesFilterSlice";
import playersFilterSlice from "./features/playersFilter/playersFilterSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    leaguesFilter: leaguesFilterSlice,
    playersFilter: playersFilterSlice,
  },
});
