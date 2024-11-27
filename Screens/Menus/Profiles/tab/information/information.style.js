import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1
	},

  cardContainer: {
    marginHorizontal: wp(5.1),
    marginTop: hp(2.2),
  },
});

export default styles;