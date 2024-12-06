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
    elevation: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(3.7),
    paddingVertical: hp(1.05),
    backgroundColor: "#c42414",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  columnHeaderContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  participantsText: {
    color: "white",
    fontFamily: "RobotoCondensedBold",
    fontSize: FONTSIZE.large,
  },

  participantsContainer: {
    marginHorizontal: 15,
    paddingBottom: 12,
  },

  teamParticipantContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    paddingVertical: 10,
  },

  logo: {
    width: hp(5),
    height: hp(5),
    borderRadius: 200,
    marginRight: 15,
  },

  acronymText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.semi_large,
  },

  teamNameText: {
    fontSize: FONTSIZE.semi_large,
  },

  removeContainer: {
    marginLeft: "auto",
  },

  rankContainer: {
    width: wp(20),
    flexDirection: "column",
    alignItems: "center",
  },

  teamNameContainer: {
    width: wp(100),
    flexDirection: "column",
  },

  winHeaderContainer: {
    width: wp(20),
    flexDirection: "column",
    alignItems: "center",
  },

  loseHeaderContainer: {
    width: wp(20),
    flexDirection: "column",
    alignItems: "center",
  },

  standingHeaderContainer: {
    width: wp(25),
    flexDirection: "column",
    alignItems: "center",
  },

  tieBreakerHeaderContainer: {
    width: wp(25),
    flexDirection: "column",
    alignItems: "center",
  },

  actionHeaderContainer: {
    width: wp(20),
    flexDirection: "column",
  },

  rankValueContainer: {
    width: wp(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  teamNameValueContainer: {
    width: wp(100),
    flexDirection: "column",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  winContainer: {
    width: wp(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  loseContainer: {
    width: wp(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  standingContainer: {
    width: wp(25),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  tieBreakerContainer: {
    width: wp(25),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  actionContainer: {
    width: wp(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
  },

  headerText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensedBold",
  },

  teamNameText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoCondensedBold",
    marginLeft: 15,
  },

  rankValueText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
  },

  participantsContainer: {
    flexDirection: "row",
  },

  teamAcronymValueText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoCondensedBold",
  },

  teamNameValueText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoCondensed",
  },

  sortByContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  sortByText: {
    color: "#fff",
    fontFamily: "RobotoCondensed",
    fontSize: FONTSIZE.label,
    marginRight: hp(1.5),
  },

  filterIcon: {
    color: "#fff",
  },
});

export default styles;
