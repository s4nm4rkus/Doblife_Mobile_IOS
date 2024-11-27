import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(5.4),
  },

  accountSettingsTextContainer: {
    marginTop: hp(2.75),
  },

  accountSettingsText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoRegular",
  },

  deleteProfileContainer: {
    marginTop: hp(2.75),
    borderRadius: 11,
    elevation: 5,
    paddingHorizontal: wp(4.4),
    paddingTop: hp(2),
    paddingBottom: hp(2.9),
    backgroundColor: "white",
  },

  deleteProfileText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  deleteProfileDescriptionText: {
    marginTop: hp(1.4),
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
