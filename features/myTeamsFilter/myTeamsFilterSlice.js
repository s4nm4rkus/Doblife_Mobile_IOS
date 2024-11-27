import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlayedInChecked: false,
  isOwnedTeamChecked: false,
  isFloatingChecked: false,
  parameters: {},
};

export const myTeamsFilterSlice = createSlice({
  name: "myTeamsFilter",
  initialState,
  reducers: {
    setIsPlayedInChecked: (state, action) => {
      state.isPlayedInChecked = action.payload;
    },
    setIsOwnedTeamChecked: (state, action) => {
      state.isOwnedTeamChecked = action.payload;
    },
    setIsFloatingChecked: (state, action) => {
      state.isFloatingChecked = action.payload;
    },
    uncheckAll: (state, action) => {
      state.isPlayedInChecked = false;
      state.isOwnedTeamChecked = false;
      state.isFloatingChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsPlayedInChecked,
  setIsOwnedTeamChecked,
  setIsFloatingChecked,
  uncheckAll,
} = myTeamsFilterSlice.actions;

export const playedInCheckedValue = (state) =>
  state.myTeamsFilter.isPlayedInChecked;

export const ownedTeamCheckedValue = (state) =>
  state.myTeamsFilter.isOwnedTeamChecked;

export const floatingCheckedValue = (state) =>
  state.myTeamsFilter.isFloatingChecked;

export default myTeamsFilterSlice.reducer;
