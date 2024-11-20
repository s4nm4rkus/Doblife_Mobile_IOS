import { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";
import styles from "./stepThree.style";

import RegisterFooter from "../../../text/register/RegisterFooter";
import Error from "../../../../components/common/toast/error/Error";

import { register } from "../../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  addStep,
  emailOrMobileValue,
  userInfoValue,
} from "../../../../features/auth/authSlice.js";
import { COLORS } from "../../../../constants/theme.js";
import { Feather } from "@expo/vector-icons";
import LoadingOverlay from "../../../loading/LoadingOverlay";
import CheckBox from "@react-native-community/checkbox";

const useFadeAnimation = (duration) => {
  const animatedValue = new Animated.Value(0);
  animatedValue.duration = duration;
  return animatedValue;
};

const StepThree = ({ onStepComplete, navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const emailOrMobile = useSelector(emailOrMobileValue);
  const userInfo = useSelector(userInfoValue);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState({
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await register(
        userInfo.firstname,
        userInfo.middlename,
        userInfo.lastname,
        emailOrMobile.mobile_number,
        emailOrMobile.email,
        password.password,
        confirmPassword
      );
      setLoading(false);
      onStepComplete("userId", {
        id: response.success.id,
        password: password.password,
      });
      dispatch(addStep());
    } catch (error) {
      if (error.response && error.response.status === 422) {
        if (error.response.data.error.password != undefined) {
          Toast.show({
            type: "customErrorToast",
            text1: "Oh snap!",
            text2: error.response.data.error.password,
          });
          let errors = {};

          errors.password =
            "Password should be at least 8 characters long and include a combination of alphanumeric and special characters.";

          setErrors(errors);
        }
      }
      setLoading(false);
    }
  };

  const removePasswordError = () => {
    let errorsObj = errors;

    if (errorsObj["password"] === undefined) return;

    delete errorsObj.password;

    setErrors((error) => {
      const { password, ...errors } = error;

      return errors;
    });
  };

  const handleStepComplete = () => {
    let errors = {};

    if (!password.password) {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "All fields are required.",
      });
      errors.password = "All fields are required.";
      setErrors(errors);
    } else if (password.password != confirmPassword) {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: "Password did not match!",
      });
      errors.password = "Password did not match!";
      setErrors(errors);
    } else {
      handleRegister();
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (field, value) => {
    setPassword((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <View style={styles.textInputsContainer}>
            <View style={styles.passwordInputContainer}>
              <Text style={styles.textLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={password.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                    secureTextEntry={!passwordVisible}
                    onFocus={() => removePasswordError()}
                  />
                  <TouchableOpacity
                    style={styles.eyeButtonContainer}
                    onPress={togglePasswordVisibility}
                  >
                    <Feather
                      name={passwordVisible ? "eye" : "eye-off"}
                      size={20}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.confirmPasswordInputContainer}>
              <Text style={styles.textLabel}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!confirmPasswordVisible}
                  />
                  <TouchableOpacity
                    style={styles.eyeButtonContainer}
                    onPress={toggleConfirmPasswordVisibility}
                  >
                    <Feather
                      name={confirmPasswordVisible ? "eye" : "eye-off"}
                      size={20}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.passwordDescriptionText}>
                Password should be at least 8 characters long and include a
                combination of alphanumeric and special characters.
              </Text>
            </View>

            <View style={styles.checkBoxContainer}>
              <CheckBox
                value={isChecked}
                onChange={handleCheckboxChange}
                tintColors={{ true: "black", false: "#c60404" }}
              />
              <Text style={styles.checkBoxText}>
                By proceeding, I agree to the Doblife's{" "}
                <Text
                  style={styles.tosText}
                  onPress={() => navigation.navigate("TermsOfService")}
                >
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text
                  style={styles.policyText}
                  onPress={() => navigation.navigate("PrivacyPolicy")}
                >
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
          <RegisterFooter
            onPressNext={handleStepComplete}
            // onPressLogin={handleGoToLogin}
            text="Sign Up"
            isChecked={isChecked}
          />

          <View style={styles.bottomImageContainer}>
            <Image
              source={require("../../../../assets/bottom-image.png")}
              style={styles.bottomImage}
            />
          </View>
          <LoadingOverlay visible={loading} />
        </View>
      </TouchableWithoutFeedback>
      <Error />
    </>
  );
};

export default StepThree;
