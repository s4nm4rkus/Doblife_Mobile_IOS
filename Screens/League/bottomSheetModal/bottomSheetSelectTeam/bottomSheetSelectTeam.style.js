import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignSelf: "center",
  },

  matchupButtonContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp(5.6),
    marginBottom: hp(1.75),
  },

  teamNameText: {
    textTransform: "uppercase",
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },

  teamsContainer: {
    marginHorizontal: wp(5.65),
    marginBottom: hp(1.9),
    paddingBottom: hp(1),
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  teamsText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoBold",
  },

  optionsContainer: {
    paddingHorizontal: wp(9.1),
    flexDirection: "row",
    marginBottom: hp(2.8),
  },

  optionButton: (name, activeButton) => ({
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp(3.48),
    height: hp(3.25),
    marginRight: wp(3),
    borderRadius: 5,
    backgroundColor: name === activeButton ? "#0b0b0b" : "transparent",
  }),

  optionText: (name, activeButton) => ({
    fontSize: FONTSIZE.button,
    color: name === activeButton ? "#fff" : "#000",
    fontFamily: "RobotoCondensed",
  }),
});

export default styles;
