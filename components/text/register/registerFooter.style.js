import { StyleSheet } from "react-native";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  navigationContainer: {
    height: hp(4.55),
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(10.4),
    zIndex: 2,
  },
  navigationButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.clr_minestrone,
  },
  navigationButtonText: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.large,
    color: "white",
  },
  questionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp(2.35),
    zIndex: 2,
  },
  questionText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
  },
  loginText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
    color: "#1877f2",
    textDecorationLine: "underline",
    textDecorationColor: "#5198f5",
    zIndex: 2,
  },
});

export default styles;
