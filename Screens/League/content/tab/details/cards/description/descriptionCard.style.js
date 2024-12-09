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

  leagueDescriptionContainer: {
    marginTop: hp(0.9),
    paddingHorizontal: wp(5),
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  seasonDescriptionContainer: {
    paddingHorizontal: wp(5),
  },

  descriptionTitle: {
    fontSize: FONTSIZE.large,
    marginBottom: hp(1.57),
    fontFamily: "RobotoCondensedBold",
  },

  details: {
    borderBottomColor: "#e2968e",
  },

  detailsText: {
    fontSize: FONTSIZE.description,
    marginBottom: hp(2.3),
    fontFamily: "RobotoRegular",
    color: "#0b0b0b",
  },

  editText: (isOwner) => ({
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: isOwner ? "#c42414" : "#aaa",
  }),
});

export default styles;
