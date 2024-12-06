import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  SIZES,
  HEIGHT,
} from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  divisionsContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },

  inputsContainer: {
    flex: 1,
  },

  divisionsText: {
    fontSize: FONTSIZE.large_1,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 15,
  },

  cardFormContainer: {
    width: wp(89.5),
    minHeight: 254.2,
    borderRadius: 11,
    borderColor: "#aaa",
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: hp(3.05),
  },

  cardContainer: {
    width: wp(89.5),
    minHeight: hp(9),
    borderRadius: 11,
    borderColor: "#aaa",
    borderWidth: 1,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: hp(2.16),
  },

  feedContentContainer: {
    flexDirection: "row",
    paddingTop: hp(2.6),
  },

  inputContainer: {
    backgroundColor: "white",
  },

  yearBornDropdownContainer: {
    marginTop: hp(1.8),
  },

  yearBornDropdownsWrapper: {
    flexDirection: "row",
    marginHorizontal: wp(5.3),
    gap: wp(6.1),
  },

  inputLabelText: {
    fontSize: FONTSIZE.label,
    marginBottom: hp(1.2),
    marginLeft: wp(5.2),
    fontFamily: "RobotoCondensed",
  },

  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
    marginHorizontal: wp(5.3),
  },

  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#aaaaaa",
    borderWidth: 1,
    height: "100%",
    borderRadius: 10,
  },

  inInput: {
    fontFamily: "RobotoCondensed",
    width: "100%",
    height: "100%",
    fontSize: FONTSIZE.large,
    position: "absolute",
    paddingHorizontal: wp(3.2),
  },

  dropdown: {
    height: HEIGHT.medium_height,
    backgroundColor: "white",
    borderColor: "#c4c4c4",
    borderRadius: 12,
    paddingHorizontal: wp(3.2),
    borderWidth: 1,
  },

  placeholderStyle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensed",
  },
  selectedTextStyle: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensed",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: HEIGHT.medium_height,
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensed",
  },

  buttonsContainer: {
    marginTop: hp(2.65),
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(5.3),
    gap: wp(6.1),
  },

  backButtonContainer: {
    flex: 1,
  },

  backButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#c42414",
  },

  backButtonText: {
    color: "#c42414",
    textAlign: "center",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.label,
  },

  submitButtonContainer: {
    flex: 1,
    marginLeft: 10,
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

  modalButton: {
    height: hp(4.55),
    justifyContent: "center",
    borderRadius: 5.5,
  },

  detailsContainer: {
    flexDirection: "row",
    marginLeft: wp(4.7),
    marginTop: hp(1.67),
  },

  divisionNameContainer: {
    flex: 1,
  },

  yearBornContainer: {
    flex: 1,
  },

  removeContainer: {
    justifyContent: "flex-end",
  },

  addDivisionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },

  labelText: {
    fontSize: FONTSIZE.small_7,
    marginBottom: hp(1.2),
    fontFamily: "RobotoCondensed",
    includeFontPadding: false,
  },

  valueText: {
    fontSize: FONTSIZE.large,
    marginLeft: wp(0.24),
    fontFamily: "RobotoCondensedBold",
    includeFontPadding: false,
  },

  addDivisionText: {
    fontSize: FONTSIZE.semi_x_large,
    marginLeft: 10,
  },

  errorText: {
    fontSize: FONTSIZE.label,
    color: "red",
  },

  divisionsTextContainer: {
    marginTop: hp(3.85),
    marginHorizontal: wp(7.15),
    marginBottom: hp(1.95),
    paddingBottom: hp(1.8),
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },

  divisionsText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },
});

export default styles;
