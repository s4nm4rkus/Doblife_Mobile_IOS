import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeded",
  },
  teamsContainer: {
    flex: 1,
  },

  contentContainer: {
    paddingHorizontal: wp(4.95),
    paddingTop: hp(2.7),
    paddingBottom: 20,
  },
});

export default styles;
