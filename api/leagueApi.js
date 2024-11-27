import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchLeagues = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeague = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/${datas.params.league_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchMyLeagues = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/users/${datas.params.user_id}/profiles/${datas.params.profile_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchups = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchupRounds = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/league-rounds/league-season-categories/${datas.params.league_season_category_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchupSchedules = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/league-season-categories/${datas.params.league_season_category_id}/league-rounds/${datas.params.round_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchupsFeed = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/feed`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchupsUpcoming = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/upcoming`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueMatchupsOngoing = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/ongoing`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchFilteredLeagueMatchups = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/matchups/filtered`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueDobcoinsUpcomingLeagues = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/dobcoins/upcoming`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchStatusAndJoinStatus = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/leagues/league-seasons/${datas.params.league_id}/status-and-join-status`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const closeLeague = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/leagues/${datas.params.league_id}/close`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const openLeague = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/leagues/${datas.params.league_id}/open`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const updateDescriptions = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/leagues/${datas.params.league_id}/descriptions`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deleteLeague = async (datas) => {
  const config = {
    method: 'delete',
    url: `${BASE_URL}/leagues/${datas.params.league_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};