import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE } from "../../../constants/theme";
const styles = StyleSheet.create({
  container: {
    height: hp(29),
    justifyContent: "center",
    paddingHorizontal: wp(23.9),
    backgroundColor: "#a71a0c",
    borderBottomRightRadius: 85,
    borderBottomLeftRadius: 85,
  },

  titleTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: FONTSIZE.xx_large,
    color: "white",
    fontFamily: "RobotoBold",
    textAlign: "center",
  },
});

export default styles;
