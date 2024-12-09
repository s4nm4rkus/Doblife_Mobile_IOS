import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: {},
  image: null,
  existingImage: {},
  newImage: {},
  leagueParticipantID: null,
  isChangeProfileImageModalVisible: false,
  isDeleteProfileModalVisible: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
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
    setIsChangeProfileImageModalVisible: (state, action) => {
      state.isChangeProfileImageModalVisible = action.payload;
    },
    setIsDeleteProfileModalVisible: (state, action) => {
      state.isDeleteProfileModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueParticipantID,
  setTeam,
  setExistingImage,
  setNewImage,
  setImage,
  updateTeamImage,
  setIsChangeProfileImageModalVisible,
  setIsDeleteProfileModalVisible,
} = profileSlice.actions;

export const teamValue = (state) => state.profile.team;

export const existingImageValue = (state) => state.profile.existingImage;

export const newImageValue = (state) => state.profile.newImage;

export const imageValue = (state) => state.profile.image;

export const leagueParticipantIDValue = (state) =>
  state.profile.leagueParticipantID;

export const isChangeProfileImageModalVisibleValue = (state) =>
  state.profile.isChangeProfileImageModalVisible;

export const isDeleteProfileModalVisibleValue = (state) =>
  state.profile.isDeleteProfileModalVisible;

export default profileSlice.reducer;
