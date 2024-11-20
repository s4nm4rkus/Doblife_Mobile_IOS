import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: 'row',
  },
  arrowLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeftButton: {
    marginLeft: wp(3)
  },
  arrowRightButton: {
    marginRight: wp(3)
  },
  titleText: {
    flex: 1,
    textAlign: 'center', // Centers text within its container
    fontSize: FONTSIZE.semi_large,
    fontFamily: 'RobotoBold'
  },
});

export default styles;
