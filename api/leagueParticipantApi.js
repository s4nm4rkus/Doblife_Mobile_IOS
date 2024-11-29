import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchLeagueParticipants = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/league-participants`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueParticipantsTeam = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/league-participants/${datas.params.league_participant_id}/team`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const checkSameLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/league-participants/${datas.params.league_participant_id}/check-same-league`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const checkTeamSameLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/league-participants/team-profiles/${datas.params.team_id}/profiles/${datas.params.profile_id}/check-team-same-league`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const joinLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/league-participants/join`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
