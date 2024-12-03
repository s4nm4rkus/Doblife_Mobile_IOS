import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
const styles = StyleSheet.create({
  container: {
    height: hp(33.1),
    borderBottomRightRadius: 120,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleTextContainer: {
    paddingLeft: wp(10.7),
    paddingRight: wp(13.7),
    marginTop: hp(5.5),
  },

  textContainer: {
    paddingLeft: wp(10.7),
    paddingRight: wp(15.2),
    flexDirection: "row",
    alignItems: "center",
  },
  joinALeagueText: {
    fontSize: FONTSIZE.large_5,
    color: "white",
    fontFamily: "RobotoCondensedBold",
  },
  contentText: {
    marginTop: hp(0.5),
    fontSize: FONTSIZE.description,
    fontFamily: "RobotoCondensed",
    color: "white",
  },
});

export default styles;
