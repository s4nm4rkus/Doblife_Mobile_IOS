import { useState, useContext, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../../constants/theme";
import { Feather } from "react-native-vector-icons";

import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Keyboard,
  Image,
  StatusBar,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styles from "./login.style";
import ModalComponent from "./modal/ModalComponent";
import LoginLogo from "../../../assets/login-logo.png";

const LoginScreen = ({ navigation }) => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleGoToRegistration = () => {
    dispatch(reset());
    navigation.navigate("Register");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={styles.container}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../../../assets/login-logo.png")}
              style={styles.logoIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.loginLabel}>Login</Text>
          </View>

          <View style={styles.textInputsContainer}>
            <View style={styles.usernameInputContainer}>
              <Text style={styles.textLabel}>Email</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    onChangeText={(text) => setEmailOrMobile(text)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.passwordInputContainer}>
              <Text style={styles.textLabel}>Password</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <TouchableOpacity
                    style={styles.eyeButtonContainer}
                    onPress={togglePasswordVisibility}
                  >
                    <Feather
                      name={passwordVisible ? "eye" : "eye-off"}
                      size={hp(2)}
                      color={COLORS.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => forgotPassword(emailOrMobile, navigation)}
              >
                <Text style={styles.forgotYourPasswordText}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signInContainer}>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => login(emailOrMobile, password, navigation)}
            >
              <Text style={styles.signInButtonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registerContainer}>
            <Text style={styles.questionText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={handleGoToRegistration}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.orContainer}>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity
            style={styles.loginFacebookContainer}
            onPress={() => navigation.navigate("FacebookLogin")}
          >
            <FontAwesomeIcon icon={faFacebook} color="#1877f2" size={hp(4.4)} />
            <Text style={styles.loginViaFacebookText}>Login via facebook</Text>
          </TouchableOpacity>

          <View style={styles.bottomImageContainer}>
            <Image
              source={require("../../../assets/bottom-image.png")}
              style={styles.bottomImage}
            />
          </View>

          {/* <ModalComponent
            isCanceled={() => dispatch(setIsVisible(false))}
            email={emailOrMobile}
          /> */}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
