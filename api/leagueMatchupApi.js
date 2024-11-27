import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchLeagueMatchups = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupID = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/get-id`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchup = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const createLeagueMatchup = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const generateMatch = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/generate`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const createMatchup = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/periods/${datas.params.period_id}/matchup`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const addPointsToPlayerTeamA = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/add-points-to-team-a`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const addPointsToPlayerTeamB = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/add-points-to-team-b`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deductPointsToPlayerTeamA = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/deduct-points-to-team-a`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deductPointsToPlayerTeamB = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/deduct-points-to-team-b`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const checkIfGameHasStarted = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/check-match-stats-a`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupsMatchSummary = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/match-summary`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupsMatchStats = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/periods/${datas.params.period_id}/match-stats`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const addFoulsToPlayerTeamA = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/add-fouls-to-team-a`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const addFoulsToPlayerTeamB = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/players/${datas.params.player_id}/periods/${datas.params.period_id}/add-fouls-to-team-b`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateArrowSignal = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/arrow-signal`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const endMatch = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-matchups/${datas.params.league_matchup_id}/end-match`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};