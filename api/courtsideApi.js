import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const searchCourtsideSuggestions = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/courtsides/search-suggestions`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};

export const searchCourtsideResults = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/courtsides/search-results`,
    headers: {
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};