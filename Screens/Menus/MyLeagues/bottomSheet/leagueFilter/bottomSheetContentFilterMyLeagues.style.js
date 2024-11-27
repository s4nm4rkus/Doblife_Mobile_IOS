import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignSelf: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20,
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    gap: SIZES.medium,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
  },

  textContainer: {
    flex: 6,
    alignItems: "center",
    flexDirection: "row",
    gap: SIZES.medium,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
  },

  textDescription: {
    fontSize: FONTSIZE.small,
    color: COLORS.primary,
  },

  buttonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  disabledButton: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.clr_gray,
  },
  comingSoonContainer: {
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 3,
    width: "auto",
    borderStyle: "dashed",
    borderColor: COLORS.clr_red,
  },
  comingSoonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.clr_light_white,
    backgroundColor: COLORS.clr_red,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
});

export default styles;
