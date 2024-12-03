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
    width: wp(90.4),
    height: hp(34.1),
    backgroundColor: COLORS.clr_light_white,
    borderRadius: 10,
    elevation: 5,
  },

  modalText: {
    marginTop: hp(2),
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    color: "#c42414",
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(4.05),
    paddingHorizontal: wp(6.2),
  },
  modalButton: {
    height: hp(4.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  yesButton: {
    width: "100%",
    backgroundColor: "#c42414",
  },
  yesButtonText: {
    fontSize: FONTSIZE.modal_button,
    color: "white",
    textAlign: "center",
    fontFamily: "RobotoBold",
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: FONT.regular,
  },

  iconContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: hp(2.18),
    paddingRight: wp(3.9),
  },

  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3.95),
    paddingHorizontal: wp(11),
  },

  questionText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    lineHeight: FONTSIZE.large,
    includeFontPadding: false,
  },

  questionTeamNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    lineHeight: FONTSIZE.large,
    includeFontPadding: false,
  },
  questionTeamText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    lineHeight: FONTSIZE.large,
    includeFontPadding: false,
  },
});

export default styles;
