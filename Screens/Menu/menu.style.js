import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  closeIconContainer: {
    position: "absolute",
    top: hp(1),
    right: wp(3),
  },

  profileContainer: {
    marginTop: hp(7.7),
    paddingLeft: wp(11.45),
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: hp(4.88),
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    gap: wp(5.5),
  },
  buttonsContainer: {
    flex: 1,
    marginLeft: wp(11.45),
    marginRight: wp(7.5),
    marginTop: hp(6.4),
  },
  footer: {
    height: hp(8.45),
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
    color: "white",
  },

  teamImage: {
    height: hp(8.5),
    width: hp(8.5),
    borderRadius: 200,
  },

  nameText: {
    fontSize: FONTSIZE.medium_2,
    fontFamily: "RobotoBold",
  },

  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(0.75),
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

  logoutContainer: {
    marginLeft: wp(11.45),
  },

  logoutButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(3.6),
  },

  logoutText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
    marginLeft: wp(4.8),
  },
});

export default styles;
