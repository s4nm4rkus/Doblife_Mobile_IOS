import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchLeagueSeasonCategoriesByLeague = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-season-categories/league/${datas.params.league_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const fetchLeagueSeasonFormat = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/league-season-categories/format`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const updateDivisions = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-season-categories/divisions`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};