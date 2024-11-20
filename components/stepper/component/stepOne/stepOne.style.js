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
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 30,
    // gap: SIZES.xxxLarge,
  },

  textInputsContainer: {
    paddingHorizontal: MARGIN.m1,
  },

  firstnameInputContainer: {
    marginTop: hp(3.6),
    flexDirection: "column",
    marginBottom: hp(3.4),
  },

  middlenameInputContainer: {
    flexDirection: "column",
    marginBottom: hp(2.7),
  },

  lastnameInputContainer: {
    flexDirection: "column",
    marginBottom: hp(2.7),
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
});

export default styles;
