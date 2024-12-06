import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamParticipants: [],
  selectedTeamParticipants: [],
  search: null,
};

export const addBracketSlice = createSlice({
  name: "addBracket",
  initialState,
  reducers: {
    setTeamParticipants: (state, action) => {
      let items = action.payload;

      if (state.selectedTeamParticipants.length != 0) {
        items = action.payload.filter(function (teamParticipant) {
          return !state.selectedTeamParticipants.find(function (selectedTeam) {
            return teamParticipant.id === selectedTeam.id;
          });
        });
      }
      state.teamParticipants = items;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSelectedTeamParticipants: (state, action) => {
      state.selectedTeamParticipants.push(action.payload);
    },
    addToTeamParticipants: (state, action) => {
      state.teamParticipants.push(action.payload);
    },
    removeSelectedTeamParticipant: (state, action) => {
      state.selectedTeamParticipants = state.selectedTeamParticipants.filter(
        (object) => {
          return object.id !== action.payload;
        }
      );
    },
    removeAllSelectedTeamParticipant: (state, action) => {
      state.selectedTeamParticipants.forEach((team) => {
        state.teamParticipants.push(team);
      });
      state.selectedTeamParticipants = [];
    },
    removeTeamParticipant: (state, action) => {
      state.teamParticipants = state.teamParticipants.filter((object) => {
        return object.id !== action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTeamParticipants,
  setSelectedTeamParticipants,
  addToTeamParticipants,
  removeSelectedTeamParticipant,
  removeTeamParticipant,
  removeAllSelectedTeamParticipant,
  setSearch,
} = addBracketSlice.actions;

export const teamParticipantsValue = (state) =>
  state.addBracket.teamParticipants;
export const selectedTeamParticipantsValue = (state) =>
  state.addBracket.selectedTeamParticipants;
export const searchValue = (state) => state.addBracket.search;

export default addBracketSlice.reducer;
