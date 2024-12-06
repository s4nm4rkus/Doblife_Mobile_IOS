import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardContainer: {
    marginHorizontal: wp(5),
    marginBottom: hp(1.3),
  },
});

export default styles;
