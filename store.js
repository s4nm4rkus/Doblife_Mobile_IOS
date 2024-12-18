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
import selectDivisionSlice from "./features/selectDivision/selectDivisionSlice";
import selectLeagueRoundSlice from "./features/selectLeagueRound/selectLeagueRoundSlice";
import addBracketSlice from "./features/addBracket/addBracketSlice";
import selectBracketSlice from "./features/selectBracket/selectBracketSlice";
import sortParticipantsSlice from "./features/sortParticipants/sortParticipantsSlice";
import leagueTeamSlice from "./features/leagueTeam/leagueTeamSlice";
import selectMatchupsSlice from "./features/selectMatchups/selectMatchupsSlice";
import scoreBoardSlice from "./features/scoreBoard/scoreBoardSlice";
import dropPlayerSlice from "./features/dropPlayer/dropPlayerSlice";
import notificationsSlice from "./features/notifications/notificationsSlice";
import leaguesEditSeasonDetailsSlice from "./features/leaguesEditSeasonDetails/leaguesEditSeasonDetailsSlice";
import leaguesEditDivisionsSlice from "./features/leaguesEditDivisions/leaguesEditDivisionsSlice";
import myLeaguesSelectLeagueSlice from "./features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice";
import myLeaguesFilterSlice from "./features/myLeaguesFilter/myLeaguesFilterSlice";
import leaguesEditDescriptionsSlice from "./features/leaguesEditDescriptions/leaguesEditDescriptionsSlice";
import profileSlice from "./features/profile/profileSlice";
import editPlayerDetailsSlice from "./features/profile/editPlayerDetails/editPlayerDetailsSlice";
import editAddressSlice from "./features/profile/editAddress/editAddressSlice";
import teamsFilterSlice from "./features/teamsFilter/teamsFilterSlice";

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
    selectDivision: selectDivisionSlice,
    selectLeagueRound: selectLeagueRoundSlice,
    addBracket: addBracketSlice,
    selectBracket: selectBracketSlice,
    sortParticipants: sortParticipantsSlice,
    selectMatchups: selectMatchupsSlice,
    leagueTeam: leagueTeamSlice,
    scoreBoard: scoreBoardSlice,
    dropPlayer: dropPlayerSlice,
    notifications: notificationsSlice,
    leaguesEditSeasonDetails: leaguesEditSeasonDetailsSlice,
    leaguesEditDivisions: leaguesEditDivisionsSlice,
    myLeaguesSelectLeague: myLeaguesSelectLeagueSlice,
    myLeaguesFilter: myLeaguesFilterSlice,
    leaguesEditDescriptions: leaguesEditDescriptionsSlice,
    profile: profileSlice,
    editPlayerDetails: editPlayerDetailsSlice,
    editAddress: editAddressSlice,
    teamsFilter: teamsFilterSlice,
  },
});
