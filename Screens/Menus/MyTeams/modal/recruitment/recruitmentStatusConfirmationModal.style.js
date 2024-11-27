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
    width: wp(92),
    backgroundColor: "white",
    borderRadius: 11,
    elevation: 5,
  },

  modalText: {
    marginTop: hp(2.1),
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large_2,
    color: "#c42414",
    textAlign: "center",
  },

  infoContainer: {
    marginTop: hp(3.1),
    paddingHorizontal: wp(9),
  },

  infoText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensed",
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: wp(4.3),
    marginTop: hp(3.1),
    marginBottom: hp(2),
    paddingHorizontal: wp(6.4),
  },

  cancelButtonContainer: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  cancelText: {
    fontSize: FONTSIZE.modal_button,
    fontFamily: "RobotoRegular",
    color: "#c42414",
  },

  confirmButtonContainer: {
    flex: 1,
    borderRadius: 11,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  confirmText: {
    fontSize: FONTSIZE.modal_button,
    fontFamily: "RobotoBold",
    color: "white",
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

  cancelButtonContainer: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  cancelText: {
    fontSize: FONTSIZE.modal_button,
    fontFamily: "RobotoRegular",
    color: "#c42414",
  },

  okayButton: {
    width: "100%",
    backgroundColor: "#c42414",
  },
  okayButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensedBold",
  },
});

export default styles;
