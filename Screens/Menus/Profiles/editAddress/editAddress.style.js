import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  HEIGHT,
  SIZES,
} from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputsContainer: {
    marginLeft: wp(5.6),
    marginRight: wp(6.4),
  },
  inputContainer: {
    marginTop: hp(2.7),
  },
  inputLabelText: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.semi_medium,
    marginBottom: hp(1.45),
  },

  dropdown: {
    height: HEIGHT.medium_height,
    backgroundColor: "white",
    borderRadius: 11,
    paddingLeft: wp(4),
    paddingRight: wp(3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  item: {
    padding: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
  placeholderStyle: {
    color: "#aaa",
    fontSize: FONTSIZE.label,
    fontFamily: "RobotoRegular",
  },
  selectedTextStyle: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
  iconStyle: {
    width: hp(2.5),
    height: hp(2.5),
  },
  inputSearchStyle: {
    height: hp(5),
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
