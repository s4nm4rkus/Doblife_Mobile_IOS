import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagueDescription: null,
  seasonDescription: null,
};

export const leaguesEditDescriptionsSlice = createSlice({
  name: "leaguesEditDescriptions",
  initialState,
  reducers: {
    setLeagueDescription: (state, action) => {
      state.leagueDescription = action.payload;
    },
    setSeasonDescription: (state, action) => {
      state.seasonDescription = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLeagueDescription, setSeasonDescription } =
  leaguesEditDescriptionsSlice.actions;

export const leagueDescriptionValue = (state) =>
  state.leaguesEditDescriptions.leagueDescription;
export const seasonDescriptionValue = (state) =>
  state.leaguesEditDescriptions.seasonDescription;

export default leaguesEditDescriptionsSlice.reducer;
