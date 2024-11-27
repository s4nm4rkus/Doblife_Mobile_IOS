import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  FONTSIZE,
} from "../../../constants/theme";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOWS.large,
  },

  modalContent: {
    width: wp(92),
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: wp(7.65),
    marginRight: wp(6),
    marginTop: hp(3.92),
  },

  logo: {
    borderRadius: 10,
    width: hp(5.6),
    height: hp(5.6),
  },

  buttonsContainer: {
    marginTop: hp(7.25),
    paddingHorizontal: wp(6.4),
    marginBottom: hp(1.97),
  },

  setupButton: {
    width: "100%",
    height: hp(4.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#c42414",
  },

  setupButtonText: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.description,
    color: "white",
  },

  skipButton: {
    width: "100%",
    height: hp(4.6),
    justifyContent: "center",
    alignItems: "center",
  },

  skipButtonText: {
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.large,
    color: "#0b0b0b",
  },
  startByText: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large_2,
    lineHeight: FONTSIZE.large_2,
    color: "#c42414",
    includeFontPadding: false,
  },
  creatingText: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.screen_title,
    lineHeight: FONTSIZE.screen_title,
    color: "#c42414",
    includeFontPadding: false,
  },
  yourProfileText: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.screen_title,
    lineHeight: FONTSIZE.screen_title,
    color: "#c42414",
    includeFontPadding: false,
  },

  modalDetailsContainer: {
    marginTop: hp(3.05),
    paddingLeft: wp(7.7),
    paddingRight: wp(4.9),
  },

  detailsText: {
    fontSize: FONTSIZE.large,
    color: "#0b0b0b",
    fontFamily: "RobotoCondensed",
  },

  checkBoxContainer: {
    paddingHorizontal: wp(6.4),
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: hp(2),
  },

  checkBoxText: {
    fontSize: FONTSIZE.label,
  },
});

export default styles;
