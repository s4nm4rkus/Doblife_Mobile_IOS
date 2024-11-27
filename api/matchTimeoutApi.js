import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchTeamTimeouts = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/match-timeouts/league-matchups/${datas.params.league_matchup_id}/league-participants/${datas.params.league_participant_id}/periods/${datas.params.period_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchTeamTimeoutsCount = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/match-timeouts/league-matchups/${datas.params.league_matchup_id}/league-participants/${datas.params.league_participant_id}/periods/${datas.params.period_id}/count`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const createTeamTimeout = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/match-timeouts/league-matchups/${datas.params.league_matchup_id}/league-participants/${datas.params.league_participant_id}/periods/${datas.params.period_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};