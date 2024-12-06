import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
  isAcceptInvitationModalVisible: false,
  isDeclineInvitationModalVisible: false,
  isConfirmDeleteNotificationModalVisible: false,
  requestID: null,
  teamName: null,
  requestBy: null,
  leagueParticipantID: null,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setIsAcceptInvitationModalVisible: (state, action) => {
      state.isAcceptInvitationModalVisible = action.payload;
    },
    setIsDeclineInvitationModalVisible: (state, action) => {
      state.isDeclineInvitationModalVisible = action.payload;
    },
    setIsConfirmDeleteNotificationModalVisible: (state, action) => {
      state.isConfirmDeleteNotificationModalVisible = action.payload;
    },
    setTeamName: (state, action) => {
      state.teamName = action.payload;
    },
    setRequestBy: (state, action) => {
      state.requestBy = action.payload;
    },
    setRequestID: (state, action) => {
      state.requestID = action.payload;
    },
    setLeagueParticipantID: (state, action) => {
      state.leagueParticipantID = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setNotifications,
  setIsAcceptInvitationModalVisible,
  setIsDeclineInvitationModalVisible,
  setIsConfirmDeleteNotificationModalVisible,
  setTeamName,
  setRequestBy,
  setLeagueParticipantID,
  setRequestID,
} = notificationsSlice.actions;

export const notificationsValue = (state) => state.notifications.notifications;
export const isAcceptInvitationModalVisibleValue = (state) =>
  state.notifications.isAcceptInvitationModalVisible;
export const isDeclineInvitationModalVisibleValue = (state) =>
  state.notifications.isDeclineInvitationModalVisible;
export const isConfirmDeleteNotificationModalVisibleValue = (state) =>
  state.notifications.isConfirmDeleteNotificationModalVisible;
export const requestByValue = (state) => state.notifications.requestBy;
export const teamNameValue = (state) => state.notifications.teamName;
export const leagueParticipantIDValue = (state) =>
  state.notifications.leagueParticipantID;
export const requestIDValue = (state) => state.notifications.requestID;

export default notificationsSlice.reducer;
