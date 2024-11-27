import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {},

  headerContainer: {
    paddingTop: hp(1.85),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ebeded",
  },

  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowLeftButton: {
    marginLeft: wp(5.4),
  },

  backText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    marginLeft: wp(3.4),
  },
});

export default styles;
