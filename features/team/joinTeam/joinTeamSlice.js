import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  team: {},
}

export const joinTeamSlice = createSlice({
  name: 'joinTeam',
  initialState,
  reducers: {
    setTeam: (state, action) => {
      state.team = action.payload;
    },
  },
})

export const { 
  setTeam
} = joinTeamSlice.actions

export const teamValue = state => state.joinTeam.team;

export default joinTeamSlice.reducer