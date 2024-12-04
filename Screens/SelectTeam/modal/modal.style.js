import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, SIZES, SHADOWS, FONTSIZE } from "../../../constants/theme";

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
		height: 260,
		padding: 20,
		backgroundColor: COLORS.clr_light_white,
		borderRadius: 10,
		elevation: 5
	},
	modalText: {
		marginTop: 5,
		fontFamily: FONT.bold,
		fontWeight: 'bold',
		fontSize: FONTSIZE.large_1,
		color: '#c42414',
		textAlign: 'center',
	},
	modalButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 30
	},
	modalButton: {
		paddingHorizontal: 50,
		paddingVertical: 10,
		borderRadius: 5,
	},
	continueButton: {
		width: '100%',
		backgroundColor: '#c42414',
	},
	continueButtonText:{
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontFamily: FONT.regular
	},
	modalButtonText: {
		color: 'white',
		textAlign: 'center',
		fontFamily: FONT.regular,
	},
});

export default styles;
