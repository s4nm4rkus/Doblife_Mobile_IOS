import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: COLORS.clr_light_white,
    borderBottomWidth: 1,
  },
  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowLeftButton: {
    marginLeft: 15,
  },
  editPlayerDetailsText: {
    fontSize: FONTSIZE.semi_large,
    marginLeft: 20,
  },
  headerButton: {
    marginRight: 20,
  },
  headerText: {
    fontSize: FONTSIZE.x_large,
    marginLeft: 15,
    fontWeight: "bold",
  },
});

export default styles;
