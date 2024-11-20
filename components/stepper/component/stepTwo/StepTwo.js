import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Toast from "react-native-toast-message";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./stepTwo.style";
import EmailTabContent from "../../../tab/email/EmailTabContent";
import MobileTabContent from "../../../tab/mobileNumber/TabComponent";
import RegisterFooter from "../../../text/register/RegisterFooter";
import Error from "../../../../components/common/toast/error/Error";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { validateEmailOrMobileNumber } from "../../../../services/auth";
import { addStep } from "../../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";
// import { AccessToken, LoginManager, Profile } from "react-native-fbsdk-next";
import { AuthContext } from "../../../../context/AuthContext";

const signInTypeTabs = ["Mobile Number", "Email"];

const useFadeAnimation = (duration) => {
  const animatedValue = new Animated.Value(0);
  animatedValue.duration = duration;
  return animatedValue;
};

const StepTwo = ({ onStepComplete, navigation }) => {
  const dispatch = useDispatch();
  // const { login, loginWithFacebook } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(signInTypeTabs[1]);
  const [emailOrMobile, setEmailOrMobile] = useState({
    email: "",
    mobile_number: "",
  });
  const [validNumber, setValidNumber] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const fadeAnimationShort = useFadeAnimation(500);
  const fadeAnimationLong = useFadeAnimation(1500);

  useEffect(() => {
    startFadeAnimation(fadeAnimationShort);
    startFadeAnimation(fadeAnimationLong);
  }, []);

  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };

  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            loginWithFacebook(data?.accessToken.toString());
          });
        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  };

  const startFadeAnimation = (animation) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: animation.duration,
      useNativeDriver: true,
    }).start();
  };

  const displayTabContent = () => {
    switch (activeTab) {
      case "Email":
        return (
          <EmailTabContent
            title="Email"
            value={emailOrMobile.email}
            onChangeText={(text) => handleInputChange("email", text)}
            onCheckEmail={handleCheckEmail}
          />
        );
      case "Mobile Number":
        return (
          <MobileTabContent
            title="Mobile Number"
            defaultValue={emailOrMobile.mobile_number}
            onChangeText={(text) => handleInputChange("mobile_number", text)}
            onCheckPress={handleCheckPress}
          />
        );
      default:
        break;
    }
  };

  const handleValidateEmailOrMobileNumber = async () => {
    try {
      await validateEmailOrMobileNumber(
        emailOrMobile.mobile_number,
        emailOrMobile.email
      );
      onStepComplete("emailOrMobile", emailOrMobile);
      dispatch(addStep());
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 422) {
        if (error.response.data.errors.email != undefined) {
          Toast.show({
            type: "customErrorToast",
            text1: "Oh snap!",
            text2: error.response.data.errors.email,
          });
        }

        if (error.response.data.errors.mobile_number != undefined) {
          Toast.show({
            type: "customErrorToast",
            text1: "Oh snap!",
            text2: error.response.data.errors.mobile_number,
          });
        }
      }
    }
  };

  const handleStepComplete = async () => {
    if (emailOrMobile.email && !emailOrMobile.mobile_number && !validEmail) {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "Invalid Email Address.",
      });

      return;
    }

    if (!emailOrMobile.email && emailOrMobile.mobile_number && !validNumber) {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "Invalid Mobile Number.",
      });

      return;
    }

    if (!emailOrMobile.email && !emailOrMobile.mobile_number) {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "All fields are required.",
      });

      return;
    }

    handleValidateEmailOrMobileNumber();
  };

  const handleInputChange = (field, value) => {
    setEmailOrMobile((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    console.log(emailOrMobile);
  };

  const handleCheckPress = (valid) => {
    setValidNumber(valid);
  };

  const handleCheckEmail = (valid) => {
    setValidEmail(valid);
  };
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          {displayTabContent()}

          <RegisterFooter
            onPressNext={handleStepComplete}
            onPressLogin={handleGoToLogin}
            text="Continue"
            isTextVisible={true}
          />

          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity
            style={styles.loginFacebookContainer}
            onPress={handleFacebookLogin}
          >
            <FontAwesomeIcon icon={faFacebook} color="#1877f2" size={hp(4.4)} />
            <Text style={styles.loginViaFacebookText}>Login via facebook</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <Error />
    </>
  );
};

export default StepTwo;
