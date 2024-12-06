import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(2.46),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeftButton: {
    marginLeft: wp(5.4),
  },
  homeText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    marginLeft: wp(3.4),
  },
});

export default styles;
