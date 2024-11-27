import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

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
    paddingTop: hp(2.95),
    paddingHorizontal: wp(6),
    paddingBottom: hp(4.4),
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },

  textContainer: {
    alignItems: "center",
    paddingHorizontal: wp(3.5),
  },

  deleteProfileText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    textAlign: "center",
  },

  deleteProfileDescriptionText: {
    marginTop: hp(3.05),
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: hp(3.2),
    gap: wp(4.2),
  },

  deleteButtonContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  cancelButtonContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  deleteText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  cancelText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "white",
  },
});

export default styles;
