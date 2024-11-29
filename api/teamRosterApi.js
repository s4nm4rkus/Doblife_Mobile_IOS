import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchTeamRosters = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchMyTeamRosters = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/my-teams`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchTeamPlayers = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/league-participants/${datas.params.league_participant_id}/league-matchups/${datas.params.league_matchup_id}`,
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

export const fetchLeagueTeamPlayers = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/league-participants/${datas.params.league_participant_id}`,
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

export const fetchPlayerPreviousTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/player-previous-teams`,
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

export const fetchPlayerCurrentTeams = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/player-current-teams`,
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

export const fetchTeamProfilePics = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/team-profile-pics`,
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

export const fetchLeaguePlayerPoints = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/team-rosters/league-player-points`,
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

export const updatePlayerStatus = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-rosters/profiles/${datas.params.profile_id}/league-participants/${datas.params.league_participant_id}/status`,
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

export const updateTeamProfilePic = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-rosters/team-profile-pics`,
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

export const checkPlayerActiveTeam = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-rosters/profiles/${datas.params.profile_id}/check-player-active-team`,
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

export const deleteTeamRoster = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/team-rosters/league-participants/${datas.params.league_participant_id}/delete-team-roster`,
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
