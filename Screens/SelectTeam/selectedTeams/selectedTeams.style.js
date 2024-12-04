import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(5.3),
  },
  contentContainer: {},
  teamLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  teamLogoWrapper: {
    position: "relative",
  },

  teamLogoImageWrapper: {
    paddingVertical: hp(1.75),
    paddingHorizontal: wp(2.55),
    alignItems: "center",
    justifyContent: "center",
  },

  teamLogo: {
    borderRadius: 200,
    height: hp(3.92),
    width: hp(3.92),
  },

  iconWrapper: {
    position: "absolute",
    top: 4,
    right: 1,
  },

  icon: {
    color: "#ff0000",
  },

  selectedTeamsText: {
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.label,
    marginLeft: wp(0.8),
  },
});

export default styles;
