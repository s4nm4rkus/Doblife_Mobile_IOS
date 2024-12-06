import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  round: null,
  rounds: [],
  games: [],
};

export const selectLeagueRoundSlice = createSlice({
  name: "selectLeagueRound",
  initialState,
  reducers: {
    setRound: (state, action) => {
      state.round = action.payload;
    },
    setRounds: (state, action) => {
      state.rounds = action.payload;
    },
    setGames: (state, action) => {
      state.games = action.payload;
    },
  },
});

export const { setRound, setRounds, setGames } = selectLeagueRoundSlice.actions;

export const roundValue = (state) => state.selectLeagueRound.round;
export const roundsValue = (state) => state.selectLeagueRound.rounds;
export const gamesValue = (state) => state.selectLeagueRound.games;

export default selectLeagueRoundSlice.reducer;
