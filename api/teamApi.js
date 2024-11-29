import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchOwnedTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/owned-teams`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchPlayedInTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/played-in-teams`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchFloatingTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/floating-teams`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchMatches = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/${datas.params.team_id}/matches`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchUpcomingMatches = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/${datas.params.team_id}/upcoming-matches`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchCheckIsTeamOwner = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/${datas.team_id}/profiles/${datas.profile_id}/is-team-owner`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const findTeam = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-profiles/${datas.params.code}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const createTeam = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-profiles`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    data: datas.formData,
  };

  const response = await axios(config);

  return response.data;
};

export const joinTeam = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-profiles/join`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const dropPlayer = async (datas) => {
  const config = {
    method: "delete",
    url: `${BASE_URL}/team-profiles/${datas.team_id}/profiles/${datas.profile_id}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas,
  };

  const response = await axios(config);

  return response.data;
};
