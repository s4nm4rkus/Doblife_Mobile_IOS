import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  FONTSIZE,
} from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: wp(44.5),
    paddingVertical: hp(0.7),
  },

  cardContainer: {
    height: hp(8),
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },

  teamNameContainer: {
    flex: 1,
  },

  verticalDotContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  teamText: {
    fontSize: FONTSIZE.modal_button,
    fontWeight: "bold",
  },

  logo: {
    width: hp(6),
    height: hp(6),
    borderRadius: 200,
    marginHorizontal: 10,
  },
});

export default styles;
