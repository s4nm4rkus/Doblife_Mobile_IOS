import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  province: null,
  city: null,
  barangay: null,
  country: null,
  date: null,
};

export const leaguesEditSeasonDetailsSlice = createSlice({
  name: "leaguesEditSeasonDetails",
  initialState,
  reducers: {
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
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setCountry, setProvince, setCity, setBarangay, setDate } =
  leaguesEditSeasonDetailsSlice.actions;

export const countryValue = (state) => state.leaguesEditSeasonDetails.country;
export const provinceValue = (state) => state.leaguesEditSeasonDetails.province;
export const cityValue = (state) => state.leaguesEditSeasonDetails.city;
export const barangayValue = (state) => state.leaguesEditSeasonDetails.barangay;
export const dateValue = (state) => state.leaguesEditSeasonDetails.date;

export default leaguesEditSeasonDetailsSlice.reducer;
