import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: wp(42.7),
    marginBottom: hp(2.1),
  },

  cardContainer: {
    paddingTop: hp(1.3),
    paddingLeft: wp(3.7),
    paddingRight: wp(2),
    height: hp(18),
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    borderColor: "#bcbcbc",
    borderWidth: 1,
  },

  content: {
    flex: 1,
    flexDirection: "row",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  leagueContainer: {
    flex: 1,
  },

  detailContainer: {
    flex: 1,
  },

  verticalDotContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  leagueNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  noMatchesText: {
    fontSize: FONTSIZE.small,
    fontFamily: "RobotoRegular",
    alignSelf: "center",
  },

  matchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
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
    lineHeight: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },

  quarterText: {
    fontSize: FONTSIZE.small_3,
    lineHeight: FONTSIZE.small_3,
    fontFamily: "RobotoRegular",
  },

  scoreText: {
    position: "absolute",
    alignSelf: "center",
    bottom: hp(-3),
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.large,
    color: "#c42414",
  },

  logo: {
    width: hp(4.2),
    height: hp(4.2),
    borderRadius: 200,
  },
});

export default styles;
