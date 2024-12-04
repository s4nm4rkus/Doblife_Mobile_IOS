import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagueID: null,
  isConfirmModalVisible: null,
  isSelectDivisionModalVisible: null,
  leagueName: null,
  divisionID: null,
  divisionName: null,
  divisions: [],
};

export const selectLeagueSlice = createSlice({
  name: "selectLeague",
  initialState,
  reducers: {
    setLeagueID: (state, action) => {
      state.leagueID = action.payload;
    },
    setDivisionID: (state, action) => {
      state.divisionID = action.payload;
    },
    setIsConfirmModalVisible: (state, action) => {
      state.isConfirmModalVisible = action.payload;
    },
    setIsSelectDivisionModalVisible: (state, action) => {
      state.isSelectDivisionModalVisible = action.payload;
    },
    setLeagueName: (state, action) => {
      state.leagueName = action.payload;
    },
    setDivisionName: (state, action) => {
      state.divisionName = action.payload;
    },
    setDivisions: (state, action) => {
      state.divisions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueID,
  setDivisionID,
  setDivisionName,
  setIsConfirmModalVisible,
  setIsSelectDivisionModalVisible,
  setLeagueName,
  setDivisions,
} = selectLeagueSlice.actions;

export const leagueIDValue = (state) => state.selectLeague.leagueID;

export const divisionIDValue = (state) => state.selectLeague.divisionID;

export const isConfirmModalVisibleValue = (state) =>
  state.selectLeague.isConfirmModalVisible;

export const isSelectDivisionModalVisibleValue = (state) =>
  state.selectLeague.isSelectDivisionModalVisible;

export const leagueNameValue = (state) => state.selectLeague.leagueName;

export const divisionNameValue = (state) => state.selectLeague.divisionName;

export const divisionsValue = (state) => state.selectLeague.divisions;

export default selectLeagueSlice.reducer;
