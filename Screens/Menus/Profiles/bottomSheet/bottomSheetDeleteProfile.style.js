import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5.4),
  },

  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  optionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3.9),
  },

  deleteProfileText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },

  deleteProfileDescriptionText: {
    fontSize: FONTSIZE.small_3,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
