import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeGameNumber: null,
  activeRound: 1,
  bottomSheetOpen: false,
  bottomSheetSelectTeamOpen: false,
  leagueMatchups: {},
};

export const selectMatchupsSlice = createSlice({
  name: "selectMatchups",
  initialState,
  reducers: {
    setActiveGameNumber: (state, action) => {
      state.activeGameNumber = action.payload;
    },
    setActiveRound: (state, action) => {
      state.activeRound = action.payload;
    },
    setLeagueMatchups: (state, action) => {
      state.leagueMatchups = action.payload;
    },
    openBottomSheet: (state, action) => {
      state.bottomSheetOpen = true;
    },
    closeBottomSheet: (state, action) => {
      state.bottomSheetOpen = false;
    },
    openBottomSheetSelectTeam: (state, action) => {
      state.bottomSheetSelectTeamOpen = true;
    },
    closeBottomSheetSelectTeam: (state, action) => {
      state.bottomSheetSelectTeamOpen = false;
    },
    addLeagueMatchup: (state, action) => {
      state.leagueMatchups = { ...state.leagueMatchups, ...action.payload };
    },
    updateDateAndTime: (state, action) => {
      const { key, date_and_time } = action.payload;
      return {
        ...state,
        leagueMatchups: {
          ...state.leagueMatchups,
          [key]: {
            ...state.leagueMatchups[key],
            date_and_time: date_and_time,
          },
        },
      };
    },
    updateMatchup: (state, action) => {
      const { key, matchup } = action.payload;
      return {
        ...state,
        leagueMatchups: {
          ...state.leagueMatchups,
          [key]: {
            ...state.leagueMatchups[key],
            matchup: matchup,
          },
        },
      };
    },
    updateTeamMatchup: (state, action) => {
      const { key, item, team } = action.payload;
      return {
        ...state,
        leagueMatchups: {
          ...state.leagueMatchups,
          [key]: {
            ...state.leagueMatchups[key],
            matchup: {
              ...state.leagueMatchups[key].matchup,
              [team]: item,
            },
          },
        },
      };
    },
    resetAll: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueMatchups,
  setActiveGameNumber,
  setActiveRound,
  openBottomSheet,
  closeBottomSheet,
  openBottomSheetSelectTeam,
  closeBottomSheetSelectTeam,
  addLeagueMatchup,
  updateDateAndTime,
  updateMatchup,
  updateTeamMatchup,
} = selectMatchupsSlice.actions;

export const leagueMatchupsValue = (state) =>
  state.selectMatchups.leagueMatchups;
export const activeGameNumberValue = (state) =>
  state.selectMatchups.activeGameNumber;
export const activeRoundValue = (state) => state.selectMatchups.activeRound;
export const bottomSheetOpenValue = (state) =>
  state.selectMatchups.bottomSheetOpen;
export const bottomSheetSelectTeamOpenValue = (state) =>
  state.selectMatchups.bottomSheetSelectTeamOpen;

export default selectMatchupsSlice.reducer;
