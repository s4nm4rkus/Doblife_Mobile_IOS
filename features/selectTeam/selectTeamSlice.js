import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamRosters: [],
  currentPage: 1,
  lastPage: 1,
  paginationButtons: [],
  selectedTeams: [],
  search: null,
};

export const selectTeamSlice = createSlice({
  name: "selectTeam",
  initialState,
  reducers: {
    setPaginationButtons: (state, action) => {
      state.paginationButtons = action.payload;
    },
    setLastPage: (state, action) => {
      state.lastPage = action.payload;
    },
    setTeamRosters: (state, action) => {
      let items = action.payload;

      if (state.selectedTeams.length != 0) {
        items = action.payload.filter(function (profileHistory) {
          return !state.selectedTeams.find(function (selectedTeam) {
            return profileHistory.id === selectedTeam.id;
          });
        });
      }
      state.teamRosters = items;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSelectedTeams: (state, action) => {
      state.selectedTeams.push(action.payload);
    },
    addToTeamRosters: (state, action) => {
      state.teamRosters.push(action.payload);
    },
    removeSelectedTeam: (state, action) => {
      state.selectedTeams = state.selectedTeams.filter((object) => {
        return object.id !== action.payload;
      });
    },
    removeProfileHistory: (state, action) => {
      state.teamRosters = state.teamRosters.filter((object) => {
        return object.id !== action.payload;
      });
    },
    resetAll: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPaginationButtons,
  setLastPage,
  setTeamRosters,
  setCurrentPage,
  setSelectedTeams,
  addToTeamRosters,
  removeSelectedTeam,
  removeProfileHistory,
  setSearch,
  resetAll,
} = selectTeamSlice.actions;

export const teamRostersValue = (state) => state.selectTeam.teamRosters;
export const currentPageValue = (state) => state.selectTeam.currentPage;
export const lastPageValue = (state) => state.selectTeam.lastPage;
export const paginationButtonsValue = (state) =>
  state.selectTeam.paginationButtons;
export const selectedTeamsValue = (state) => state.selectTeam.selectedTeams;
export const searchValue = (state) => state.selectTeam.search;

export default selectTeamSlice.reducer;
