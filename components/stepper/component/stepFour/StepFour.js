import { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Animated,
  BackHandler,
  Image,
} from "react-native";
import Toast from "react-native-toast-message";
import styles from "./stepFour.style";

import OtpBox from "../../../otpBox/OtpBox";
import RegisterFooter from "../../../text/register/RegisterFooter";
import ModalComponent from "../../../common/modal/ModalComponent";
import Error from "../../../../components/common/toast/error/Error";
import LottieComponent from "../../../common/lottie/LottieComponent";

import {
  requestOtp,
  verifyOtp,
  deleteUserById,
} from "../../../../services/auth";
import { AuthContext } from "../../../../context/AuthContext";
import { useSelector } from "react-redux";
import {
  emailOrMobileValue,
  passwordValue,
  userIdValue,
} from "../../../../features/auth/authSlice";

const useFadeAnimation = (duration) => {
  const animatedValue = new Animated.Value(0);
  animatedValue.duration = duration;
  return animatedValue;
};

const StepFour = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const emailOrMobile = useSelector(emailOrMobileValue);
  const userId = useSelector(userIdValue);
  const password = useSelector(passwordValue);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const fadeAnimationShort = useFadeAnimation(500);
  const fadeAnimationLong = useFadeAnimation(1500);

  useEffect(() => {
    startFadeAnimation(fadeAnimationShort);
    startFadeAnimation(fadeAnimationLong);
  }, []);

  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };

  const startFadeAnimation = (animation) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: animation.duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const backAction = () => {
      setShowCancelModal(true);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => {
      backHandler.remove();
    };
  }, [navigation]);

  const deleteUserByCancellation = async () => {
    try {
      const response = await deleteUserById(userId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleConfirmModal = () => {
    deleteUserByCancellation();
    setShowCancelModal(false);
    navigation.goBack();
  };

  const handleVerifyOtp = async () => {
    try {
      let identifier;
      let value;

      if (emailOrMobile.email !== "") {
        identifier = "email";
        value = emailOrMobile.email;
      } else if (emailOrMobile.mobile_number !== "") {
        identifier = "mobile_number";
        value = emailOrMobile.mobile_number;
      } else {
        console.log("Neither email nor mobile number is provided.");
        return;
      }

      setVerifying(true);

      const response = await verifyOtp(identifier, value, enteredOtp);

      if (response.status === 200) {
        login(value, password);
      } else {
        setVerifying(false);
        Toast.show({
          type: "customErrorToast",
          text1: "Oh snap!",
          text2: "Invalid OTP",
        });
        console.log(response);
        console.log("OTP verification failed:", response.message);
      }
    } catch (error) {
      console.log("Error OTP Verification", error);
      setVerifying(false);
    }
  };

  const handleOtpChange = (otp) => {
    setEnteredOtp(otp);
  };

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fadeAnimationShort,
            transform: [
              {
                translateX: fadeAnimationShort.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0],
                }),
              },
            ],
          },
        ]}
      >
        {verifying ? (
          <LottieComponent
            message="Verifying..."
            lottieUrl={require("../../../../assets/lottie/spinning-ball.json")}
          />
        ) : (
          <>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTextBold}>
                Enter your verification code
              </Text>
              <Text style={styles.headerTextRegular}>
                We sent verification code to
              </Text>
              <Text style={styles.headerTextRegular}>
                {emailOrMobile.email != ""
                  ? emailOrMobile.email
                  : emailOrMobile.mobile_number}
              </Text>
            </View>
            <OtpBox onOtpChange={handleOtpChange} />
            <RegisterFooter
              text="Confirm"
              onPressLogin={handleGoToLogin}
              onPressNext={handleVerifyOtp}
            />

            <View style={styles.bottomImageContainer}>
              <Image
                source={require("../../../../assets/bottom-image.png")}
                style={styles.bottomImage}
              />
            </View>
          </>
        )}
      </Animated.View>
      <Error />
      <ModalComponent
        isVisible={showCancelModal}
        isCanceled={() => setShowCancelModal(false)}
        isAccepted={handleConfirmModal}
        message="Are you sure you want to cancel registration?"
        lottieUrl={require("../../../../assets/lottie/lebron-dribbling.json")}
      />
    </>
  );
};

export default StepFour;
