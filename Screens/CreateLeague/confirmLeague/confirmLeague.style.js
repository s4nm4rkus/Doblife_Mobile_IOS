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
} from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },

  cardContainer: {
    width: wp("90%"),
    minHeight: hp("5%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },

  textTitle: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
    marginBottom: 15,
  },

  detailContainer: {
    flex: 1,
    marginBottom: 15,
  },

  detailLabel: {
    fontSize: FONTSIZE.small,
    marginBottom: 2,
  },

  detailValue: {
    fontSize: FONTSIZE.medium_1,
    fontWeight: "600",
    color: "red",
  },

  divisionContainer: {
    flex: 1,
  },

  titlesContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 5,
  },

  valuesContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 5,
  },

  labelText: {
    fontSize: FONTSIZE.small,
  },

  valueText: {
    fontSize: FONTSIZE.medium_1,
    color: "red",
    fontWeight: "600",
  },

  column: {
    width: "50%",
  },

  yearBornText: {
    width: "50%",
  },
});

export default styles;
