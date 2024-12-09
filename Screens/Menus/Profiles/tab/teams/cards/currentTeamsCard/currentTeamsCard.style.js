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
    fontSize: FONTSIZE.detail,
  },

  detailsContainer: {
    flex: 1,
    maxHeight: hp(22),
    marginHorizontal: wp(5.3),
  },

  details: {
    borderBottomWidth: 1,
    marginTop: hp(1.3),
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(1.25),
  },

  detailWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },

  imageContainer: {
    marginRight: wp(7.2),
  },

  teamNameText: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.label,
  },

  positionText: {
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.small_3,
  },

  teamImage: {
    width: hp(4.5),
    height: hp(4.5),
    borderRadius: 200,
  },
});

export default styles;
