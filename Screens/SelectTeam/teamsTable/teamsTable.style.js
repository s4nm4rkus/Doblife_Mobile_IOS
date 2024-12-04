import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    height: hp(40),
    backgroundColor: "white",
    borderRadius: 11,
  },

  paginationWrapper: {
    height: hp(5.75),
    paddingHorizontal: wp(4.6),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  cardContainer: {},

  paginationContainer: {
    marginTop: hp(2.15),
  },

  scrollViewContent: {
    paddingVertical: hp(1.11),
  },

  rowContainer: {
    paddingHorizontal: wp(5.8),
    paddingVertical: hp(1.11),
    flexDirection: "row",
    alignItems: "center",
  },

  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  noTeamsText: {
    fontSize: FONTSIZE.medium,
  },

  teamName: {
    marginLeft: wp(5),
    textAlign: "left",
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.label,
  },

  joinButtonContainer: {
    marginLeft: "auto",
  },

  joinButtonText: {
    color: COLORS.clr_light_white,
    fontFamily: FONT.bold,
    fontSize: "14@mvs",
  },

  paginationButton: {
    justifyContent: "center",
    alignItems: "center",
    width: hp(2.3),
    height: hp(2.3),
    borderRadius: 20,
    marginHorizontal: wp(4.12),
  },
  activeButton: {
    backgroundColor: "#c42414",
    width: hp(2.3),
    height: hp(2.3),
    borderRadius: 25,
  },
  buttonText: {
    color: "black",
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.large,
    includeFontPadding: false,
  },
  activeButtonText: {
    color: "white",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
    includeFontPadding: false,
  },

  teamLogo: {
    width: hp(3.9),
    height: hp(3.9),
    borderRadius: 200,
  },
});

export default styles;
