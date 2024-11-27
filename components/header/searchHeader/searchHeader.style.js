import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE, HEIGHT } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: hp(3.4),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    gap: wp(5),
  },
  arrowLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowLeftButton: {
    marginLeft: wp(5.3),
  },

  inputContainer: {
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "row",
    marginRight: wp(5.7),
    height: HEIGHT.medium_height,
  },
  inputWrapper: {
    flexGrow: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
    elevation: 5,
    height: "100%",
  },
  inInput: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: wp(3.7),
  },
});

export default styles;
