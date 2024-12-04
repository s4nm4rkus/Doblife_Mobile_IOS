import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, SIZES, SHADOWS, FONTSIZE } from "../../../../constants/theme";

const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)'
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		...SHADOWS.large
	},
	modalContent: {
		width: wp(95),
		minHeight: 5,
		backgroundColor: 'white',
		borderRadius: 10,
		elevation: 5
	},
	chooseDivisionContainer: {
		justifyContent: 'center', 
		alignItems: 'center',
		position: 'relative',
		marginTop: hp(3.2),
	},

	chooseDivisionText: {
		fontFamily: 'RobotoBold',
		fontSize: FONTSIZE.large_2,
		color: '#c42414',
		textAlign: 'center',
	},

	xMarkContainer: {
		position: 'absolute',
		right: wp(4.8),
		bottom: hp(2.35),
	},
	modalButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: wp(6.4),
		marginTop: hp(5.2),
		marginBottom: hp(5),
	},
	modalButton: {
		height: hp(4.6),
		justifyContent: 'center',
		borderRadius: 5.5,
	},
	yesButton: {
		width: '100%',
		backgroundColor: '#c42414',
	},
	yesButtonText:{
		color: 'white',
		textAlign: 'center',
		fontFamily: 'RobotoBold',
		fontSize: FONTSIZE.button
	},

	inputContainer: {
    paddingHorizontal: wp(7.9),
		marginTop: hp(4.65)
  },

	inputLabelText: {
    fontFamily: 'RobotoRegular',
		fontSize: FONTSIZE.semi_medium,
    marginBottom: hp(1.3),
  },

	dropdown: {
		height: hp(4),
    backgroundColor: 'white',
    borderRadius: 5.5,
		paddingLeft: wp(3.7),
		paddingRight: wp(3),
		borderWidth: 1,
		borderColor: '#aaa',
  },
  item: {
    padding: 17,
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
    fontFamily: 'RobotoRegular',
    fontSize: FONTSIZE.large,
  },
  selectedTextStyle: {
    fontSize: FONTSIZE.large,
		fontFamily: 'RobotoBold',
  },
  iconStyle: {
    width: hp(3),
    height: hp(3),
  },
  inputSearchStyle: {
    height: hp(4),
    fontSize: FONTSIZE.large,
		fontFamily: 'RobotoRegular',
  },
});

export default styles;
