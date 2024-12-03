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
  HEIGHT,
} from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingBottom: 20,
  },

  inputsContainer: {
    flex: 1,
    paddingTop: 10,
  },

  divisionsText: {
    fontSize: FONTSIZE.large_1,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 15,
  },

  cardFormContainer: {
    width: wp("90%"),
    minHeight: hp("30%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
    marginBottom: 20,
  },

  cardContainer: {
    width: wp("90%"),
    minHeight: hp("5%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: 20,
  },

  feedContentContainer: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },

  feedInfoContainer: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#aaaaaa",
  },

  inputContainer: {
    backgroundColor: "white",
  },

  inputLabelText: {
    fontSize: FONTSIZE.label,
    marginBottom: 10,
  },

  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
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
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: SIZES.medium,
  },

  dropdown: {
    height: 35,
    backgroundColor: "white",
    borderColor: "#c4c4c4",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },

  placeholderStyle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButtonContainer: {
    flex: 1,
    marginRight: 10,
  },

  backButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#c42414",
  },

  backButtonText: {
    color: "#c42414",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: FONT.regular,
  },

  submitButtonContainer: {
    flex: 1,
    marginLeft: 10,
  },

  yesButton: {
    width: "100%",
    backgroundColor: COLORS.clr_xmas_candy,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: FONT.regular,
  },

  modalButton: {
    paddingVertical: 10,
    borderRadius: 5,
  },

  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
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
    marginBottom: 5,
  },

  valueText: {
    fontSize: FONTSIZE.semi_x_large,
    fontWeight: "bold",
  },

  addDivisionText: {
    fontSize: FONTSIZE.semi_x_large,
    marginLeft: 10,
  },

  errorText: {
    fontSize: FONTSIZE.label,
    color: "red",
  },
});

export default styles;
