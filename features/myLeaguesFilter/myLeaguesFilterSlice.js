import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlayedInChecked: false,
  isOwnedLeagueChecked: false,
  isCoachedLeagueChecked: false,
  parameters: {},
};

export const myLeaguesFilterSlice = createSlice({
  name: "myLeaguesFilter",
  initialState,
  reducers: {
    setIsPlayedInChecked: (state, action) => {
      state.isPlayedInChecked = action.payload;
    },
    setIsOwnedLeagueChecked: (state, action) => {
      state.isOwnedLeagueChecked = action.payload;
    },
    uncheckAll: (state, action) => {
      state.isPlayedInChecked = false;
      state.isOwnedLeagueChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsPlayedInChecked,
  setIsOwnedLeagueChecked,
  setIsCoachedLeagueChecked,
  uncheckAll,
} = myLeaguesFilterSlice.actions;

export const playedInCheckedValue = (state) =>
  state.myLeaguesFilter.isPlayedInChecked;

export const ownedLeagueCheckedValue = (state) =>
  state.myLeaguesFilter.isOwnedLeagueChecked;

export default myLeaguesFilterSlice.reducer;
