import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brackets: [],
  bracket: null,
};

export const selectBracketSlice = createSlice({
  name: "selectBracket",
  initialState,
  reducers: {
    setBrackets: (state, action) => {
      state.brackets = action.payload;
    },
    setBracket: (state, action) => {
      state.bracket = action.payload;
    },
  },
});

export const { setBrackets, setBracket } = selectBracketSlice.actions;

export const bracketsValue = (state) => state.selectBracket.brackets;
export const bracketValue = (state) => state.selectBracket.bracket;

export default selectBracketSlice.reducer;
