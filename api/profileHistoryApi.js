import { BASE_URL } from "../utils/config";
import axios from 'axios';

export const fetchProfileHistories = async (datas) => {
  const config = {
    method: 'get',
    url: `${BASE_URL}/profile-histories`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      'Content-Type': 'application/json',
    },
    params: datas.params,
  };

  const response = await axios(config);
  
  return response.data;
};