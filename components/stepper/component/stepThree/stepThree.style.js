import { StyleSheet } from "react-native";
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
  SIZES,
} from "../../../../constants/theme.js";
import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },

  textInputsContainer: {
    paddingHorizontal: MARGIN.m1,
  },

  passwordInputContainer: {
    flexDirection: "column",
    marginTop: hp(8.3),
    marginBottom: hp(3.4),
  },

  confirmPasswordInputContainer: {
    flexDirection: "column",
    marginBottom: hp(3.4),
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
  },

  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#bcbcbc",
    borderWidth: 1,
    height: "100%",
    borderRadius: 5,
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

  textLabel: {
    fontFamily: "RobotoRegular",
    color: "#010101",
    fontSize: FONTSIZE.medium,
    marginBottom: hp(0.6),
  },

  errorText: {
    fontSize: FONTSIZE.medium,
    color: "red",
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

  passwordDescriptionText: {
    fontSize: FONTSIZE.small,
    fontFamily: "RobotoRegular",
  },

  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(5.9),
    zIndex: 2,
  },
  checkBox: {
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
  },

  termsTextContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },

  checkBoxText: {
    flex: 1,
    fontSize: FONTSIZE.medium,
  },

  tosText: {
    color: "#1877f2",
    textDecorationLine: "underline",
    textDecorationColor: "#5198f5",
  },

  policyText: {
    color: "#1877f2",
    textDecorationLine: "underline",
    textDecorationColor: "#5198f5",
  },
});

export default styles;
