import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  SIZES,
} from "../../../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    minHeight: hp(22),
    backgroundColor: "white",
    borderRadius: 11,
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  headerContainer: {
    paddingTop: hp(2.25),
    paddingHorizontal: wp(5),
  },

  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1.24),
  },

  headerText: {
    fontSize: FONTSIZE.semi_large,
  },

  headerLine: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 2,
  },

  seasonDescriptionText: {
    color: "#c42414",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
  },

  seasonDetailsText: {
    color: COLORS.clr_light_white,
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.semi_x_large,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: wp(5),
    paddingBottom: hp(3.35),
  },

  details: {
    marginTop: hp(2.2),
  },

  detailsLabelText: {
    marginBottom: hp(0.5),
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  detailsText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
  },

  editText: (isOwner) => ({
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: isOwner ? "#c42414" : "#aaa",
  }),
});

export default styles;
