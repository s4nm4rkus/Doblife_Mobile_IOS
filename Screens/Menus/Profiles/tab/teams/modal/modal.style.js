import { StyleSheet } from "react-native";

import {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  FONTSIZE,
} from "../../../../../../constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
    borderRadius: 11,
    elevation: 5,
  },

  closeIconContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: hp(1.65),
    marginRight: wp(4),
  },

  modalText: {
    marginTop: hp(2.1),
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large_2,
    color: "#c42414",
    textAlign: "center",
  },

  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(3.1),
    paddingHorizontal: wp(9),
  },

  questionText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensed",
  },

  questionTeamNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(3.1),
    marginBottom: hp(4.3),
    paddingHorizontal: wp(6.4),
  },
  modalButton: {
    justifyContent: "center",
    height: hp(4.5),
    borderRadius: 5,
  },
  yesButton: {
    width: "100%",
    backgroundColor: "#c42414",
  },
  yesButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensedBold",
  },
});

export default styles;
