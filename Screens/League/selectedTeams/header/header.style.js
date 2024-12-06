import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.clr_light_white,
  },
  arrowLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeftButton: {
    marginLeft: 15
  },
  editPlayerDetailsText: {
    fontSize: FONTSIZE.detail,
    marginLeft: 15,
  },
  headerButton: {
    marginRight: 20
  },
  headerText: {
    fontSize: FONTSIZE.detail,
    marginLeft: 15,
    fontWeight: 'bold',
    color: '#c42414',
  },
});

export default styles;
