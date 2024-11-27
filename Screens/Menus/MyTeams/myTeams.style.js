import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  bodyContainer: {
    paddingHorizontal: wp(4.1),
  },

  bodyContentContainer: {
    paddingBottom: hp(4),
  },

  sectionContainer: {
    paddingTop: hp(2.5),
  },

  sectionTextContainer: {
    marginBottom: hp(1),
  },

  sectionTitleText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  sectionDescriptionText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },

  teamsContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default styles;
