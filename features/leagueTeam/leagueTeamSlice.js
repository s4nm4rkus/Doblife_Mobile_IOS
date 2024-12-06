import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
  players: [],
  leagueParticipantIDs: [],
  leagueParticipantID: null,
};

export const leagueTeamSlice = createSlice({
  name: "leagueTeam",
  initialState,
  reducers: {
    setLeagueParticipantID: (state, action) => {
      state.leagueParticipantID = action.payload;
    },
    setLeagueParticipantIDs: (state, action) => {
      state.leagueParticipantIDs = action.payload;
    },
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueParticipantID,
  setLeagueParticipantIDs,
  setTeam,
  setPlayers,
} = leagueTeamSlice.actions;

export const leagueParticipantIDValue = (state) =>
  state.leagueTeam.leagueParticipantID;
export const leagueParticipantIDsValue = (state) =>
  state.leagueTeam.leagueParticipantIDs;
export const teamValue = (state) => state.leagueTeam.team;
export const playersValue = (state) => state.leagueTeam.players;

export default leagueTeamSlice.reducer;
