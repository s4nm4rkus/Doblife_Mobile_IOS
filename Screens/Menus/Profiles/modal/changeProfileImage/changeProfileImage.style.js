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
    elevation: 8,
  },
  modalContent: {
    width: wp(95),
    backgroundColor: "white",
    paddingTop: hp(3.3),
    paddingBottom: hp(3.6),
    borderRadius: 10,
    elevation: 5,
  },

  teamLogoTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  teamLogoText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoBold",
    color: "#0b0b0b",
  },

  teamLogoContainer: {
    width: hp(20.3),
    height: hp(20.3),
    borderRadius: 200,
    marginVertical: hp(3.55),
    marginHorizontal: "auto",
    backgroundColor: "white",
    elevation: 3,
  },

  teamLogo: {
    width: hp(20.3),
    height: hp(20.3),
    borderRadius: 200,
  },

  buttonsContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(5.9),
    gap: wp(8.5),
  },

  changeButtonContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelButtonContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.2),
  },

  changeText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "white",
  },

  cancelText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },
});

export default styles;
