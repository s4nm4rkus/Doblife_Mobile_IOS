import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FONTSIZE } from "../../../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    borderRadius: 11,
    backgroundColor: 'white',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: hp(1.8),
    paddingBottom: hp(0.85),
    paddingLeft: wp(4),
    paddingRight: wp(6.3),
    borderBottomWidth: 1,
    borderColor: 'rgba(170, 170, 170, 0.5)'
  },

  playerDetailsText: {
    fontFamily: 'RobotoCondensedBold',
    fontSize: FONTSIZE.large,
  },

  editContainer: {
    flexDirection: 'row', 
    alignItems: 'center'
  },

  editText: {
    fontSize: FONTSIZE.button,
    color: '#040912',
    fontFamily: 'RobotoCondensed',
  },

  detailsContainer: {
    paddingLeft: wp(4),
    paddingRight: wp(4.4),
    paddingTop: hp(1.6),
    paddingBottom: hp(2.6),
  },

  details: {
    borderBottomWidth: 1,
    borderColor: 'rgba(170, 170, 170, 0.5)',
    marginBottom: hp(1.45),
    paddingBottom: hp(1.8)
  },

  detailsLabelText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: 'RobotoCondensed',
    color: '#040912',
    marginBottom: hp(1.45),
  },

  detailsText:{
    fontFamily: 'RobotoCondensedBold',
    fontSize: FONTSIZE.semi_x_large,
  },

  nullDetailsText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoCondensed',
    color: '#aaa',
  },
  
});

export default styles;
