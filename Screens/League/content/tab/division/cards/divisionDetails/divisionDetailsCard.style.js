import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  SIZES,
} from "../../../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    minHeight: hp(22),
    backgroundColor: "white",
    borderRadius: SIZES.small,
    elevation: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#c42414",
    borderTopStartRadius: SIZES.small,
    borderTopEndRadius: SIZES.small,
    borderBottomColor: "#e2968e",
    borderBottomWidth: 2,
  },

  divisionDetailsText: {
    color: COLORS.clr_light_white,
    fontFamily: FONT.bold,
    fontSize: FONTSIZE.semi_x_large,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
  },

  details: {
    borderBottomColor: "#e2968e",
    marginTop: 12,
  },

  detailsLabelText: {
    marginBottom: 4,
    fontSize: FONTSIZE.medium,
  },

  detailsText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_large,
  },
});

export default styles;
