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
    flexDirection: "row",
    justifyContent: "space-between",
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

  addBracketButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  addBracketText: {
    fontSize: FONTSIZE.semi_large,
    color: "#c42414",
  },

  plusIcon: {
    color: "#c42414",
    marginRight: wp(1),
  },
});

export default styles;
