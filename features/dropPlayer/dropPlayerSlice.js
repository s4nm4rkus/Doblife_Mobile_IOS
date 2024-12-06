import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalVisible: false,
  playerName: null,
  playerID: null,
  playerProfileID: null,
  hasMatchSummary: false,
  playerStatus: "active",
};

export const dropPlayerSlice = createSlice({
  name: "dropPlayer",
  initialState,
  reducers: {
    setIsModalVisible: (state, action) => {
      state.isModalVisible = action.payload;
    },
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
    },
    setPlayerStatus: (state, action) => {
      state.playerStatus = action.payload;
    },
    setPlayerID: (state, action) => {
      state.playerID = action.payload;
    },
    setPlayerProfileID: (state, action) => {
      state.playerProfileID = action.payload;
    },
    setHasMatchSummary: (state, action) => {
      state.hasMatchSummary = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsModalVisible,
  setPlayerName,
  setPlayerID,
  setHasMatchSummary,
  setPlayerProfileID,
  setPlayerStatus,
} = dropPlayerSlice.actions;

export const isModalVisibleValue = (state) => state.dropPlayer.isModalVisible;
export const playerNameValue = (state) => state.dropPlayer.playerName;
export const playerIDValue = (state) => state.dropPlayer.playerID;
export const playerStatusValue = (state) => state.dropPlayer.playerStatus;
export const playerProfileIDValue = (state) => state.dropPlayer.playerProfileID;
export const hasMatchSummaryValue = (state) => state.dropPlayer.hasMatchSummary;

export default dropPlayerSlice.reducer;
