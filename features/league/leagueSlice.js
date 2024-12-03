import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leagueData: null,
  isOwner: false,
  isJoin: false,
  isOpen: false,
  isCloseLeagueModalVisible: false,
};

export const leagueSlice = createSlice({
  name: "league",
  initialState,
  reducers: {
    setLeagueData: (state, action) => {
      state.leagueData = action.payload;
    },
    setIsOwner: (state, action) => {
      state.isOwner = action.payload;
    },
    setIsJoin: (state, action) => {
      state.isJoin = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsCloseLeagueModalVisible: (state, action) => {
      state.isCloseLeagueModalVisible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLeagueData,
  setIsOwner,
  setIsJoin,
  setIsCloseLeagueModalVisible,
  setIsOpen,
} = leagueSlice.actions;

export const leagueDataValue = (state) => state.league.leagueData;
export const isOwnerValue = (state) => state.league.isOwner;
export const isJoinValue = (state) => state.league.isJoin;
export const isCloseLeagueModalVisibleValue = (state) =>
  state.league.isCloseLeagueModalVisible;
export const isOpenValue = (state) => state.league.isOpen;

export default leagueSlice.reducer;
