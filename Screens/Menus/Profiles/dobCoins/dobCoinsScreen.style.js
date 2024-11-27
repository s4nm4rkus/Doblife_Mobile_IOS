import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONT, FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  dobCoinsContainer: {
    marginTop: hp(2.6),
    marginHorizontal: wp(5.4),
    paddingTop: hp(0.95),
    paddingBottom: hp(0.6),
    paddingLeft: wp(6.6),
    paddingRight: wp(5.6),
    justifyContent: "space-between",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
  },

  dobCoinsValueContainer: {
    justifyContent: "space-between",
  },

  dobCoinsText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
    color: "#ebeded",
  },

  dobCoinsValueText: {
    fontSize: FONTSIZE.large_6,
    fontFamily: "RobotoBold",
    color: "white",
    lineHeight: hp(5.5),
  },

  starContainer: {
    width: hp(6.65),
    height: hp(6.65),
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebeded",
    elevation: 2,
  },

  creditPointsContainer: {
    marginTop: hp(1.3),
    borderRadius: 11,
    backgroundColor: "white",
    marginHorizontal: wp(5.4),
    paddingLeft: wp(4.9),
    paddingTop: hp(1.6),
    paddingBottom: hp(3.59),
  },

  phpText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },

  creditPointsValueContainer: {
    marginTop: hp(1.2),
    justifyContent: "center",
    flexDirection: "row",
  },

  creditPointsValueText: {
    fontSize: FONTSIZE.super_large,
    lineHeight: FONTSIZE.super_large,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  creditPointsTextContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },

  creditPointsText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
    color: "#aaa",
  },

  redeemContainer: {
    marginTop: hp(1.8),
    flexDirection: "row",
    paddingHorizontal: wp(5.4),
    alignItems: "center",
    gap: wp(8),
  },

  redeemInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  redeemDescriptionText: {
    fontSize: FONTSIZE.semi_medium,
    marginLeft: wp(1.9),
  },

  pointsContainer: {
    flex: 1,
    alignItems: "flex-end",
  },

  redeemButtonContainer: {
    width: wp(38.3),
  },

  pointsText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "white",
    includeFontPadding: false,
  },

  pointsWrapper: {
    height: hp(4.4),
    borderRadius: 5.5,
    justifyContent: "center",
    alignItems: "center",
  },

  earnPointsContainer: {
    marginTop: 41.5,
    marginHorizontal: wp(5.4),
  },

  earnPointsText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
    includeFontPadding: false,
  },

  earnPointsDescriptionText: {
    fontSize: FONTSIZE.semi_large,
    fontFamily: "RobotoRegular",
    includeFontPadding: false,
  },

  feedContainer: {
    marginTop: hp(3.1),
    marginHorizontal: wp(5.4),
    paddingBottom: hp(4),
    gap: hp(1.3),
  },

  cardContainer: {
    width: wp(89.3),
    minHeight: hp(2),
    borderRadius: 11,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4.4 },
    shadowOpacity: 0.25,
    shadowRadius: 4.4,
    elevation: 4,
  },

  cardHeader: {
    paddingLeft: wp(5.9),
    paddingRight: wp(4.35),
    paddingTop: hp(1.65),
    paddingBottom: hp(0.95),
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  leagueOwnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leagueOwnerText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensedBold",
  },

  dateText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  cardBody: {
    paddingLeft: wp(5.9),
    paddingRight: wp(4.35),
    paddingTop: hp(2.25),
    paddingBottom: hp(2),
  },

  leagueNameContainer: {
    marginBottom: hp(2),
  },

  leagueNameText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
    color: "#c42414",
  },

  openingDateContainer: {
    marginBottom: hp(1.45),
  },

  openingDateText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
  },

  leagueAddressContainer: {
    marginBottom: hp(2.3),
  },

  addressText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
  },

  joinNowContainer: {},

  joinNowText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    color: "#c42414",
  },
});

export default styles;
