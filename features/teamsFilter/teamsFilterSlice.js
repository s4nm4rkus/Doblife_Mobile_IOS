import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort_by: null,
  province_id: null,
  city_id: null,
  brgy_id: null,
  search: null,
};

export const teamsFilterSlice = createSlice({
  name: "teamsFilter",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sort_by = action.payload;
    },
    setProvinceID: (state, action) => {
      state.province_id = action.payload;
    },
    setCityID: (state, action) => {
      state.city_id = action.payload;
    },
    setBrgyID: (state, action) => {
      state.brgy_id = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSortBy, setProvinceID, setCityID, setBrgyID, setSearch } =
  teamsFilterSlice.actions;

export const leagueDateValue = (state) => state.teamsFilter.league_date;
export const sortByValue = (state) => state.teamsFilter.sort_by;
export const provinceIDValue = (state) => state.teamsFilter.province_id;
export const cityIDValue = (state) => state.teamsFilter.city_id;
export const brgyIDValue = (state) => state.teamsFilter.brgy_id;
export const searchValue = (state) => state.teamsFilter.search;

export default teamsFilterSlice.reducer;
