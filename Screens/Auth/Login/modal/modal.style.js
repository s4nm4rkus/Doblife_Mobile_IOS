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
} from "../../../../constants/theme";

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
    width: wp(90),
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },

  instructionSentText: {
    fontSize: FONTSIZE.semi_large,
    fontFamily: "RobotoBold",
    marginBottom: hp(2),
  },

  instructionText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoRegular",
    marginBottom: hp(3),
  },

  emailText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoBold",
  },

  modalButton: {
    borderRadius: 5,
    height: hp(4),
    justifyContent: "center",
  },
  okayButton: {
    width: "100%",
    backgroundColor: "#c42414",
  },
  okayText: {
    fontSize: FONTSIZE.label,
    color: "white",
    textAlign: "center",
    fontFamily: "RobotoBold",
  },
});

export default styles;
