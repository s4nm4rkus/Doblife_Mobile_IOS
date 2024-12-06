import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: null,
};

export const sortParticipantsSlice = createSlice({
  name: "sortParticipants",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortParticipantsSlice.actions;

export const sortByValue = (state) => state.sortParticipants.sortBy;

export default sortParticipantsSlice.reducer;
