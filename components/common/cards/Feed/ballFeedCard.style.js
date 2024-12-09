import { ScaledSheet } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants/theme";

const styles = ScaledSheet.create({
  container: {
    width: wp("90%"),
    height: hp("30%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
  },
  feedContentContainer: {
    flexDirection: "row",
    width: "100%",
    height: "72%",
  },
  feedContentLeft: {
    width: "50%",
    height: "100%",
    justifyContent: "space-around",
    paddingHorizontal: "20@s",
  },
  leagueTitleText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
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
});

export default styles;
