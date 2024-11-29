import { BASE_URL } from "../utils/config";
import axios from "axios";

export const fetchProvinces = async (countryID) => {
  const config = {
    method: "get",
    url: `${BASE_URL}/provinces`,
    params: { country_id: countryID },
  };

  const response = await axios(config);

  return response.data;
};
