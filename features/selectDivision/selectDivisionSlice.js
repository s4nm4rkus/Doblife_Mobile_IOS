import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagueSeasonCategories: [],
  leagueSeasonCategory: null,
};

export const selectDivisionSlice = createSlice({
  name: "selectDivision",
  initialState,
  reducers: {
    setLeagueSeasonCategories: (state, action) => {
      state.leagueSeasonCategories = action.payload;
    },
    setLeagueSeasonCategory: (state, action) => {
      state.leagueSeasonCategory = action.payload;
    },
  },
});

export const { setLeagueSeasonCategories, setLeagueSeasonCategory } =
  selectDivisionSlice.actions;

export const leagueSeasonCategoriesValue = (state) =>
  state.selectDivision.leagueSeasonCategories;
export const leagueSeasonCategoryValue = (state) =>
  state.selectDivision.leagueSeasonCategory;

export default selectDivisionSlice.reducer;
