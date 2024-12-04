import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FONTSIZE } from "../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: wp(45),
  },

  cardContainer: {
    height: hp(22),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  content: {
    flex: 1,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  teamNameContainer: {
    flex: 1,
    padding: hp(2),
  },

  joinContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c42414',
    paddingVertical: hp(1.5),
  },

  teamNameText: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.modal_button,
  },

  openingDateText: {
    fontSize: FONTSIZE.small_5,
  },

  dateText: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.modal_button,
  },

  joinText: {
    fontSize: FONTSIZE.modal_button,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
