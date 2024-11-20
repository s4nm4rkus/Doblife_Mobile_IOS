import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfafa",
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    height: "90%",
    width: "90%",
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
  },

  bodyContainer: {
    paddingHorizontal: wp(6),
  },

  headerTitleText: {
    flex: 1,
    fontSize: FONTSIZE.medium_6,
    fontFamily: "RobotoBold",
    marginBottom: hp(2),
  },

  titleContainer: {
    marginBottom: hp(1),
  },

  titleText: {
    fontSize: FONTSIZE.x_large,
    fontFamily: "RobotoBold",
  },

  secondaryTitleContainer: {
    marginBottom: hp(1),
  },

  secondaryTitleText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  subtitleContainer: {
    marginBottom: hp(1),
  },

  subtitleText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
  },

  descriptionContainer: {
    marginBottom: hp(1),
  },

  descriptionText: {
    fontSize: FONTSIZE.medium,
    fontFamily: "RobotoRegular",
  },

  listContainer: {
    marginBottom: hp(1),
    paddingLeft: wp(3),
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: hp(1),
  },

  listText: {
    fontSize: FONTSIZE.medium,
    fontFamily: "RobotoRegular",
    flex: 1,
    flexWrap: "wrap",
  },

  bulletText: {
    fontSize: FONTSIZE.small_5,
    marginRight: 5,
  },

  boldText: {
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  understandButton: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(2.5),
  },

  understandText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },
});

export default styles;
