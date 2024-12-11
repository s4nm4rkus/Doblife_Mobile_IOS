import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },

  yourTeamContainer: {
    paddingHorizontal: wp(9.3),
    marginTop: hp(2.8),
    marginBottom: hp(4.8),
  },

  headerTitle: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
  },

  buttonText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
    color: "#c42414",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(2.4),
  },

  yourTeamCardContainer: {
    backgroundColor: "#fff",
    borderRadius: 11,
    elevation: 4,
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  yourTeamCardBodyContainer: {
    flexDirection: "row",
    paddingVertical: hp(1.1),
  },

  teamLogoContainer: {
    marginLeft: wp(6.5),
    marginRight: wp(5.7),
  },

  teamLogo: {
    width: hp(8.1),
    height: hp(8.1),
    borderRadius: 200,
  },

  teamDetailsContainer: {
    justifyContent: "center",
  },

  teamNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  teamAcronymText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoBold",
  },

  leagueSelectedContainer: {
    paddingHorizontal: wp(9.3),
  },

  leagueSelectedCardContainer: {
    backgroundColor: "#fff",
    borderRadius: 11,
    elevation: 4,
    shadowColor: "#444444",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  leagueSelectedCardBodyContainer: {
    paddingVertical: hp(2.6),
    paddingLeft: wp(5.6),
    paddingRight: wp(5.6),
  },

  leagueDetailsContainer: {},

  leagueAcronymText: {
    fontSize: FONTSIZE.large,
    lineHeight: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },

  leagueNameText: {
    fontSize: FONTSIZE.large,
    lineHeight: FONTSIZE.large,
    fontFamily: "RobotoBold",
    marginBottom: -10,
  },

  leagueDivisionDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp(2.6),
  },

  divisionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  divisionNameText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoBold",
    marginRight: wp(2.3),
  },

  switchButtonText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
    color: "#c42414",
  },

  dateText: {
    fontSize: FONTSIZE.small_7,
    fontFamily: "RobotoRegular",
    textTransform: "uppercase",
  },

  confirmContainer: {
    paddingHorizontal: wp(9.3),
    marginTop: "auto",
    marginBottom: hp(5.5),
  },

  confirmButton: {
    borderRadius: 11,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(1.1),
  },

  confirmText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
    color: "white",
  },
});

export default styles;
