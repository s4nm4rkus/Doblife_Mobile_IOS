import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../utils/config";

const login = async (emailOrMobile, password) => {
  try {
    const response = await axios.post(
      BASE_URL + "/login",
      {
        emailOrMobile: emailOrMobile,
        password: password,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

const register = async (
  firstname,
  middlename,
  lastname,
  mobile_number,
  email,
  password,
  confirmPassword
) => {
  try {
    const response = await axios.post(
      BASE_URL + "/register",
      {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        mobile_number: mobile_number,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error during register:", error);
    throw error;
  }
};

const requestOtp = async (identifier, value) => {
  try {
    const response = await axios.post(
      BASE_URL + "/request_otp",
      {
        [identifier]: value,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error during request:", error);
    throw error;
  }
};

const verifyOtp = async (identifier, value, otp) => {
  try {
    const response = await axios.post(
      BASE_URL + "/verify_otp",
      {
        [identifier]: value,
        otp: otp,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.log(error.response);
    console.error("Error during verification:", error);
    throw error;
  }
};

const validateEmailOrMobileNumber = async (mobile_number, email) => {
  try {
    const response = await axios.post(
      BASE_URL + "/validate-email-or-mobile-number",
      {
        mobile_number: mobile_number,
        email: email,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.response);
    console.error("Error during verification:", error);
    throw error;
  }
};

const deleteUserById = async (userId) => {
  try {
    const response = await axios.delete(BASE_URL + `/users/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

const getUserInfoByToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(BASE_URL + "/user/info", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const userData = response.data;
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export {
  login,
  register,
  getUserInfoByToken,
  requestOtp,
  verifyOtp,
  validateEmailOrMobileNumber,
  deleteUserById,
};
