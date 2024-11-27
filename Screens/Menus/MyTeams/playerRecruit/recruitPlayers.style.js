import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE, HEIGHT } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: hp(2.5),
    marginLeft: wp(5.3),
    marginRight: wp(5.5),
  },

  arrowLeftContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wp(5.25),
  },

  filterText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoBold",
  },
  headerButton: {},
  headerText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoBold",
  },
  inputContainer: {
    paddingLeft: wp(5.3),
    paddingRight: wp(4.5),
    paddingVertical: hp(2.9),
  },
  textInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: HEIGHT.medium_height,
  },

  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5.5,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    height: "100%",
  },

  inInput: {
    fontSize: 17.6,
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoRegular",
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingLeft: wp(4.7),
  },
  searchIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: wp(3.2),
  },

  playerSeparator: {
    height: hp(1.4),
  },

  playerContainer: {
    flex: 1,
    paddingLeft: wp(4.5),
    marginRight: wp(5.5),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  playerDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    gap: wp(6),
  },

  details: {
    // marginVertical: 10
  },

  nameText: {
    fontFamily: "RobotoBold",
    fontSize: FONTSIZE.large,
  },

  detailText: {
    fontSize: FONTSIZE.button,
    fontFamily: "RobotoLight",
  },

  valueText: {
    fontFamily: "RobotoRegular",
    fontSize: FONTSIZE.button,
    marginRight: 11.9,
  },

  teamImage: {
    width: hp(5),
    height: hp(5),
    borderRadius: 200,
  },

  positionContainer: {
    width: "33%",
    flexDirection: "row",
  },

  heightContainer: {
    width: "33%",
    flexDirection: "row",
  },

  recruitContainer: {
    flexDirection: "row",
  },

  recruitText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: "RobotoRegular",
  },

  contentContainer: {
    paddingHorizontal: wp(6.9),
    marginBottom: hp(2.1),
  },

  selectedPlayersContainer: {
    height: hp(8),
  },

  selectedPlayerContainer: {},

  selectedPlayerWrapper: {
    width: hp(6),
    height: hp(6),
    position: "relative",
  },

  selectedPlayerImageWrapper: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedPlayerImage: {
    width: hp(4),
    height: hp(4),
    borderRadius: 200,
  },

  iconWrapper: {
    position: "absolute",
    top: -2,
    right: 0,
  },

  icon: {
    color: "#ff0000",
  },

  playerNameText: {
    alignSelf: "center",
    width: wp(9.1),
  },

  selectedPlayerSeparator: {
    width: wp(4),
  },
});

export default styles;
