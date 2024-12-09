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
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#c42414",
    paddingHorizontal: wp(3.7),
    paddingVertical: hp(1.05),
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  headerTitle: {
    color: "white",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
  },

  generateMatchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  generateMatchButton: {
    width: wp(42),
    height: hp(6),
    // paddingHorizontal: ,
    justifyContent: "center",
    borderRadius: 11,
    backgroundColor: "#C42414",
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
  },

  roundsContainer: {
    paddingVertical: wp(3.7),
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },

  roundButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  roundButtonContainer: {
    marginHorizontal: 20.9,
    flex: 1,
    justifyContent: "center",
  },

  roundButtonText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoCondensedBold",
    textTransform: "uppercase",
  },

  activeRoundButtonText: (index, activeRound) => ({
    borderBottomColor: index === activeRound ? "#c42414" : "black",
    color: index === activeRound ? "#c42414" : "#aaa",
    borderBottomWidth: index === activeRound ? 3 : 0,
  }),

  gamesContainer: {
    flex: 1,
    // paddingVertical: hp(2.5),
  },

  gameContainer: {
    marginHorizontal: wp(4.5),
    marginTop: hp(2.95),
    flex: 1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },

  gameHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(1.65),
  },

  gameText: (status) => ({
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    color: status == "finished" ? "#aaa" : "#040912",
  }),

  scoreSheetContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  scoreSheetText: {
    fontSize: 13.2,
    marginRight: 10.5,
    fontFamily: "RobotoRegular",
    color: "rgba(170, 170, 170, 0.67)",
  },

  scoreSheetButton: {
    width: wp(6.35),
    height: hp(3.13),
    justifyContent: "center",
    alignItems: "center",
    fontSize: FONTSIZE.small,
    borderRadius: 5,
  },

  trashCanButton: {
    marginLeft: wp(4.7),
  },

  selectMatchupsContainer: {
    height: hp(4.8),
    backgroundColor: "white",
    marginBottom: hp(2),
    borderRadius: 11,
    flexDirection: "row",
    borderColor: "#c4c4c4",
    borderWidth: 1,
  },

  selectMatchupsInputContainer: {
    justifyContent: "center",
  },

  matchupButtonContainer: {
    paddingLeft: 17.1,
    paddingRight: 32.7,
    alignItems: "center",
    flexDirection: "row",
  },

  teamNameContainer: {
    width: "40%",
  },

  vsContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
  },

  teamNameText: (status) => ({
    textTransform: "uppercase",
    fontSize: FONTSIZE.medium,
    fontFamily: "RobotoRegular",
    color: status == "finished" ? "#aaa" : "black",
  }),

  vsText: (status) => ({
    fontSize: FONTSIZE.small_6,
    fontFamily: "RobotoRegular",
    color: status == "finished" ? "#aaa" : "black",
  }),

  selectMatchupsText: (status) => ({
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    paddingLeft: wp(4.1),
    color: status == "finished" ? "#aaa" : "black",
  }),

  selectMatchupsPlaceholderText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    paddingLeft: wp(4.1),
    color: "rgba(170, 170, 170, 0.67)",
  },

  selectDatePlaceholderText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
    paddingLeft: wp(4.1),
    color: "rgba(170, 170, 170, 0.67)",
  },

  selectMatchupsIconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: wp(4),
  },

  calendarIcon: (status) => ({
    color: status == "finished" ? "#aaa" : "black",
  }),

  addGameContainer: {
    marginHorizontal: wp(4.5),
    marginTop: hp(2.35),
    paddingVertical: hp(1.8),
    paddingLeft: wp(4.2),
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#aaa",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3.15),
  },

  addGameText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoRegular",
  },
});

export default styles;
