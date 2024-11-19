import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  HEIGHT,
  MARGIN,
  SHADOWS,
} from "../../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: "white",
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp(9.2),
    marginBottom: hp(4.75),
  },

  logoIcon: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    width: hp(50),
    height: hp(5.45),
  },

  bottomImageContainer: {
    position: "absolute",
    top: "50%",
    left: "-35",
    opacity: 0.2,
    zIndex: 0,
  },

  bottomImage: {
    resizeMode: "contain",
  },

  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(5.45),
  },

  loginLabel: {
    fontSize: FONTSIZE.xxxLarge,
    marginLeft: wp(0.3),
    fontFamily: "RobotoBold",
  },

  textLabel: {
    fontFamily: "RobotoRegular",
    color: "#010101",
    fontSize: FONTSIZE.medium,
    marginBottom: hp(0.6),
  },

  // Inputs
  textInputsContainer: {
    alignItems: "center",
  },

  usernameInputContainer: {
    flexDirection: "column",
    width: wp(73.4),
    marginBottom: hp(2.25),
  },

  passwordInputContainer: {
    flexDirection: "column",
    width: wp(73.4),
    zIndex: 1,
    marginBottom: hp(3.65),
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: hp(5.32),
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#bcbcbc",
    borderWidth: 1,
    borderRadius: 10,
    height: "100%",
  },
  inInput: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: wp(3.7),
  },
  eyeButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: wp(3.15),
  },

  // Sign In
  signInContainer: {
    height: hp(5.32),
    justifyContent: "center",
    alignItems: "center",
  },

  signInButton: {
    width: wp(73.4),
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    zIndex: 1,
    backgroundColor: COLORS.clr_minestrone,
  },
  signInButtonText: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.large,
    color: "white",
  },

  // Register
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(2.6),
    zIndex: 1,
  },
  questionText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
  },
  signUpText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
    color: "#1877f2",
    zIndex: 0,
    textDecorationLine: "underline",
    textDecorationColor: "#5198f5",
  },

  orContainer: {
    paddingHorizontal: wp(10.4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3.4),
  },

  orText: {
    fontSize: FONTSIZE.small,
    paddingHorizontal: wp(2.5),
    fontFamily: "RobotoRegular",
  },

  line: {
    flex: 1,
    height: hp(0.1),
    backgroundColor: "black",
  },

  loginFacebookContainer: {
    marginTop: hp(3.12),
    height: hp(8.35),
    borderRadius: 5.5,
    borderWidth: 0.5,
    marginHorizontal: wp(10.4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#0b0b0b",
    zIndex: 1,
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  loginViaFacebookText: {
    marginLeft: wp(6.3),
    fontSize: FONTSIZE.xLarge,
    fontFamily: "RobotoBold",
    color: "#1877f2",
  },

  forgotYourPasswordText: {
    fontSize: FONTSIZE.small,
    marginTop: hp(1),
    fontFamily: "RobotoRegular",
    color: "#1877f2",
  },
});

export default styles;
