import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchBrackets = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/brackets`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const createBracket = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/brackets`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
