import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  selectDateContainer: {
    marginBottom: hp(4.45),
  },

  selectDateText: {
    fontSize: FONTSIZE.large,
    marginBottom: hp(2.2),
    fontFamily: "RobotoBold",
    color: "#0b0b0b",
    paddingHorizontal: wp(6.7),
  },

  selectTimeText: {
    fontSize: FONTSIZE.large,
    marginBottom: hp(2.2),
    fontFamily: "RobotoBold",
    color: "#0b0b0b",
    paddingHorizontal: wp(6.7),
  },

  datePickerTimeContainer: {
    alignItems: "center",
    paddingHorizontal: wp(5.9),
  },

  datePickerContainer: {
    alignItems: "center",
    paddingHorizontal: wp(5.9),
  },

  datePicker: {
    elevation: 5,
    paddingHorizontal: wp(6.1),
    paddingVertical: hp(2.05),
    backgroundColor: "#fff",
    borderRadius: 11,
  },

  buttonsContainer: {
    marginTop: hp(5.76),
    marginBottom: hp(2.3),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(5.9),
    gap: wp(3.2),
  },

  cancelButtonContainer: {
    flex: 1,
  },

  cancelButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#c42414",
  },

  cancelButtonText: {
    color: "#c42414",
    textAlign: "center",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.label,
  },

  submitButtonContainer: {
    flex: 1,
  },

  yesButton: {
    width: "100%",
    borderRadius: 5.5,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    textAlign: "center",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.label,
  },

  button: {
    height: hp(4.55),
    justifyContent: "center",
    borderRadius: 5.5,
  },
});

export default styles;
