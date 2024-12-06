import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLeagueMatchupID } from "../../api/leagueMatchupApi";

const initialState = {
  leagueMatchUpID: null,
  playerID: null,
  playerName: null,
  period: null,
  teamAName: null,
  teamBName: null,
  teamAID: null,
  teamBID: null,
  teamAPlayers: [],
  teamBPlayers: [],
  timeoutDetails: [],
  periods: [],
  isAddPointsModalVisible: false,
  isAddFoulsModalVisible: false,
  isTimeoutCalledModalVisible: false,
  isTimeoutCalledDetailsModalVisible: false,
  isStartGameModalVisible: false,
  isGameStarted: false,
  isPlayerTeamA: false,
  isPlayerTeamB: false,
  playerTotalPoints: 0,
  teamTotalTimeouts: 0,
  playerTotalFouls: 0,
  teamATotalPoints: 0,
  teamBTotalPoints: 0,
  teamATotalFouls: 0,
  teamBTotalFouls: 0,
  teamATotalTimeouts: 0,
  teamBTotalTimeouts: 0,
  callingTeam: null,
  gameData: {
    scores: {
      teamA: 0,
      teamB: 0,
    },
    fouls: {
      teamA: 0,
      teamB: 0,
    },
    timeouts: {
      teamA: 0,
      teamB: 0,
    },
    players: {
      teamA: {
        player1: { score: 0, fouls: 0 },
        player2: { score: 0, fouls: 0 },
      },
      teamB: {
        player1: { score: 0, fouls: 0 },
        player2: { score: 0, fouls: 0 },
      },
    },
    arrow_signal: null,
  },
};

export const scoreBoardSlice = createSlice({
  name: "scoreBoard",
  initialState,
  reducers: {
    setIsAddPointsModalVisible: (state, action) => {
      state.isAddPointsModalVisible = action.payload;
    },
    setIsAddFoulsModalVisible: (state, action) => {
      state.isAddFoulsModalVisible = action.payload;
    },
    setIsTimeoutCalledModalVisible: (state, action) => {
      state.isTimeoutCalledModalVisible = action.payload;
    },
    setIsTimeoutCalledDetailsModalVisible: (state, action) => {
      state.isTimeoutCalledDetailsModalVisible = action.payload;
    },
    setIsStartGameModalVisible: (state, action) => {
      state.isStartGameModalVisible = action.payload;
    },
    setIsGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    },
    setCallingTeam: (state, action) => {
      state.callingTeam = action.payload;
    },
    setLeagueMatchUpID: (state, action) => {
      state.leagueMatchUpID = action.payload;
    },
    setTeamAID: (state, action) => {
      state.teamAID = action.payload;
    },
    setTeamBID: (state, action) => {
      state.teamBID = action.payload;
    },
    setPeriod: (state, action) => {
      state.period = action.payload;
    },
    setPeriods: (state, action) => {
      state.periods = action.payload;
    },
    setTeamAName: (state, action) => {
      state.teamAName = action.payload;
    },
    setTeamBName: (state, action) => {
      state.teamBName = action.payload;
    },
    setTeamAPlayers: (state, action) => {
      state.teamAPlayers = action.payload;
    },
    setTeamBPlayers: (state, action) => {
      state.teamBPlayers = action.payload;
    },
    setPlayerID: (state, action) => {
      state.playerID = action.payload;
    },
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
    },
    setIsPlayerTeamA: (state, action) => {
      state.isPlayerTeamA = action.payload;
    },
    setIsPlayerTeamB: (state, action) => {
      state.isPlayerTeamB = action.payload;
    },
    setPlayerTotalPoints: (state, action) => {
      state.playerTotalPoints = action.payload;
    },
    setPlayerTotalFouls: (state, action) => {
      state.playerTotalFouls = action.payload;
    },
    setTeamATotalPoints: (state, action) => {
      state.teamATotalPoints = action.payload;
    },
    setTeamBTotalPoints: (state, action) => {
      state.teamBTotalPoints = action.payload;
    },
    setTeamATotalFouls: (state, action) => {
      state.teamATotalFouls = action.payload;
    },
    setTeamBTotalFouls: (state, action) => {
      state.teamBTotalFouls = action.payload;
    },
    setTeamTotalTimeouts: (state, action) => {
      state.teamTotalTimeouts = action.payload;
    },
    setTimeoutDetails: (state, action) => {
      state.timeoutDetails = action.payload;
    },
    addPlayerATotalPoints: (state, action) => {
      const { playerID, points } = action.payload;
      const player = state.teamAPlayers.find(
        (player) => player.id === playerID
      );
      if (player) {
        player.match_ingame_player_a.total_points += points;
        state.playerTotalPoints = player.match_ingame_player_a.total_points;
      }
    },
    addPlayerBTotalPoints: (state, action) => {
      const { playerID, points } = action.payload;
      const player = state.teamBPlayers.find(
        (player) => player.id === playerID
      );
      if (player) {
        player.match_ingame_player_b.total_points += points;
        state.playerTotalPoints = player.match_ingame_player_b.total_points;
      }
    },
    addTeamATotalPoints: (state, action) => {
      const { points } = action.payload;
      state.teamATotalPoints += points;
    },
    addTeamBTotalPoints: (state, action) => {
      const { points } = action.payload;
      state.teamBTotalPoints += points;
    },
    deductPlayerATotalPoints: (state, action) => {
      const { playerID, points } = action.payload;
      const player = state.teamAPlayers.find(
        (player) => player.id === playerID
      );
      if (player) {
        player.match_ingame_player_a.total_points -= points;
        state.playerTotalPoints = player.match_ingame_player_a.total_points;
      }
    },
    deductPlayerBTotalPoints: (state, action) => {
      const { playerID, points } = action.payload;
      const player = state.teamBPlayers.find(
        (player) => player.id === playerID
      );
      if (player) {
        player.match_ingame_player_b.total_points -= points;
        state.playerTotalPoints = player.match_ingame_player_b.total_points;
      }
    },
    deductTeamATotalPoints: (state, action) => {
      const { points } = action.payload;
      state.teamATotalPoints -= points;
    },
    deductTeamBTotalPoints: (state, action) => {
      const { points } = action.payload;
      state.teamBTotalPoints -= points;
    },
    addPlayerATotalFouls: (state, action) => {
      const { playerID, infraction } = action.payload;
      const player = state.teamAPlayers.find(
        (player) => player.id === playerID
      );
      if (player && infraction !== "technical") {
        player.match_ingame_player_a.total_fouls += 1;
        state.playerTotalFouls = player.match_ingame_player_a.total_fouls;
      }
    },
    addPlayerBTotalFouls: (state, action) => {
      const { playerID, infraction } = action.payload;
      const player = state.teamBPlayers.find(
        (player) => player.id === playerID
      );
      if (player && infraction !== "technical") {
        player.match_ingame_player_b.total_fouls += 1;
        state.playerTotalFouls = player.match_ingame_player_b.total_fouls;
      }
    },
    addTeamATotalTimeouts: (state, action) => {
      state.teamATotalTimeouts += 1;
    },
    addTeamBTotalTimeouts: (state, action) => {
      state.teamBTotalTimeouts += 1;
    },
    addTeamTotalTimeouts: (state, action) => {
      state.teamTotalTimeouts += 1;
    },
    setTeamATotalTimeouts: (state, action) => {
      state.teamATotalTimeouts = action.payload;
    },
    setTeamBTotalTimeouts: (state, action) => {
      state.teamBTotalTimeouts = action.payload;
    },
    addTeamATotalFouls: (state, action) => {
      const { infraction } = action.payload;
      if (infraction !== "technical") {
        state.teamATotalFouls += 1;
      }
    },
    addTeamBTotalFouls: (state, action) => {
      const { infraction } = action.payload;
      if (infraction !== "technical") {
        state.teamBTotalFouls += 1;
      }
    },
    resetAll: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMatchupIDAsync.fulfilled, (state, action) => {
      state.leagueMatchUpID = action.payload;
    });
  },
});

export const fetchMatchupIDAsync = createAsyncThunk(
  "scoreBoard/fetchMatchupIDAsync",
  async (datas, { rejectWithValue }) => {
    try {
      const response = await fetchLeagueMatchupID(datas);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const {
  setIsAddPointsModalVisible,
  setIsAddFoulsModalVisible,
  setIsTimeoutCalledModalVisible,
  setIsTimeoutCalledDetailsModalVisible,
  setIsStartGameModalVisible,
  setIsGameStarted,
  setLeagueMatchUpID,
  setPeriod,
  setPeriods,
  setTeamAID,
  setTeamBID,
  setTeamAName,
  setTeamBName,
  setTeamAPlayers,
  setTeamBPlayers,
  setPlayerID,
  setPlayerName,
  setIsPlayerTeamA,
  setIsPlayerTeamB,
  setPlayerTotalPoints,
  setPlayerTotalFouls,
  setTeamATotalPoints,
  setTeamBTotalPoints,
  setTeamATotalFouls,
  setTeamBTotalFouls,
  addPlayerATotalPoints,
  addPlayerBTotalPoints,
  addTeamATotalPoints,
  addTeamBTotalPoints,
  deductPlayerATotalPoints,
  deductPlayerBTotalPoints,
  deductTeamATotalPoints,
  deductTeamBTotalPoints,
  addPlayerATotalFouls,
  addPlayerBTotalFouls,
  addPlayerATotalTimeouts,
  addPlayerBTotalTimeouts,
  addTeamATotalTimeouts,
  addTeamBTotalTimeouts,
  setTeamATotalTimeouts,
  setTeamBTotalTimeouts,
  setTeamTotalTimeouts,
  addTeamATotalFouls,
  addTeamBTotalFouls,
  setCallingTeam,
  addTeamTotalTimeouts,
  setTimeoutDetails,
  resetAll,
} = scoreBoardSlice.actions;

export const isAddPointsModalVisibleValue = (state) =>
  state.scoreBoard.isAddPointsModalVisible;
export const isAddFoulsModalVisibleValue = (state) =>
  state.scoreBoard.isAddFoulsModalVisible;
export const isTimeoutCalledModalVisibleValue = (state) =>
  state.scoreBoard.isTimeoutCalledModalVisible;
export const isTimeoutCalledDetailsModalVisibleValue = (state) =>
  state.scoreBoard.isTimeoutCalledDetailsModalVisible;
export const isStartGameModalVisibleValue = (state) =>
  state.scoreBoard.isStartGameModalVisible;
export const isGameStartedValue = (state) => state.scoreBoard.isGameStarted;
export const leagueMatchUpIDValue = (state) => state.scoreBoard.leagueMatchUpID;
export const periodValue = (state) => state.scoreBoard.period;
export const teamANameValue = (state) => state.scoreBoard.teamAName;
export const teamBNameValue = (state) => state.scoreBoard.teamBName;
export const teamAPlayersValue = (state) => state.scoreBoard.teamAPlayers;
export const teamBPlayersValue = (state) => state.scoreBoard.teamBPlayers;
export const playerIDValue = (state) => state.scoreBoard.playerID;
export const playerNameValue = (state) => state.scoreBoard.playerName;
export const teamATotalPointsValue = (state) =>
  state.scoreBoard.teamATotalPoints;
export const teamBTotalPointsValue = (state) =>
  state.scoreBoard.teamBTotalPoints;
export const teamATotalFoulsValue = (state) => state.scoreBoard.teamATotalFouls;
export const teamBTotalFoulsValue = (state) => state.scoreBoard.teamBTotalFouls;
export const playerTotalPointsValue = (state) =>
  state.scoreBoard.playerTotalPoints;
export const playerTotalFoulsValue = (state) =>
  state.scoreBoard.playerTotalFouls;
export const isPlayerTeamAValue = (state) => state.scoreBoard.isPlayerTeamA;
export const isPlayerTeamBValue = (state) => state.scoreBoard.isPlayerTeamB;
export const teamATotalTimeoutsValue = (state) =>
  state.scoreBoard.teamATotalTimeouts;
export const teamBTotalTimeoutsValue = (state) =>
  state.scoreBoard.teamBTotalTimeouts;
export const teamTotalTimeoutsValue = (state) =>
  state.scoreBoard.teamTotalTimeouts;
export const teamAIDValue = (state) => state.scoreBoard.teamAID;
export const teamBIDValue = (state) => state.scoreBoard.teamBID;
export const callingTeamValue = (state) => state.scoreBoard.callingTeam;
export const timeoutDetailsValue = (state) => state.scoreBoard.timeoutDetails;
export const periodsValue = (state) => state.scoreBoard.periods;

export default scoreBoardSlice.reducer;
