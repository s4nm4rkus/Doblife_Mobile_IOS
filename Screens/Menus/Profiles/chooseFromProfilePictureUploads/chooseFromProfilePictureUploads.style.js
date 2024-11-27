import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: wp(5.4),
  },

  imagesTextContainer: {
    marginTop: hp(4.78),
  },

  imagesText: {
    fontSize: FONTSIZE.large_2,
    fontFamily: "RobotoBold",
  },

  scrollView: {
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    padding: 10,
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 16,
  },

  teamLogoContainer: {
    elevation: 3,
    borderRadius: 11,
    width: hp(9.3),
    height: hp(9.3),
    backgroundColor: "white",
  },

  teamImage: {
    width: hp(9.3),
    height: hp(9.3),
    borderRadius: 11,
  },
});

export default styles;
