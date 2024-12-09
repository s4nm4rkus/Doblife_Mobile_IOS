import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../../../../constants/theme";

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

  divisionContainer: {
    flex: 1,
    marginHorizontal: wp(5),
  },

  titlesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: hp(1.5),
    marginBottom: hp(2.18),
  },

  valuesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: hp(2.2),
  },

  labelText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  valueText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
  },

  column: {
    width: "50%",
  },

  yearBornText: {
    width: "50%",
  },

  editText: (isOwner) => ({
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: isOwner ? "#c42414" : "#aaa",
  }),
});

export default styles;
