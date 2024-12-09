import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: wp("45%"),
    height: hp("18%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: COLORS.clr_light_white,
    ...SHADOWS.medium,
  },
  todayContentContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: COLORS.clr_red,
  },
  leagueNameContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  leagueNameText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.clr_light_white,
  },
  matchContainer: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
  },
  teamImage: {
    width: "88%",
    height: "60%",
    borderRadius: 100,
  },
  teamScore: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.clr_light_white,
  },
  teamAContainer: {
    width: "33%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerContainer: {
    width: "33%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dividerQuarterNumberText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.clr_light_white,
  },
  dividerQuarterText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.clr_light_white,
  },
  teamBContainer: {
    width: "33%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
