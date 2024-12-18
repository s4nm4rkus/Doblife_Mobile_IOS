import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  league_date: null,
  sort_by: null,
  province_id: null,
  city_id: null,
  brgy_id: null,
  search: null,
};

export const leaguesFilterSlice = createSlice({
  name: "leaguesFilter",
  initialState,
  reducers: {
    setLeagueDate: (state, action) => {
      state.league_date = action.payload;
    },
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
export const {
  setLeagueDate,
  setSortBy,
  setProvinceID,
  setCityID,
  setBrgyID,
  setSearch,
} = leaguesFilterSlice.actions;

export const leagueDateValue = (state) => state.leaguesFilter.league_date;
export const sortByValue = (state) => state.leaguesFilter.sort_by;
export const provinceIDValue = (state) => state.leaguesFilter.province_id;
export const cityIDValue = (state) => state.leaguesFilter.city_id;
export const brgyIDValue = (state) => state.leaguesFilter.brgy_id;
export const searchValue = (state) => state.leaguesFilter.search;

export default leaguesFilterSlice.reducer;
