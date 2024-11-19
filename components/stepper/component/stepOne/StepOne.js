import { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "./stepOne.style";
import RegisterFooter from "../../../text/register/RegisterFooter";
import Error from "../../../../components/common/toast/error/Error";
import { useDispatch } from "react-redux";
import { addStep } from "../../../../features/auth/authSlice";
import CheckBox from "@react-native-community/checkbox";

const useFadeAnimation = (duration) => {
  const animatedValue = new Animated.Value(0);
  animatedValue.duration = duration;
  return animatedValue;
};

const StepOne = ({ onStepComplete, navigation }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
  });

  const [errors, setErrors] = useState({});

  const fadeAnimationShort = useFadeAnimation(500);
  const fadeAnimationLong = useFadeAnimation(1500);

  useEffect(() => {
    startFadeAnimation(fadeAnimationShort);
    startFadeAnimation(fadeAnimationLong);
  }, []);

  const startFadeAnimation = (animation) => {
    Animated.timing(animation, {
      toValue: 1,
      duration: animation.duration,
      useNativeDriver: true,
    }).start();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleGoToLogin = () => {
    navigation.navigate("Login");
  };

  const handleStepComplete = () => {
    let errors = {};

    if (!userData.firstname) errors.firstname = "Firstname is required";
    if (!userData.lastname) errors.lastname = "Lastname is required";

    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    // if (!userData.firstname || !userData.lastname || !userData.middlename) {
    //   Toast.show({
    //     type: 'customErrorToast',
    //     text1: 'Oh snap!',
    //     text2: 'All fields are required.'
    //   });
    //   return;
    // }

    onStepComplete("userInfo", userData);
    dispatch(addStep());
  };

  const removeFirstnameError = () => {
    let errorsObj = errors;

    if (errorsObj["firstname"] === undefined) return;

    delete errorsObj.firstname;

    setErrors((error) => {
      const { firstname, ...errors } = error;

      return errors;
    });
  };

  const removeLastnameError = () => {
    let errorsObj = errors;

    if (errorsObj["lastname"] === undefined) return;

    delete errorsObj.lastname;

    setErrors((error) => {
      const { lastname, ...errors } = error;

      return errors;
    });
  };

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
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
        <View style={[styles.container]}>
          <View style={styles.textInputsContainer}>
            <View style={styles.firstnameInputContainer}>
              <Text style={styles.textLabel}>Firstname</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={userData.firstname}
                    onChangeText={(text) =>
                      handleInputChange("firstname", text)
                    }
                    onFocus={() => removeFirstnameError()}
                  />
                </View>
              </View>
              {errors.firstname ? (
                <Text style={styles.errorText}>{errors.firstname}</Text>
              ) : null}
            </View>

            <View style={styles.middlenameInputContainer}>
              <Text style={styles.textLabel}>Middlename</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={userData.middlename}
                    onChangeText={(text) =>
                      handleInputChange("middlename", text)
                    }
                  />
                </View>
              </View>
            </View>

            <View style={styles.lastnameInputContainer}>
              <Text style={styles.textLabel}>Lastname</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={userData.lastname}
                    onChangeText={(text) => handleInputChange("lastname", text)}
                    onFocus={() => removeLastnameError()}
                  />
                </View>
              </View>
              {errors.lastname ? (
                <Text style={styles.errorText}>{errors.lastname}</Text>
              ) : null}
            </View>
          </View>

          <RegisterFooter
            onPressNext={handleStepComplete}
            text="Continue"
            onPressLogin={handleGoToLogin}
            isTextVisible={true}
          />

          <View style={styles.bottomImageContainer}>
            <Image
              source={require("../../../../assets/bottom-image.png")}
              style={styles.bottomImage}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Error />
    </>
  );
};

export default StepOne;
