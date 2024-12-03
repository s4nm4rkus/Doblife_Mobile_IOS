import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(33.94),
    borderBottomRightRadius: 120,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(5.5),
  },
  textContainer: {
    paddingLeft: wp(9.2),
    paddingRight: wp(13.7),
    flexDirection: "row",
    alignItems: "center",
  },
  arrowLeftButton: {
    paddingLeft: wp(9.2),
  },
  editPlayerDetailsText: {
    fontSize: FONTSIZE.semi_large,
  },
  headerButton: {},
  backText: {
    fontSize: FONTSIZE.large,
    marginLeft: 13,
    fontFamily: "RobotoCondensed",
    color: "white",
  },
  joinALeagueText: {
    marginTop: hp(3.8),
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
