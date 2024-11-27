import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(5.4),
  },

  noNotificationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(7.9),
  },

  noNotificationListedText: {
    fontSize: FONTSIZE.large,
    fontFamily: " RobotoRegular",
    color: "#aaa",
  },

  notificationWrapper: {
    flexDirection: "row",
    gap: wp(4.2),
  },

  notificationTextContainer: {
    paddingRight: wp(10),
  },

  notificationTextDescription: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },

  teamNameText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoBold",
  },

  acceptedText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoBold",
  },

  textAndButtonsContainer: {
    flex: 1,
    position: "relative",
    marginTop: hp(0.75),
    gap: hp(2.45),
  },

  notificationAndButtonsContainer: {
    flex: 1,
    position: "relative",
    gap: hp(2.45),
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: wp(3.1),
  },

  acceptButtonContainer: {
    flex: 1,
    borderRadius: 11,
    backgroundColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  declineButtonContainer: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1.1,
    height: hp(4.95),
    borderColor: "#c42414",
    justifyContent: "center",
    alignItems: "center",
  },

  acceptText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  declineText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoCondensedBold",
    color: "#c42414",
  },

  accountSettingsTextContainer: {
    marginTop: hp(2.75),
  },

  accountSettingsText: {
    fontSize: FONTSIZE.semi_x_large,
    fontFamily: "RobotoRegular",
  },

  notificationContainer: {
    marginTop: hp(2.75),
    borderRadius: 11,
    elevation: 5,
    paddingHorizontal: wp(4.4),
    paddingTop: hp(2),
    paddingBottom: hp(1.5),
    backgroundColor: "white",
  },

  xMarkContainer: {
    position: "absolute",
    right: 0,
    top: hp(-1),
  },

  teamLogoContainer: {
    width: hp(5.8),
    height: hp(5.8),
    justifyContent: "center",
    borderRadius: 200,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
  },

  teamLogo: {
    width: hp(5),
    height: hp(5),
    borderRadius: 200,
  },

  envelopeContainer: {},
});

export default styles;
