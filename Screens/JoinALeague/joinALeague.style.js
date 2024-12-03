import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  buttonsContainer: {
    marginTop: 59,
    paddingHorizontal: 28,
  },

  cardContainer: {
    height: hp(14.06),
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: hp(4.66),
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  descriptionContainer: {
    flex: 1,
    marginRight: wp(10),
  },

  titleText: {
    color: "#c42414",
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
  },

  titleTextWhite: {
    color: "white",
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoCondensedBold",
  },

  descriptionText: {
    fontSize: FONTSIZE.small_7,
    fontFamily: "RobotoCondensed",
  },

  descriptionTextWhite: {
    color: "white",
    fontSize: FONTSIZE.small_7,
    fontFamily: "RobotoCondensed",
  },

  circlePlusIconContainer: {
    marginLeft: wp(11.5),
    marginRight: wp(9.25),
  },

  righToBracketIconContainer: {
    marginLeft: wp(11.5),
    marginRight: wp(9.25),
  },

  peopleGroupIconContainer: {
    marginLeft: wp(11.5),
    marginRight: wp(9.25),
  },
});

export default styles;
