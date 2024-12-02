import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import leaguesFilterSlice from "./features/leaguesFilter/leaguesFilterSlice";
import playersFilterSlice from "./features/playersFilter/playersFilterSlice";
import modalSlice from "./features/modal/modalSlice";
import myTeamsFilterSlice from "./features/myTeamsFilter/myTeamsFilterSlice";
import myTeamsLeaveTeamSlice from "./features/myTeamsLeaveTeam/myTeamsLeaveTeamSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    leaguesFilter: leaguesFilterSlice,
    playersFilter: playersFilterSlice,
    modal: modalSlice,
    myTeamsFilter: myTeamsFilterSlice,
    myTeamsLeaveTeam: myTeamsLeaveTeamSlice,
  },
});
