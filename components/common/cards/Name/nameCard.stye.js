import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.clr_light_white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES.xLarge,
  },
  teamImage: {
    width: 70,
    height: "80%",
    borderRadius: 200,
  },
  nameText: {
    fontFamily: FONT.bold,
  },
  infoText: {
    fontFamily: FONT.medium,
    color: COLORS.clr_gray,
  },
});

export default styles;
