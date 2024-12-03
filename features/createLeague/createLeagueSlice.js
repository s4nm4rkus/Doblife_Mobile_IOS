import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  leagueName: null,
  acronym: null,
  description: null,
  leagueType: null,
  seasonDescription: null,
  month: null,
  day: null,
  year: null,
  country: {},
  province: {},
  city: {},
  barangay: {},
  divisionName: null,
  divisionYears: [],
  yearBornFrom: null,
  yearBornTo: null,
  divisionDatas: [
    {
      division_name: null,
      from: null,
      to: null,
      is_editing: false,
      is_new: true,
    },
  ],
};

export const createLeagueSlice = createSlice({
  name: "createLeague",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setLeagueName: (state, action) => {
      state.leagueName = action.payload;
    },
    setAcronym: (state, action) => {
      state.acronym = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setLeagueType: (state, action) => {
      state.leagueType = action.payload;
    },
    setSeasonDescription: (state, action) => {
      state.seasonDescription = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setBarangay: (state, action) => {
      state.barangay = action.payload;
    },
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
    addDivisionData: (state, action) => {
      return {
        ...state,
        divisionDatas: [
          ...state.divisionDatas,
          {
            division_name: null,
            from: null,
            to: null,
            is_editing: false,
            is_new: true,
          },
        ],
      };
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
  setStep,
  setLeagueName,
  setAcronym,
  setDescription,
  setLeagueType,
  setSeasonDescription,
  setMonth,
  setDay,
  setYear,
  setCountry,
  setProvince,
  setCity,
  setBarangay,
  setDivisionName,
  setDivisionYears,
  setYearBornFrom,
  setYearBornTo,
  setDivisionDatas,
  addDivisionData,
  deleteDivisionData,
  resetAll,
} = createLeagueSlice.actions;

export const stepValue = (state) => state.createLeague.step;
export const leagueNameValue = (state) => state.createLeague.leagueName;
export const acronymValue = (state) => state.createLeague.acronym;
export const descriptionValue = (state) => state.createLeague.description;
export const leagueTypeValue = (state) => state.createLeague.leagueType;
export const seasonDescriptionValue = (state) =>
  state.createLeague.seasonDescription;
export const monthValue = (state) => state.createLeague.month;
export const dayValue = (state) => state.createLeague.day;
export const yearValue = (state) => state.createLeague.year;
export const countryValue = (state) => state.createLeague.country;
export const provinceValue = (state) => state.createLeague.province;
export const cityValue = (state) => state.createLeague.city;
export const barangayValue = (state) => state.createLeague.barangay;
export const divisionNameValue = (state) => state.createLeague.divisionName;
export const divisionYearsValue = (state) => state.createLeague.divisionYears;
export const yearBornFromValue = (state) => state.createLeague.yearBornFrom;
export const yearBornToValue = (state) => state.createLeague.yearBornTo;
export const divisionDatasValue = (state) => state.createLeague.divisionDatas;

export default createLeagueSlice.reducer;
