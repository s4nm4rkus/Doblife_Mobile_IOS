import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: hp(5),
    margin: SIZES.semi_small,
  },
  btn: (name, activeTab) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: name === "Coach" ? 5 : 0,
    borderBottomRightRadius: name === "Coach" ? 5 : 0,
    borderTopLeftRadius: name === "Player" ? 5 : 0,
    borderBottomLeftRadius: name === "Player" ? 5 : 0,
    backgroundColor:
      name === activeTab ? COLORS.clr_dark_red : COLORS.clr_light_gray,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: name === activeTab ? COLORS.clr_light_white : "#AAA9B8",
  }),
});

export default styles;
