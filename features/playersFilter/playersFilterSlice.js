import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  secondaryPositionID: null,
  naturePositionID: null,
  address: null,
  minAge: null,
  maxAge: null,
  minHeight: null,
  maxHeight: null,
  cityID: null,
  leagueID: null,
  parameters: {},
};

export const playersFilterSlice = createSlice({
  name: "playersFilter",
  initialState,
  reducers: {
    setSecondaryPositionID: (state, action) => {
      state.secondaryPositionID = action.payload;
    },
    setNaturePositionID: (state, action) => {
      state.naturePositionID = action.payload;
    },
    setCityID: (state, action) => {
      state.cityID = action.payload;
    },
    setLeagueID: (state, action) => {
      state.leagueID = action.payload;
    },
    setMinAge: (state, action) => {
      state.minAge = action.payload;
    },
    setMaxAge: (state, action) => {
      state.maxAge = action.payload;
    },
    setMinHeight: (state, action) => {
      state.minHeight = action.payload;
    },
    setMaxHeight: (state, action) => {
      state.maxHeight = action.payload;
    },
    uncheckAll: (state, action) => {
      state.isPlayedInChecked = false;
      state.isOwnedTeamChecked = false;
      state.isCoachedTeamChecked = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSecondaryPositionID,
  setNaturePositionID,
  setMinAge,
  setMaxAge,
  setMinHeight,
  setMaxHeight,
  setCityID,
  setLeagueID,
} = playersFilterSlice.actions;

export const secondaryPositionIDValue = (state) =>
  state.playersFilter.secondaryPositionID;
export const naturePositionIDValue = (state) =>
  state.playersFilter.naturePositionID;
export const cityIDValue = (state) => state.playersFilter.cityID;
export const leagueIDValue = (state) => state.playersFilter.leagueID;
export const minAgeValue = (state) => state.playersFilter.minAge;
export const maxAgeValue = (state) => state.playersFilter.maxAge;
export const minHeightValue = (state) => state.playersFilter.minHeight;
export const maxHeightValue = (state) => state.playersFilter.maxHeight;

export default playersFilterSlice.reducer;
