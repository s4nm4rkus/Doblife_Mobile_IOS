import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: 90,
    backgroundColor: COLORS.clr_light_white,
    borderRadius: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.large,
    gap: SIZES.xLarge,
    ...SHADOWS.medium,
  },
  teamImage: {
    width: 72,
    height: "80%",
    borderRadius: 200,
  },
  teamNameText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
});

export default styles;
