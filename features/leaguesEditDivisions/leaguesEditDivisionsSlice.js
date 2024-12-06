import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  divisionName: null,
  divisionYears: [],
  yearBornFrom: null,
  yearBornTo: null,
  divisionDatas: [],
};

export const leaguesEditDivisionsSlice = createSlice({
  name: "leaguesEditDivisions",
  initialState,
  reducers: {
    setDivisionName: (state, action) => {
      state.divisionName = action.payload;
    },
    setDivisionYears: (state, action) => {
      state.divisionYears = action.payload;
    },
    setYearBornFrom: (state, action) => {
      state.yearBornFrom = action.payload;
    },
    setYearBornTo: (state, action) => {
      state.yearBornTo = action.payload;
    },
    setDivisionDatas: (state, action) => {
      state.divisionDatas = action.payload;
    },
    deleteDivisionData: (state, action) => {
      const index = action.payload;
      state.divisionDatas = state.divisionDatas.filter((_, i) => i !== index);
    },
    resetAll: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDivisionName,
  setDivisionYears,
  setYearBornFrom,
  setYearBornTo,
  setDivisionDatas,
  addDivisionData,
  deleteDivisionData,
  resetAll,
} = leaguesEditDivisionsSlice.actions;

export const divisionNameValue = (state) =>
  state.leaguesEditDivisions.divisionName;
export const divisionYearsValue = (state) =>
  state.leaguesEditDivisions.divisionYears;
export const yearBornFromValue = (state) =>
  state.leaguesEditDivisions.yearBornFrom;
export const yearBornToValue = (state) => state.leaguesEditDivisions.yearBornTo;
export const divisionDatasValue = (state) =>
  state.leaguesEditDivisions.divisionDatas;

export default leaguesEditDivisionsSlice.reducer;
