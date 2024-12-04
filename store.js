import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import leaguesFilterSlice from "./features/leaguesFilter/leaguesFilterSlice";
import playersFilterSlice from "./features/playersFilter/playersFilterSlice";
import modalSlice from "./features/modal/modalSlice";
import myTeamsFilterSlice from "./features/myTeamsFilter/myTeamsFilterSlice";
import myTeamsLeaveTeamSlice from "./features/myTeamsLeaveTeam/myTeamsLeaveTeamSlice";
import createLeagueSlice from "./features/createLeague/createLeagueSlice";
import myTeamsSelectTeamSlice from "./features/myTeamsSelectTeam/myTeamsSelectTeamSlice";
import createTeamSlice from "./features/team/createTeamSlice";
import leagueSlice from "./features/league/leagueSlice";
import selectLeagueSlice from "./features/selectLeague/selectLeagueSlice";
import selectTeamSlice from "./features/selectTeam/selectTeamSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    leaguesFilter: leaguesFilterSlice,
    playersFilter: playersFilterSlice,
    modal: modalSlice,
    myTeamsFilter: myTeamsFilterSlice,
    myTeamsLeaveTeam: myTeamsLeaveTeamSlice,
    createLeague: createLeagueSlice,
    createTeam: createTeamSlice,
    league: leagueSlice,
    selectLeague: selectLeagueSlice,
    selectTeam: selectTeamSlice,
    myTeamsSelectTeam: myTeamsSelectTeamSlice,
  },
});
