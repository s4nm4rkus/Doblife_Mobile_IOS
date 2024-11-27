import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2.25),
    marginHorizontal: wp(5.1),
  },
  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backText: {
    fontSize: FONTSIZE.large,
    marginLeft: wp(3.475),
    fontFamily: "RobotoCondensed",
    color: "#f0f0f0",
  },
});

export default styles;
