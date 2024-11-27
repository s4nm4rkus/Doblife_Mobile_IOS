import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  SHADOWS,
  SIZES,
} from "../../../constants/theme";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    height: hp(30),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  courtSideContainer: {
    marginTop: hp(3.2),
    marginBottom: hp(2),
  },

  courtSideText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoBold",
  },

  feedContainer: {
    paddingBottom: hp(4),
    gap: hp(1.3),
  },

  cardsContainer: {
    flex: 1,
    width: wp(100),
    paddingHorizontal: wp(5.5),
    alignItems: "center",
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

  cardFooter: {
    paddingLeft: wp(5.9),
    paddingRight: wp(4.35),
    paddingTop: hp(1.55),
    paddingBottom: hp(1.9),
    borderTopWidth: 1,
    borderColor: "#aaa",
    flexDirection: "row",
    alignItems: "center",
  },

  reactsText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  buttonsContainer: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: wp(5.65),
  },

  matchupCardBody: {
    paddingHorizontal: wp(5.9),
    paddingTop: hp(2.2),
    paddingBottom: hp(2.28),
  },

  matchupLeagueNameContainer: {
    alignItems: "center",
  },

  matchupLeagueNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    includeFontPadding: false,
    lineHeight: FONTSIZE.large,
  },

  gameText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
    color: "#040912",
    includeFontPadding: false,
    lineHeight: FONTSIZE.label,
  },

  participantsContainer: {
    marginTop: hp(0.6),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  teamContainer: {},

  teamImageAndScoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(5.1),
  },

  teamImage: {
    width: hp(6.1),
    height: hp(6.1),
    borderRadius: 200,
  },

  scoreText: {
    fontSize: FONTSIZE.large_4,
    fontFamily: "RobotoCondensedBold",
    color: "#c42414",
  },

  teamNameContainer: {
    marginTop: hp(1),
    justifyContent: "space-between",
    flexDirection: "row",
  },

  teamNameText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#0b0b0b",
  },

  numberText: {
    fontSize: FONTSIZE.semi_large,
    lineHeight: FONTSIZE.semi_large,
    fontFamily: "RobotoCondensed",
    color: "#0b0b0b",
  },

  quarterText: {
    fontSize: FONTSIZE.semi_medium,
    lineHeight: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#0b0b0b",
  },
});

export default styles;
