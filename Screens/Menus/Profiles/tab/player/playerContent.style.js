import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONTSIZE, SIZES } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  playerStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 11,
    paddingTop: 11,
    paddingTop: hp(1.3),
    paddingBottom: hp(1.43),
    marginTop: hp(2.6),
    marginHorizontal: wp(5.1),
    marginBottom: hp(1.95),
  },

  statusContainer: {
    marginLeft: wp(4.3),
  },

  statusText: {
    fontSize: FONTSIZE.large,
    fontFamily: "RobotoCondensedBold",
    color: "white",
  },

  inactiveContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: wp(2.7),
  },

  inactiveText: {
    color: "white",
    fontSize: FONTSIZE.small,
    marginRight: wp(3.1),
  },

  playerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: wp(5.6),
    marginRight: wp(5.1),
  },

  playerButtonText: {
    fontSize: FONTSIZE.large,
  },

  playerActiveButtonText: (name, activeTab) => ({
    color: name === activeTab ? "#c42414" : "black",
    borderBottomColor: name === activeTab ? "#c42414" : "black",
    fontFamily: name === activeTab ? "RobotoCondensedBold" : "RobotoCondensed",
    borderBottomWidth: name === activeTab ? 3 : 0,
  }),

  outer: {
    width: wp(7.2),
    height: hp(2),
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp(0.5),
  },

  inner: {
    width: wp(3.4),
    height: hp(1.6),
    borderRadius: 15,
    backgroundColor: "#7c0b00",
  },
});

export default styles;
