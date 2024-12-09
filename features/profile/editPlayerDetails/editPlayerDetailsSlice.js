import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  naturePosition: null,
  secondaryPosition: null,
  height: null,
};

export const editPlayerDetailsSlice = createSlice({
  name: "editPlayerDetails",
  initialState,
  reducers: {
    setNaturePosition: (state, action) => {
      state.naturePosition = action.payload;
    },
    setSecondaryPosition: (state, action) => {
      state.secondaryPosition = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    resetAll: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNaturePosition, setSecondaryPosition, setHeight, resetAll } =
  editPlayerDetailsSlice.actions;

export const naturePositionValue = (state) =>
  state.editPlayerDetails.naturePosition;
export const secondaryPositionValue = (state) =>
  state.editPlayerDetails.secondaryPosition;
export const heightValue = (state) => state.editPlayerDetails.height;

export default editPlayerDetailsSlice.reducer;
