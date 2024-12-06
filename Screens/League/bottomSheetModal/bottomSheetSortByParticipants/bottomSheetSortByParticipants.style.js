import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignSelf: "center",
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  buttonText: {
    fontFamily: FONT.medium,
    fontSize: FONTSIZE.semi_large,
    color: COLORS.primary,
  },
});

export default styles;
