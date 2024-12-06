import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.clr_light_white,
  },

  titleContainer: {
    marginHorizontal: 25,
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  teamsContainer: {
    paddingHorizontal: 25,
    flex: 1,
  },

  teamsCardContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
  },

  selectedTeamsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  teamsText: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  titleText: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  selectedTeamsText: {
    fontSize: FONTSIZE.small,
    marginRight: 5,
    opacity: 0.5,
  },

  selectTeamsContainer: {
    flex: 1,
  },

  participantsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  teamParticipantContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  removeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  removeIcon: {
    color: "#C52818",
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 200,
    marginRight: 15,
  },

  teamAcronymValueText: {
    fontWeight: "bold",
    fontSize: FONTSIZE.label,
  },

  teamNameValueText: {
    fontSize: FONTSIZE.label,
  },

  editText: {
    fontSize: FONTSIZE.medium,
    color: "#c42414",
  },
});

export default styles;
