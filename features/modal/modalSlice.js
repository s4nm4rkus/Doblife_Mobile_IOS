import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSuccessJoinTeamVisible: false,
  isActivePlayerVisible: false,
  newTeam: null,
  currentTeam: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsSuccessJoinTeamVisible: (state, action) => {
      state.isSuccessJoinTeamVisible = action.payload;
    },
    setIsActivePlayerVisible: (state, action) => {
      state.isActivePlayerVisible = action.payload;
    },
    setNewTeam: (state, action) => {
      state.newTeam = action.payload;
    },
    setCurrentTeam: (state, action) => {
      state.currentTeam = action.payload;
    },
  },
});

export const {
  setIsSuccessJoinTeamVisible,
  setIsActivePlayerVisible,
  setNewTeam,
  setCurrentTeam,
} = modalSlice.actions;

export const isSuccessJoinTeamVisibleValue = (state) =>
  state.modal.isSuccessJoinTeamVisible;
export const isActivePlayerVisibleValue = (state) =>
  state.modal.isActivePlayerVisible;
export const newTeamValue = (state) => state.modal.newTeam;
export const currentTeamValue = (state) => state.modal.currentTeam;

export default modalSlice.reducer;
