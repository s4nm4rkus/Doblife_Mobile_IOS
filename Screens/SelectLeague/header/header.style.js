import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.clr_minestrone,
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
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
    fontSize: FONTSIZE.large_1,
    marginLeft: 10,
    fontWeight: "bold",
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

  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonContainer: {
    marginRight: 10,
  },
});

export default styles;
