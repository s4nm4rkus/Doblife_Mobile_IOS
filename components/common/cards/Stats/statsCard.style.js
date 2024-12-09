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
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(28.5),
    height: hp(12.7),
    borderRadius: SIZES.small,
    borderWidth: 0.5,
    borderColor: COLORS.clr_light_white,
    backgroundColor: COLORS.clr_opac_dark_red,
  },

  statNumberText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.large_4,
    color: COLORS.clr_light_white,
  },

  statNameText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.label,
    color: COLORS.clr_light_white,
  },
});

export default styles;
