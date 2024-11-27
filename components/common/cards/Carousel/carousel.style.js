import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: "cover", // Adjust the image resizeMode as needed
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitleText: {
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.xx_large,
    marginBottom: hp(1.15),
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },
  cardBodyText: {
    width: wp("80%"),
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.label,
    color: "white",
    textAlign: "center",
  },
  paginationContainer: {
    display: "relative",
    top: -10,
    marginTop: -10,
    flexDirection: "row",
    justifyContent: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "white", // Change the color as needed
    marginHorizontal: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (fourth parameter) as needed
  },
});

export default styles;
