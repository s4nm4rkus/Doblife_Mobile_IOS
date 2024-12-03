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
    backgroundColor: "white",
  },

  inputsContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 25,
  },

  inputContainer: {
    marginBottom: 15,
  },

  inputLabelText: {
    fontSize: FONTSIZE.label,
    marginBottom: 10,
  },

  errorText: {
    fontSize: FONTSIZE.label,
    color: "red",
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
    backgroundColor: "white",
  },

  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: SIZES.medium,
  },

  descriptionInput: {
    maxHeight: 120,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    height: 100,
    lineHeight: 20,
    borderRadius: 10,
    paddingHorizontal: SIZES.medium,
    textAlignVertical: "top",
    backgroundColor: "white",
  },

  cardContainer: {
    height: hp(18),
    borderRadius: SIZES.xSmall,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaaaaa",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  titleText: {
    fontSize: FONTSIZE.large_3,
    fontWeight: "bold",
  },

  descriptionText: {
    fontSize: FONTSIZE.semi_large,
  },

  dropdown: {
    height: 35,
    backgroundColor: "white",
    borderColor: "#c4c4c4",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginBottom: 10,
  },

  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 14,
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

  submitButtonContainer: {
    flex: 1,
    marginLeft: 10,
  },

  modalButton: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    paddingHorizontal: 25,
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
  backButtonText: {
    color: "#c42414",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: FONT.regular,
  },
});

export default styles;
