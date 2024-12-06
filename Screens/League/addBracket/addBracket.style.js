import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  FONT,
  FONTSIZE,
  HEIGHT,
  SIZES,
} from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.clr_light_white,
  },

  bracketNameContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  inputLabelText: {
    fontSize: FONTSIZE.label,
    marginBottom: 10,
  },
  heightInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#aaaaaa",
    borderWidth: 1,
    height: "100%",
    borderRadius: 10,
  },
  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingHorizontal: SIZES.medium,
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
  },

  teamsContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  teamsCardContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },

  selectedTeamsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  teamsText: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
  },

  bracketNameText: {
    fontSize: FONTSIZE.semi_large,
    marginBottom: 10,
    fontWeight: "bold",
  },

  selectedTeamsText: {
    fontSize: FONTSIZE.small,
    marginRight: 5,
    opacity: 0.5,
  },

  asterisk: {
    color: "#81140A",
  },

  searchContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  searchIcon: {
    marginLeft: "auto",
    marginRight: 10,
    opacity: 0.5,
  },

  selectTeamsContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
  },

  participantsContainer: {
    flexDirection: "row",
  },

  teamNameValueContainer: {
    flexDirection: "column",
  },

  teamParticipantContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  logo: {
    width: hp(5),
    height: hp(5),
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

  badgeContainer: {
    position: "relative",
  },
  badge: {
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -5,
    right: -5,
  },
  badgeText: {
    color: "white",
    fontSize: FONTSIZE.small_2,
  },

  errorText: {
    fontSize: FONTSIZE.label,
    color: "red",
  },
});

export default styles;
