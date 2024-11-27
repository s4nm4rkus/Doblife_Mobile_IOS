import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLeaveTeamOpen: false,
  leagueParticipantsID: null,
  showCancelModal: null,
  teamName: null,
};

export const myTeamsLeaveTeamSlice = createSlice({
  name: "myTeamsLeaveTeam",
  initialState,
  reducers: {
    setIsLeaveTeamOpen: (state, action) => {
      state.isLeaveTeamOpen = action.payload;
    },
    setLeagueParticipantsID: (state, action) => {
      state.leagueParticipantsID = action.payload;
    },
    setShowCancelModal: (state, action) => {
      state.showCancelModal = action.payload;
    },
    setTeamName: (state, action) => {
      state.teamName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLeaveTeamOpen,
  setLeagueParticipantsID,
  setShowCancelModal,
  setTeamName,
} = myTeamsLeaveTeamSlice.actions;

export const leaveTeamOpenValue = (state) =>
  state.myTeamsLeaveTeam.isLeaveTeamOpen;

export const leagueParticipantsIDValue = (state) =>
  state.myTeamsLeaveTeam.leagueParticipantsID;

export const showCancelModalValue = (state) =>
  state.myTeamsLeaveTeam.showCancelModal;

export const teamNameValue = (state) => state.myTeamsLeaveTeam.teamName;

export default myTeamsLeaveTeamSlice.reducer;
