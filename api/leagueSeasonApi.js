import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const updateSeasonDetails = async (datas) => {
  const config = {
    method: 'post',
    url: `${BASE_URL}/league-seasons/season-details/${datas.params.league_season_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};