import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchRequests = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/requests/league-participants/${datas.params.league_participants_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchTeamRequests = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/requests/teams`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const joinTeamRequest = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const recruitPlayers = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/recruit-players`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const declineRequest = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/decline`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const acceptRequest = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/accept`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deleteRequest = async (datas) => {
  const config = {
    method: "delete",
    url: `${BASE_URL}/requests`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const acceptTeamRequest = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/teams/accept`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const declineTeamRequest = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/teams/decline`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const readProfileNotifications = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/read-profile-notifications`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const readTeamNotifications = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/requests/league-participants/${datas.params.league_participants_id}/read-team-notifications`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
