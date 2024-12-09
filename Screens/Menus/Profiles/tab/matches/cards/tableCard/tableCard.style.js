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
    height: hp(44),
    borderRadius: SIZES.small,
    backgroundColor: "white",
  },

  paginationWrapper: {
    height: hp(8),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: SIZES.small,
    backgroundColor: "white",
  },

  cardContainer: {
    marginHorizontal: SIZES.semi_small,
    marginBottom: SIZES.semi_small,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  tableTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },

  heading: {
    flex: 1,
    fontSize: FONTSIZE.semi_medium,
  },

  row: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cell: {
    flex: 1,
    textAlign: "left",
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.semi_x_large,
    borderBottomWidth: 1,
  },

  playerDetailsText: {
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.semi_x_large,
  },

  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  editText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_medium,
    marginRight: 5,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
  },

  details: {
    borderBottomWidth: 1,
    marginTop: 12,
  },

  detailsLabelText: {
    marginBottom: 6,
    fontSize: FONTSIZE.medium,
  },

  detailsText: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: FONTSIZE.semi_large,
  },

  heightLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  heightText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_large,
  },

  measureText: {
    marginLeft: 35,
    fontSize: FONTSIZE.semi_large,
  },

  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "transparent",
  },
  paginationButton: {
    justifyContent: "center",
    alignItems: "center",
    width: hp(3),
    height: hp(3),
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: "#c42414",
    width: hp(3),
    height: hp(3),
    borderRadius: 25,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  activeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
