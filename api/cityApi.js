import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchCities = async (provinceID) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/cities`,
    params: {province_id: provinceID},
  };

  const response = await axios(config);

  return response.data;
};