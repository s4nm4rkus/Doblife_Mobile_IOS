import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchProfiles = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/profiles`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchProfilesByTeam = async (params) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/profiles/teams/${params.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    params: params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchPlayerDobcoins = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/profiles/dobcoins`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchPlayerProfilePics = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/profiles/profile-pics`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updatePlayerProfilePic = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/profile-pics`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "multipart/form-data",
    },
    data: datas.formData,
  };

  const response = await axios(config);

  return response.data;
};
