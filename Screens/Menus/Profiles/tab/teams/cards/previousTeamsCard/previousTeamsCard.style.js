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
    borderRadius: 11,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: hp(1.45),
    paddingBottom: hp(1.25),
    paddingHorizontal: wp(5.1),
    borderBottomWidth: 1,
    borderColor: "rgba(170, 170, 170, 0.5)",
  },

  noCurrentTeamsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp(3.55),
    paddingBottom: hp(4.55),
  },

  noCurrentTeamsText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensed",
    color: "#aaa",
  },

  label: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
    color: "#0b0b0b",
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

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  detailWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },

  imageContainer: {
    marginRight: 15,
  },

  teamNameText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_large,
  },

  positionText: {
    fontSize: FONTSIZE.medium,
  },

  teamImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: 200,
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
});

export default styles;
