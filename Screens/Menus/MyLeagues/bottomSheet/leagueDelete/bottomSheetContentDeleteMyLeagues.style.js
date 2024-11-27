import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignSelf: "center",
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
  },

  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp(7),
  },

  textDescription: {
    fontSize: FONTSIZE.small_3,
    fontFamily: "RobotoRegular",
  },

  buttonText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.large,
  },

  textDescriptionContainer: {
    flex: 1,
    paddingLeft: wp(4),
  },
});

export default styles;
