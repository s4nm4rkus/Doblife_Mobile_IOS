import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(10.1),
  },

  dobCoinsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  starContainer: {
    width: hp(5.05),
    height: hp(5.05),
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ebeded",
    elevation: 2,
  },

  dobCoinsText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    marginLeft: wp(4.4),
  },

  dobCoinsQuestionContainer: {
    marginTop: hp(2.25),
    marginBottom: hp(1.75),
  },

  dobCoinsQuestionText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  dobCoinsDescriptionText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
