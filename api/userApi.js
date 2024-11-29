import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchUserProfile = async (userToken) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/auths/user/info`,
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios(config);

  return response.data;
};

export const updatePlayerDetails = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/player-details`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updatePlayerStatus = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/player-status`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateBasicInfo = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/basic-info`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateBirthplace = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/basic-info/birthplace`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateHometown = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/basic-info/hometown`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateLivingAddress = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/basic-info/living-address`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateVotingAddress = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profiles/basic-info/voting-address`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
