import { FONT, FONTSIZE } from "../../../../constants/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(4.05),
  },

  titleStyle: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.semi_x_large,
    marginLeft: wp(4.8),
  },

  notificationCount: {
    marginLeft: "auto",
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    color: "#b21e10",
  },
});

export default styles;
