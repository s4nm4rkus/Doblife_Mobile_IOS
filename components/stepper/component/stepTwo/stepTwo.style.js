import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../.././../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },

  tabContainer: {
    alignItems: "center",
  },
  signInWithContainer: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SIZES.semi_small,
    gap: 5,
  },
  signInWithText: {
    fontFamily: FONT.regular,
    color: COLORS.clr_gray,
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: COLORS.clr_light_gray,
  },
  bottomImageContainer: {
    flex: 1,
  },

  bottomImage: {
    width: "100%",
    height: "150%",
    resizeMode: "stretch",
  },

  switchButtonsContainer: {
    marginTop: hp(4.1),
    marginHorizontal: wp(32.8),
    backgroundColor: COLORS.clr_white,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#aaa",
  },

  switchButtons: {
    height: hp(4.05),
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  btnTextSize: {},

  btn: (name, activeTab) => ({
    flex: 1,
    backgroundColor: name === activeTab ? COLORS.clr_minestrone : "transparent",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }),

  btnText: (name, activeTab) => ({
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.label,
    color: name === activeTab ? "white" : "black",
  }),

  orContainer: {
    paddingHorizontal: wp(10.4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(3.4),
  },

  orText: {
    fontSize: FONTSIZE.small,
    paddingHorizontal: wp(2.5),
    fontFamily: "RobotoRegular",
  },

  line: {
    flex: 1,
    height: hp(0.1),
    backgroundColor: "black",
  },

  loginFacebookContainer: {
    marginTop: hp(3.12),
    height: hp(8.35),
    borderRadius: 5.5,
    borderWidth: 1,
    marginHorizontal: wp(10.4),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#0b0b0b",
  },

  loginViaFacebookText: {
    marginLeft: wp(6.4),
    fontSize: FONTSIZE.xLarge,
    fontFamily: "RobotoBold",
    color: "#1877f2",
  },
});

export default styles;
