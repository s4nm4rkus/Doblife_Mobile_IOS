import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(7.3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c42414",
    paddingHorizontal: wp(4.1),
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: wp(2),
  },
});

export default styles;
