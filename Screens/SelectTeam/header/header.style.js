import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

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
    paddingLeft: wp(9.6),
    paddingRight: wp(13.7),
    marginTop: hp(5.2),
  },

  textContainer: {
    paddingLeft: wp(9.6),
    paddingRight: wp(13.6),
    flexDirection: "row",
    alignItems: "center",
  },
  joinALeagueText: {
    fontSize: FONTSIZE.screen_title,
    color: "white",
    fontFamily: "RobotoCondensedBold",
  },
  contentText: {
    marginTop: hp(1.98),
    fontSize: FONTSIZE.description,
    fontFamily: "RobotoCondensed",
    color: "white",
  },
});

export default styles;
