import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import {
  setEmailOrMobile,
  setIsVisible,
  setPassword,
  setStep,
  setUserId,
} from "../features/auth/authSlice";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  const login = (emailOrMobile, password, navigation) => {
    console.log("Starting login...");
    console.log("Email/Mobile:", emailOrMobile);
    console.log("Password:", password);

    setIsLoading(true);

    axios
      .post(
        BASE_URL + "/login",
        {
          email: emailOrMobile,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Response received:", response.data);

        if (response.data.code === 200) {
          console.log("Login successful. User token and profile being set...");
          SecureStore.setItemAsync("userToken", response.data.token);
          AsyncStorage.setItem(
            "userProfile",
            JSON.stringify(response.data.user_profile)
          );
          setUserProfile(response.data.user_profile);
          setUserToken(response.data.token);
          return;
        }

        if (response.data.code === 1) {
          console.log("User needs to register. Redirecting...");
          dispatch(setEmailOrMobile(response.data.email_or_mobile));
          dispatch(setUserId(response.data.user_id));
          dispatch(setPassword(response.data.password));
          dispatch(setStep(4));
          navigation.navigate("Register");
          return;
        }

        console.log("Login failed:", response.data.message);
        Toast.show({
          type: "customErrorToast",
          text1: "Oh snap!",
          text2: response.data.message,
        });
      })
      .catch((error) => {
        console.error("Error response:", error.response);
        console.error("Error object:", error);
      })
      .finally(() => {
        console.log("Login process completed. IsLoading being set to false.");
        setIsLoading(false);
      });
  };

  const loginWithFacebook = (access_token) => {
    axios
      .post(
        BASE_URL + "/login/facebook",
        {
          access_token: access_token,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data.code === 200) {
          SecureStore.setItemAsync("userToken", response.data.token);
          AsyncStorage.setItem(
            "userProfile",
            JSON.stringify(response.data.user_profile)
          );
          setUserProfile(response.data.user_profile);
          setUserToken(response.data.token);
          return;
        }

        Toast.show({
          type: "customErrorToast",
          text1: "Oh snap!",
          text2: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error);
        setIsLoading(true);
      });
  };

  const forgotPassword = (email, navigation) => {
    if (email == "") {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "Email field is required",
      });

      return;
    }

    axios
      .post(
        BASE_URL + "/password/email",
        {
          email: email,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(setIsVisible(true));
      })
      .catch((error) => {
        Toast.show({
          type: "customErrorToast",
          text1: "Oh snap!",
          text2: error.response.data.error,
        });
        console.log(error.response);
        console.log(error);
      });
  };

  const logout = () => {
    axios
      .post(
        BASE_URL + "/logout",
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setUserToken(null);
        setUserProfile(null);
        SecureStore.deleteItemAsync("userToken");
        AsyncStorage.removeItem("userProfile");
        setIsLoading(false);
      })
      .catch((error) => {
        setUserToken(null);
        setUserProfile(null);
        SecureStore.deleteItemAsync("userToken");
        AsyncStorage.removeItem("userProfile");
        setIsLoading(false);
        console.log(error);
      });
  };

  const deleteUser = (navigation) => {
    axios
      .delete(BASE_URL + "/users/delete", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserToken(null);
        setUserProfile(null);
        SecureStore.deleteItemAsync("userToken");
        AsyncStorage.removeItem("userProfile");
        setIsLoading(false);
        navigation.navigate("AccountDeleted");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.response);
      })
      .finally(() => {
        setIsLoading(false);
        console.log(error.response);
      });
  };

  const isLoggedIn = async () => {
    setIsLoading(true);
    try {
      let userToken = await SecureStore.getItemAsync("userToken");
      let userProfile = await AsyncStorage.getItem("userProfile");
      userProfile = JSON.parse(userProfile);
      if (userToken) {
        const response = await axios.get(BASE_URL + "/token/validate", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });
        if (userProfile) {
          setUserProfile(userProfile);
          setUserToken(userToken);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setUserToken(null);
      setUserProfile(null);
      SecureStore.deleteItemAsync("userToken");
      AsyncStorage.removeItem("userProfile");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        loginWithFacebook,
        forgotPassword,
        logout,
        deleteUser,
        isLoading,
        userToken,
        userProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
