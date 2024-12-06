import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  leagueNameContainer: {
    paddingTop: hp(3.18),
    paddingLeft: wp(6),
    paddingRight: wp(6.62),
    backgroundColor: "white",
  },

  leagueNameWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  leagueAcronymText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    includeFontPadding: false,
  },

  leagueNameText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    includeFontPadding: false,
  },

  activeText: {
    fontSize: FONTSIZE.description,
    marginLeft: "auto",
    fontFamily: "RobotoRegular",
    color: "#039f00",
  },

  optionsContainer: {
    flexDirection: "row",
    paddingTop: hp(3.15),
    paddingBottom: hp(1.64),
    paddingHorizontal: wp(4.8),
    backgroundColor: "white",
  },

  optionsWrapper: {
    flex: 1,
    gap: wp(2),
    flexDirection: "row",
  },

  divisionContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5.5,
    paddingTop: hp(0.79),
    paddingLeft: wp(1.89),
    paddingRight: wp(2.8),
    paddingBottom: hp(1.05),
    borderColor: "#BEBEBE",
  },

  optionLabelText: {
    fontSize: FONTSIZE.small_3,
    fontFamily: "RobotoRegular",
    includeFontPadding: false,
    marginBottom: hp(0.4),
  },

  divisionText: {
    fontSize: FONTSIZE.label,
    includeFontPadding: false,
    fontFamily: "RobotoBold",
    maxWidth: "80%",
  },

  switchText: {
    fontSize: FONTSIZE.small_7,
    includeFontPadding: false,
    color: "#c42414",
    fontFamily: "RobotoRegular",
  },

  bracketContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: hp(0.79),
    paddingLeft: wp(1.89),
    paddingRight: wp(2.8),
    borderColor: "#BEBEBE",
  },

  bracketText: {
    fontSize: FONTSIZE.label,
    includeFontPadding: false,
    fontFamily: "RobotoBold",
    maxWidth: "80%",
  },

  closeLeagueButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5.5,
    paddingHorizontal: wp(4.5),
    paddingBottom: hp(2.46),
    backgroundColor: "white",
  },

  closeLeagueButton: {
    height: hp(4.5),
    borderRadius: 5,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#c42414",
  },

  closeLeagueButtonText: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.button,
    color: "#fff",
  },

  openLeagueButton: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  openLeagueButtonText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  joinLeagueContainer: {
    paddingTop: hp(3.18),
    paddingLeft: wp(6),
    paddingRight: wp(6.62),
    paddingBottom: hp(3),
    backgroundColor: "white",
    flexDirection: "row",
  },

  joinLeagueNameContainer: {
    flex: 1,
  },

  joinLeagueAcronymText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    includeFontPadding: false,
  },

  joinLeagueNameText: {
    fontSize: FONTSIZE.semi_large,
    fontFamily: "RobotoBold",
    includeFontPadding: false,
  },

  joinLeagueOptionsContainer: {
    flex: 1,
  },

  dropdown: {
    height: hp(3.5),
    backgroundColor: "white",
    paddingLeft: wp(2.5),
    paddingRight: wp(2),
    shadowColor: "#000",
    borderRadius: 5,
    borderWidth: 1,
  },
  item: {
    padding: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
  placeholderStyle: {
    color: "#aaa",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoRegular",
  },
  selectedTextStyle: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
  iconStyle: {
    width: hp(2.5),
    height: hp(2.5),
  },
  inputSearchStyle: {
    height: hp(5),
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },

  joinLeagueButton: {
    marginTop: hp(1),
    width: "100%",
    backgroundColor: "#9b001c",
    paddingVertical: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
  },
});

export default styles;
