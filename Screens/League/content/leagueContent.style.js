import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONTSIZE, SIZES } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(2.4),
    backgroundColor: "#ebeded",
  },
  playerStatusContainer: {
    height: hp(5),
    marginTop: SIZES.semi_small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.semi_small,
    borderRadius: 10,
    marginBottom: SIZES.semi_small,
    backgroundColor: "white",
  },

  statusContainer: {
    marginLeft: 15,
  },

  statusText: {
    fontSize: FONTSIZE.semi_large,
    fontWeight: "bold",
    color: COLORS.clr_light_white,
  },

  inactiveContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  inactiveText: {
    color: COLORS.clr_light_white,
    fontSize: FONTSIZE.small,
  },

  tabButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.semi_small,
    marginHorizontal: SIZES.large,
  },

  tabsButtonContainer: {
    marginBottom: 19.2,
    marginBottom: hp(2.2),
  },

  tabButtonContainer: {
    marginHorizontal: wp(6.9),
  },

  tabButtonText: {
    fontSize: FONTSIZE.medium_1,
    fontFamily: "RobotoBold",
  },

  playerStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.semi_small,
    marginBottom: SIZES.semi_small,
  },

  playerDetailsContainer: {
    marginHorizontal: SIZES.semi_small,
    marginBottom: SIZES.semi_small,
  },

  activeTabButtonText: (name, activeTab, isOwner) => ({
    fontWeight: name === activeTab ? "bold" : "regular",
    borderBottomColor: name === activeTab ? "#c42414" : "black",
    color: name === activeTab ? "#c42414" : isOwner ? "black" : "#aaa",
    borderBottomWidth: name === activeTab ? 3 : 0,
  }),
});

export default styles;
