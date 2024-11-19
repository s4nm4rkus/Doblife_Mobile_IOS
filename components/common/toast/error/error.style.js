import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  FONTSIZE,
} from "../../../../constants/theme";

const styles = StyleSheet.create({
  toastContainer: {
    minHeight: 1,
    width: wp(92),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SIZES.small,
    ...SHADOWS.large,
  },
  lottieContainer: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: SIZES.small,
    borderBottomLeftRadius: SIZES.small,
    backgroundColor: COLORS.clr_light_white,
  },
  lottieStyle: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "80%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    paddingVertical: SIZES.small,
    paddingLeft: 20,
    borderTopRightRadius: SIZES.small,
    borderBottomRightRadius: SIZES.small,
    backgroundColor: COLORS.clr_pale_red,
  },
  toastHeaderText: {
    fontFamily: FONT.bold,
    color: COLORS.clr_light_white,
    fontSize: SIZES.medium,
  },
  toastMessageText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.clr_light_white,
  },

  customToastContainer: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 1,
    width: wp(92),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 11,
  },

  text1: {
    flex: 1,
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.button,
    marginLeft: wp(3.3),
  },

  text: {
    flex: 1,
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.button,
    marginLeft: wp(3.3),
  },

  name: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.button,
  },
});

export default styles;
