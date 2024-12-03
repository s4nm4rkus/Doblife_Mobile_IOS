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
} from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  inputsContainer: {
    marginTop: hp(2.92),
    paddingHorizontal: wp(8.4),
  },

  teamNameInputContainer: {
    marginBottom: hp(2.85),
  },

  teamLogoContainer: {
    marginBottom: hp(4.25),
  },

  acronymInputContainer: {
    marginBottom: hp(2.8),
  },

  inputLabelText: {
    fontSize: FONTSIZE.description,
    fontFamily: "RobotoCondensed",
    marginBottom: hp(1.06),
  },

  teamLogoText: {
    fontSize: FONTSIZE.description,
    fontFamily: "RobotoCondensed",
    marginBottom: hp(1.7),
  },

  errorText: {
    fontSize: FONTSIZE.description,
    color: "red",
    fontFamily: "RobotoCondensed",
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

  cardContainer: {
    height: hp(16.87),
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#aaaaaa",
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: FONTSIZE.large_3,
    fontWeight: "bold",
  },

  descriptionText: {
    fontSize: FONTSIZE.semi_large,
  },

  submitButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: hp(2),
  },

  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaaaaa",
  },

  modalButton: {
    height: hp(4.5),
    borderRadius: 5,
    justifyContent: "center",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#c42414",
  },
  backButton: {
    width: "100%",
  },
  backButtonText: {
    textAlign: "center",
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.description,
    color: "#0b0b0b",
  },
  submitButtonText: {
    textAlign: "center",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.description,
    color: "white",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
