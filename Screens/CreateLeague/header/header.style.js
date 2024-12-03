import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
const styles = StyleSheet.create({
  container: {
    height: hp(35),
    paddingTop: 55,
    paddingHorizontal: 25,
    marginBottom: 20,
    backgroundColor: COLORS.clr_xmas_candy,
    borderBottomRightRadius: 120,
  },
  backButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleTextContainer: {},

  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  arrowLeftButton: {},
  editPlayerDetailsText: {
    fontSize: FONTSIZE.semi_large,
    marginLeft: 20,
  },
  headerButton: {
    marginRight: 20,
  },
  backText: {
    fontSize: FONTSIZE.semi_large,
    marginLeft: 10,
    color: "white",
  },
  joinALeagueText: {
    fontSize: FONTSIZE.large_5,
    color: "white",
    fontWeight: "bold",
  },
  contentText: {
    fontSize: FONTSIZE.semi_large,
    color: "white",
  },
});

export default styles;
