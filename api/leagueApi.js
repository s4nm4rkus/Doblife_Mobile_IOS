import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchLeagues = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  try {
    const response = await axios(config);
    console.log("Leagues fetched successfully:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Error Status Code:", error.response.status);
      console.log("Error Response Data:", error.response.data);
    } else {
      console.log("Network or Configuration Error:", error.message);
    }
    throw error;
  }
};

export const fetchLeague = async (datas) => {
  try {
    // Log the entire datas object
    console.log("Datas object: ", datas);

    if (!datas.userToken) {
      throw new Error("Missing or invalid user token.");
    }

    const config = {
      method: "get",
      url: `${BASE_URL}/leagues/${datas.params.league_id}`,
      headers: {
        Authorization: `Bearer ${datas.userToken}`,
        "Content-Type": "application/json",
      },
      params: datas.params,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    // Error handling as before
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios Error: ",
        error.response ? error.response.data : error.message
      );
      console.error(
        "Axios Error Status: ",
        error.response ? error.response.status : "No response status"
      );
    } else {
      console.error("General Error: ", error.message);
    }
    throw error;
  }
};

export const fetchMyLeagues = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/users/${datas.params.user_id}/profiles/${datas.params.profile_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchups = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupRounds = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/league-rounds/league-season-categories/${datas.params.league_season_category_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupSchedules = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/league-season-categories/${datas.params.league_season_category_id}/league-rounds/${datas.params.round_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupsFeed = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/feed`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupsUpcoming = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/upcoming`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueMatchupsOngoing = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/ongoing`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchFilteredLeagueMatchups = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/matchups/filtered`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchLeagueDobcoinsUpcomingLeagues = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/dobcoins/upcoming`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchStatusAndJoinStatus = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/league-seasons/${datas.params.league_id}/status-and-join-status`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const fetchPlayerLeagues = async (datas) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/leagues/player/${datas.params.profile_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const createLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/leagues`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const closeLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/leagues/${datas.params.league_id}/close`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const openLeague = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/leagues/${datas.params.league_id}/open`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const updateDescriptions = async (datas) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/leagues/${datas.params.league_id}/descriptions`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};

export const deleteLeague = async (datas) => {
  const config = {
    method: "delete",
    url: `${BASE_URL}/leagues/${datas.params.league_id}`,
    headers: {
      Authorization: `Bearer ${datas.userToken}`,
      "Content-Type": "application/json",
    },
    params: datas.params,
  };

  const response = await axios(config);

  return response.data;
};
