import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    paddingTop: hp(1.69),
    paddingBottom: hp(2.3),
  },

  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp(5.6),
  },

  titleText: {
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoRegular",
    marginLeft: wp(4.85),
  },
  headerButton: {
    marginRight: wp(6.4),
  },

  headerText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "#0b0b0b",
  },
});

export default styles;
