import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchCountries = async () => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/countries`
  };

  const response = await axios(config);

  return response.data;
};