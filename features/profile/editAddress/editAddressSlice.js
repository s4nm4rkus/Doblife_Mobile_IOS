import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: null,
  province: null,
  city: null,
  barangay: null,
};

export const editAddressSlice = createSlice({
  name: "editAddress",
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
    resetAll: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCountry, setProvince, setCity, setBarangay, resetAll } =
  editAddressSlice.actions;

export const countryValue = (state) => state.editAddress.country;
export const provinceValue = (state) => state.editAddress.province;
export const cityValue = (state) => state.editAddress.city;
export const barangayValue = (state) => state.editAddress.barangay;

export default editAddressSlice.reducer;
