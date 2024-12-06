import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  modalContent: {
    width: wp(95),
    paddingTop: hp(1),
    paddingHorizontal: wp(2),
    paddingBottom: hp(1),
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },

  generateMatchContainer: {
    paddingTop: hp(2),
    paddingHorizontal: wp(6.4),
    paddingBottom: hp(2),
    gap: hp(1),
  },

  generateMatchButton: {
    width: "100%",
    height: hp(6),
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "#C42414",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
  },
});

export default styles;
