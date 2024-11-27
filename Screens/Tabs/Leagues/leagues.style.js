import { StyleSheet } from "react-native";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },
  searchContainer: {
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  todayLeagueContainer: {
    width: wp("100%"),
    height: hp("25%"),
  },
  upcomingLeagueContainer: {
    height: hp("65%"),
  },
  headerContainer: {
    width: wp("100%"),
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.large,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: FONTSIZE.x_large,
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
    marginLeft: wp(2.5),
  },

  addressText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
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

  feedContentContainer: {
    flexDirection: "row",
    width: "100%",
    height: "75%",
    padding: 20,
  },

  filteredFeedContentContainer: {
    height: "75%",
    paddingTop: 10,
    paddingHorizontal: 20,
  },

  footerCardContainer: {
    flexDirection: "row",
    width: "100%",
    height: "25%",
    paddingHorizontal: 20,
    backgroundColor: "#ebeded",
  },

  feedContentLeft: {
    width: "50%",
    height: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  leagueTitleText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.large_3,
    lineHeight: FONTSIZE.large_3,
  },
  leagueQuarterText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
  feedContentRight: {
    width: "50%",
    height: "100%",
    padding: 10,
  },
  feedContentRightUpper: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  teamImage: {
    width: "30%",
    height: "80%",
    borderRadius: 100,
  },
  teamStatsContainer: {
    width: "70%",
  },
  teamScore: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
  },
  teamName: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    marginTop: -5,
  },
  feedContentRightDivider: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  dividerRight: {
    width: "40%",
    height: 1.5,
  },
  dividerText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    fontStyle: "italic",
  },
  dividerLeft: {
    width: "40%",
    height: 1.5,
  },
  feedContentRightLower: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  feedInfoContainer: {
    width: "100%",
    height: "28%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#ebeded",
  },
  sponsorImage: {
    width: "17%",
    height: "80%",
    borderRadius: 500,
  },
  sponsorInfo: {
    width: "83%",
    height: "80%",
    justifyContent: "center",
  },
  footerLeagueInfoText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.semi_small,
  },
  footerSponsorInfoText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xSmall,
  },

  onGoingMatchesCardContainer: {
    width: wp("40%"),
    height: hp("18%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: COLORS.clr_light_white,
    ...SHADOWS.medium,
  },

  onGoingMatchesCardWrapper: {
    flex: 1,
    padding: 15,
  },

  content: {
    flex: 1,
    flexDirection: "row",
  },

  detailContainer: {
    flex: 1,
  },

  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  logoContainer: {
    position: "relative",
  },

  quarterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  ordinalNumberText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },

  quarterText: {
    fontSize: FONTSIZE.small_1,
    lineHeight: FONTSIZE.small_1,
  },

  filteredQuarterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  filteredOrdinalNumberText: {
    fontSize: FONTSIZE.semi_large,
    lineHeight: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  filteredQuarterText: {
    fontSize: FONTSIZE.semi_large,
    lineHeight: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  matchupTeamsContainer: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  teamAContainer: {
    width: wp(30),
  },

  teamBContainer: {
    width: wp(30),
  },

  scoreText: {
    position: "absolute",
    alignSelf: "center",
    bottom: -22,
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
    color: "#c42414",
  },

  filteredScoreTextTeamA: {
    fontWeight: "bold",
    fontSize: FONTSIZE.large_5,
    color: "#c42414",
    marginLeft: wp(5),
  },

  filteredScoreTextTeamB: {
    fontWeight: "bold",
    fontSize: FONTSIZE.large_5,
    color: "#c42414",
    marginRight: wp(5),
  },

  logo: {
    width: hp(3.5),
    height: hp(3.5),
    borderRadius: 200,
  },

  teamLogo: {
    width: hp(6.5),
    height: hp(6.5),
    borderRadius: 200,
  },

  leagueName: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_large,
  },

  leagueContainer: {
    flex: 1,
  },

  filteredLeagueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filteredMatchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
  },

  teamsContainer: {
    flex: 1,
    gap: 20,
  },

  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  teamNameText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.label,
    marginLeft: 15,
  },

  filteredLeagueNameText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.x_large,
  },

  statusText: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  footerCardWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  profileImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: 200,
  },

  leagueDateInfoContainer: {
    marginLeft: 10,
  },

  leagueInfoText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.label,
  },

  leagueDateText: {
    fontSize: FONTSIZE.semi_medium,
  },

  seeAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  chevronRight: {
    color: "#c42414",
  },

  seeAllText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.x_large,
    marginRight: 5,
  },

  filteredContainer: {
    flex: 1,
  },

  resultsText: {
    fontSize: FONTSIZE.x_large,
    marginRight: 5,
  },

  scrollViewContainer: {
    paddingBottom: hp(20),
    gap: hp(1.3),
    alignItems: "center",
  },

  onGoingLeagueNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
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
