import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {},
};

export const createTeamSlice = createSlice({
  name: "createTeam",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setFormData } = createTeamSlice.actions;

export const formValue = (state) => state.createTeam.form;

export default createTeamSlice.reducer;
