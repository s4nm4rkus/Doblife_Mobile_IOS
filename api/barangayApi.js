import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchBarangays = async (cityID) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/barangays`,
    params: {city_id: cityID},
  };

  const response = await axios(config);

  return response.data;
};