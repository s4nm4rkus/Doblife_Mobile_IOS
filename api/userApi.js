import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchUserProfile = async (userToken) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/user/info`,
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
    url: `${BASE_URL}/profile/player-details`,
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
    url: `${BASE_URL}/profile/player-status`,
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
    url: `${BASE_URL}/profile/basic-info`,
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
    url: `${BASE_URL}/profile/basic-info/birthplace`,
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
    url: `${BASE_URL}/profile/basic-info/hometown`,
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
    url: `${BASE_URL}/profile/basic-info/living-address`,
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
    url: `${BASE_URL}/profile/basic-info/voting-address`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deleteProfileHistory = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/profile/delete-profile-history`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
