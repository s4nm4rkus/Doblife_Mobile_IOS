import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(7.6),
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    gap: wp(3.7),
    marginBottom: hp(4.5),
  },
  buttonText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
