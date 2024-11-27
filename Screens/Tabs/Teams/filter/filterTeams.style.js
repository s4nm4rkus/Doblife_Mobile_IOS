import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerContainer: {
    marginTop: hp(3.75),
    marginBottom: hp(3.1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  arrowLeftContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeftButton: {
    marginLeft: wp(5.6)
  },
  filterText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoBold',
    marginLeft: wp(4),
  },
  headerButton: {
    marginRight: wp(6.7),
  },
  headerText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoBold',
  },
  inputsContainer: {
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabelText: {
    fontFamily: 'RobotoRegular',
    fontSize: FONTSIZE.label,
    marginBottom: hp(0.85),
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#bcbcbc',
    borderWidth: 1,
    height: "100%",
    borderRadius: 5,
  },
  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: 'absolute',
    paddingHorizontal: SIZES.medium
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: wp(3.5),
  },

  dropdown: {
    height: hp(3.95),
    backgroundColor: 'white',
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: wp(3.7),
  },
  item: {
    paddingHorizontal: wp(4.3),
    paddingVertical: hp(0.45),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
  },
  placeholderStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
  },
  selectedTextStyle: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
  },
  iconStyle: {
    width: hp(3.15),
    height: hp(3.15),
  },
  inputSearchStyle: {
    height: hp(4.75),
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
  },

  inputMinMaxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  popoverContainer: {
    height: hp(3.95),
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: '#bcbcbc',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },

  popoverText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
    paddingLeft: wp(3.7),
  },

  popoverPlaceholderText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
    paddingLeft: wp(3.7),
    opacity: 0.5
  },
});

export default styles;
