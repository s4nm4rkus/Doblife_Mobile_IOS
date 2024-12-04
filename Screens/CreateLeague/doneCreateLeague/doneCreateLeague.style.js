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
    paddingHorizontal: 25,
    paddingBottom: 20,
  },

  leagueContainer: {
    marginVertical: 50,
    alignItems: "center",
  },

  leagueNameText: {
    marginTop: 10,
    fontSize: FONTSIZE.medium_2,
    fontWeight: "bold",
    // lineHeight: FONTSIZE.medium_4,
  },

  leagueAcronymText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.large_7,
    // lineHeight: FONTSIZE.semi_large,
  },

  messageContainer: {
    alignItems: "center",
  },

  messageText: {
    fontSize: FONTSIZE.semi_medium,
    textAlign: "center",
  },

  cardContainer: {
    width: wp("90%"),
    minHeight: hp("5%"),
    borderRadius: SIZES.medium,
    overflow: "hidden",
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  textTitle: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
    marginBottom: 15,
  },

  detailContainer: {
    flex: 1,
    marginBottom: 5,
  },

  detailLabel: {
    fontSize: FONTSIZE.medium,
  },

  detailValue: {
    fontSize: FONTSIZE.detail,
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
    fontSize: FONTSIZE.medium,
  },

  valueText: {
    fontSize: FONTSIZE.detail,
  },

  column: {
    width: "50%",
  },

  yearBornText: {
    width: "50%",
  },
});

export default styles;
