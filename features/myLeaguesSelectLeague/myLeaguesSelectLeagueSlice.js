import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagueID: null,
};

export const myLeaguesSelectLeagueSlice = createSlice({
  name: "myLeaguesSelectLeague",
  initialState,
  reducers: {
    setLeagueID: (state, action) => {
      state.leagueID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLeagueID } = myLeaguesSelectLeagueSlice.actions;

export const leagueIDValue = (state) => state.myLeaguesSelectLeague.leagueID;

export default myLeaguesSelectLeagueSlice.reducer;
