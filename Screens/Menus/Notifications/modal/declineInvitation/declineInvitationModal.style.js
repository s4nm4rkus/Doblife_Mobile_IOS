import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../../constants/theme";

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
    elevation: 2,
  },
  modalContent: {
    width: wp(95),
    paddingTop: hp(5.9),
    paddingHorizontal: wp(9.1),
    paddingBottom: hp(4.4),
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },

  textContainer: {
    alignItems: "center",
  },

  titleText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    textAlign: "center",
    color: "#c42414",
    marginBottom: hp(2.8),
  },

  questionText: {
    fontSize: FONTSIZE.large,
    lineHeight: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: hp(4),
    gap: wp(4.3),
  },

  declineButtonContainer: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  cancelButtonContainer: {
    flex: 1,
    borderRadius: 11,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  declineText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  cancelText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "white",
  },

  teamNameText: {
    fontFamily: "RobotoBold",
  },
});

export default styles;
