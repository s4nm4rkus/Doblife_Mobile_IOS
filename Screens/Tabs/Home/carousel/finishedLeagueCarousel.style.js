import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(2.9),
  },

  leagueOwnerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  leagueOwnerText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  championContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  star1Container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: wp(30),
    bottom: hp(9.5),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  star2Container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: wp(17),
    bottom: hp(15),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  star3Container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: hp(17.8),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  star4Container: {
    position: "absolute",
    top: 0,
    left: 70,
    left: wp(17),
    right: 0,
    bottom: hp(15),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  star5Container: {
    position: "absolute",
    top: 0,
    left: wp(30),
    right: 0,
    bottom: hp(9.5),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  trophyContainer: {
    position: "absolute",
    top: 0,
    left: wp(20),
    right: 0,
    bottom: hp(9.5),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  championText: {
    fontSize: FONTSIZE.large_7,
    marginTop: hp(2.6),
    fontFamily: "RobotoCondensedBold",
    includeFontPadding: false,
    lineHeight: FONTSIZE.large_7,
    color: "white",
  },

  teamImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp(3.65),
    paddingBottom: hp(2.6),
  },

  teamImage: {
    width: hp(15.4),
    height: hp(15.4),
    borderRadius: 200,
  },

  teamNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp(4.3),
  },

  teamNameText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  teamAContainer: {
    flexDirection: "row",
    marginHorizontal: wp(11.4),
    gap: wp(3.15),
    marginBottom: hp(4.1),
  },

  teamBContainer: {
    flexDirection: "row",
    marginHorizontal: wp(11.4),
    gap: wp(3.15),
  },

  secondPageteamImageContainer: {},

  teamScoresContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: hp(4),
  },

  teamScoresText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  teamNameAndScoreContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  secondPageTeamNameContainer: {},

  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },

  ptsText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  secondPageTeamAcronymText: {
    fontSize: FONTSIZE.label,
    includeFontPadding: false,
    lineHeight: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
    color: "white",
  },

  secondPageTeamNameText: {
    fontSize: FONTSIZE.large,
    includeFontPadding: false,
    lineHeight: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  scoreText: {
    fontSize: FONTSIZE.large_7,
    includeFontPadding: false,
    lineHeight: FONTSIZE.large_7,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  secondPageTeamImage: {
    width: hp(10.9),
    height: hp(10.9),
    borderRadius: 200,
  },

  playerAndScoreContainer: {
    flex: 1,
  },

  thirdPageTeamNameContainer: {
    marginBottom: hp(1.6),
  },

  thirdPagePlayerContainer: {
    marginBottom: hp(0.8),
  },

  playerOfTheGameContainer: {
    alignItems: "center",
    marginBottom: hp(7.7),
  },

  playerOfTheText: {
    fontSize: FONTSIZE.xx_large,
    includeFontPadding: false,
    lineHeight: FONTSIZE.xx_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  gameText: {
    fontSize: FONTSIZE.xx_large,
    includeFontPadding: false,
    lineHeight: FONTSIZE.xx_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  bestPlayerContainer: {
    flexDirection: "row",
    marginHorizontal: wp(9.35),
    gap: wp(6),
  },

  thirdPageTeamImage: {
    width: hp(13.8),
    height: hp(13.8),
    borderRadius: 200,
  },

  thirdPageTeamNameText: {
    fontSize: FONTSIZE.small_3,
    includeFontPadding: false,
    lineHeight: FONTSIZE.small_3,
    fontFamily: "RobotoCondensed",
    color: "white",
  },

  thirdPagePlayerText: {
    fontSize: FONTSIZE.semi_x_large,
    includeFontPadding: false,
    lineHeight: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  thirdPageScoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2.4),
  },

  thirdPagePtsText: {
    fontSize: FONTSIZE.semi_medium,
    includeFontPadding: false,
    lineHeight: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "white",
  },

  thirdPageScoreText: {
    fontSize: FONTSIZE.semi_x_large,
    includeFontPadding: false,
    lineHeight: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  paginationContainer: {
    display: "relative",
    top: -10,
    marginTop: -10,
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
});

export default styles;
