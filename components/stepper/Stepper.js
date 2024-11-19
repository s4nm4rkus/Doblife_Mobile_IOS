import React, { useState } from "react";
import { View, Image, Text } from "react-native";

import StepOne from "./component/stepOne/StepOne";
import StepTwo from "./component/stepTwo/StepTwo";
import StepThree from "./component/stepThree/StepThree";
import StepFour from "./component/stepFour/StepFour";
import styles from "./stepper.style";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import {
  emailOrMobileValue,
  passwordValue,
  setEmailOrMobile,
  setPassword,
  setUserId,
  setUserInfo,
  stepValue,
  userIdValue,
  userInfoValue,
} from "../../features/auth/authSlice.js";

const Stepper = ({ navigation }) => {
  const dispatch = useDispatch();
  const step = useSelector(stepValue);

  const handleStepComplete = (stepName, data) => {
    if (stepName === "userInfo") {
      dispatch(setUserInfo(data));
    } else if (stepName === "emailOrMobile") {
      dispatch(setEmailOrMobile(data));
    } else if (stepName === "userId") {
      dispatch(setUserId(data.id));
      dispatch(setPassword(data.password));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/login-logo.png")}
          style={styles.logoIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.signUpLabel}>Sign Up</Text>
      </View>
      {step === 1 && (
        <StepOne onStepComplete={handleStepComplete} navigation={navigation} />
      )}
      {step === 2 && (
        <StepTwo onStepComplete={handleStepComplete} navigation={navigation} />
      )}
      {step === 3 && (
        <StepThree
          onStepComplete={handleStepComplete}
          navigation={navigation}
        />
      )}
      {step === 4 && <StepFour navigation={navigation} />}
    </View>
  );
};

export default Stepper;
