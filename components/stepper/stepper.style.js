import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONT, FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp(9.2),
    marginBottom: hp(4.75),
  },

  logoIcon: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    width: hp(50),
    height: hp(5.45),
  },

  doblifeText: {
    marginLeft: wp(2.6),
    fontSize: FONTSIZE.large_6,
    fontFamily: "Koulen",
    color: "#c42414",
    includeFontPadding: false,
  },

  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  signUpLabel: {
    fontSize: FONTSIZE.xxxLarge,
    fontFamily: "RobotoBold",
  },
});

export default styles;
