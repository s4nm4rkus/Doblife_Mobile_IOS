import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, FONTSIZE, SHADOWS, SIZES } from "../../../constants/theme";
import { ScaledSheet } from "react-native-size-matters";

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#ebeded'
	},
	upcomingLeagueContainer:{
		flex: 1,
	},

	cardContainer:{
		marginHorizontal: wp(4.2),
    marginBottom: hp(0.8),
    paddingHorizontal: wp(4.2),
    paddingTop: hp(1.35),
    paddingBottom: hp(2.2),
    borderRadius: 11,
    backgroundColor: '#fff'
	},

	content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3.1),
  },

	playerImageContainer: {
		width: hp(6),
		height: hp(6),
		borderRadius: 200,
		backgroundColor: 'white',
		elevation: 5,
	},

  profileImage: {
    width: hp(6),
    height: hp(6),
    borderRadius: 200,
  },

	leagueName: {
		fontWeight: 'bold',
    fontSize: FONTSIZE.semi_large,
	},

	playerInfoContainer: {
		flex: 1,
	},

	playerDetailsContainer: {
		flexDirection: 'row',
	},

	nameText: {
    fontSize: FONTSIZE.semi_x_large,
		fontWeight: 'bold',
  },

	detailText:{
    opacity: 0.5,
    fontSize: FONTSIZE.medium
  },

	valueText:{
    fontSize: FONTSIZE.medium,
		fontWeight: 'bold',
  },

	playerDetailsTextContainer: {
    flex: 1,
    gap: hp(0.6)
  },


  playerAttributesTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

	playerNameText: {
		fontSize: FONTSIZE.large,
    fontFamily: 'RobotoCondensed',
	},

  attributeText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: 'RobotoRegular',
    color: '#aaa'
  },

  attributeValueText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: 'RobotoCondensed',
    color: '#040912'
  },

	popularTeamsContainer: {
    paddingTop: 10,
		paddingBottom: 50
	},

});

export default styles;