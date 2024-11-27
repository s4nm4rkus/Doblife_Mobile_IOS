import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(3.3),
    marginBottom: hp(3.9),
    paddingHorizontal: 29.1,
  },
  nameText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
    color: "white",
    lineHeight: FONTSIZE.large_2,
  },
  teamImage: {
    width: hp(6.5),
    height: hp(6.5),
    borderRadius: 200,
  },

  nameAndPointsContainer: {
    marginLeft: wp(3.74),
  },

  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  outerPoints: {
    height: hp(2.65),
    borderRadius: 11,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f18805",
    paddingLeft: wp(1.5),
    paddingRight: wp(3.1),
  },

  innerPoints: {
    width: hp(2),
    height: hp(2),
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 1,
  },

  pointsText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "white",
    includeFontPadding: false,
    marginLeft: wp(2.3),
  },

  infoContainer: {
    marginLeft: wp(2.6),
  },
});

export default styles;
