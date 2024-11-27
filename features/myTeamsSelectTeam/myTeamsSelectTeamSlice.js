import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
  teamID: null,
  image: null,
  existingImage: {},
  newImage: {},
  leagueParticipantID: null,
};

export const myTeamsSelectTeamSlice = createSlice({
  name: "myTeamsSelectTeam",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
    },
    setTeamID: (state, action) => {
      state.teamID = action.payload;
    },

    updateTeamImage: (state, action) => {
      return {
        ...state,
        team: {
          ...state.team,
          image: action.payload,
        },
      };
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setExistingImage: (state, action) => {
      state.existingImage = action.payload;
    },
    setNewImage: (state, action) => {
      state.newImage = action.payload;
    },
    setLeagueParticipantID: (state, action) => {
      state.leagueParticipantID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueParticipantID,
  setTeam,
  setTeamID,
  setExistingImage,
  setNewImage,
  setImage,
  updateTeamImage,
} = myTeamsSelectTeamSlice.actions;

export const teamValue = (state) => state.myTeamsSelectTeam.team;
export const teamIDValue = (state) => state.myTeamsSelectTeam.teamID;
export const existingImageValue = (state) =>
  state.myTeamsSelectTeam.existingImage;
export const newImageValue = (state) => state.myTeamsSelectTeam.newImage;
export const imageValue = (state) => state.myTeamsSelectTeam.image;
export const leagueParticipantIDValue = (state) =>
  state.myTeamsSelectTeam.leagueParticipantID;

export default myTeamsSelectTeamSlice.reducer;
