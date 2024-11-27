import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, FONTSIZE, SHADOWS, SIZES } from "../../../constants/theme";
import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#ebeded'
	},
	searchContainer:{
		width: wp('100%'),
		height: hp('10%'),
		alignItems: 'center',
		justifyContent: 'center'
	},
	todayLeagueContainer:{
		width: wp('100%'),
		minHeight: hp('25%'),
	},
	upcomingLeagueContainer:{
		flex: 1,
	},
	headerContainer:{
		width: wp('100%'),
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: SIZES.large,
	},
	headerTitle:{
		fontWeight: 'bold',
		fontSize: FONTSIZE.x_large,
	},

	cardContainer:{
		height: hp(9),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
	},
	teamImage:{
		width: '30%',
		height: '80%',
		borderRadius: 100
	},
	feedContentRightDivider:{
		width: '100%',
		height: '20%',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row'
	},
	dividerRight:{
		width: '40%',
		height: 1.5,
	},
	dividerText:{
		fontFamily: FONT.bold,
		fontSize: SIZES.large,
		fontStyle: 'italic',
	},
	dividerLeft:{
		width: '40%',
		height: 1.5,
	},
	feedContentRightLower:{
		width: '100%',
		height: '40%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 10
	},
	feedInfoContainer:{
		width: '100%',
		height: '28%',
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignItems: 'center',
		gap: 20,
		backgroundColor: '#ebeded',
	},
	sponsorImage:{
		width: '17%',
		height: '80%',
		borderRadius: 500,
	},
	sponsorInfo:{
		width: '83%',
		height: '80%',
		justifyContent: 'center',
	},
	footerLeagueInfoText:{
		fontFamily: FONT.bold,
		fontSize: SIZES.semi_small,
	},
	footerSponsorInfoText:{
		fontFamily: FONT.regular,
		fontSize: SIZES.xSmall,
	},

	onGoingMatchesCardContainer: {
		width: wp('40%'),
    height: hp('18%'),
    borderRadius: SIZES.medium,
    overflow: 'hidden',
    backgroundColor: COLORS.clr_light_white,
    ...SHADOWS.medium,
  },

	onGoingMatchesCardWrapper: {
		flex: 1,
		padding: 15,
  },

	content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
		paddingHorizontal: '10@s'
  },

	teamNameContainer: {
    flex: 1,
		marginLeft: '10@s',
  },

	teamText: {
    fontSize: FONTSIZE.modal_button,
    fontWeight: 'bold',
  },

	logoContainer: {
    position: 'relative',
  },

  quarterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  ordinalNumberText: {
    fontSize: FONTSIZE.medium,
    lineHeight: FONTSIZE.medium,
  },

  quarterText: {
    fontSize: FONTSIZE.small_1,
    lineHeight: FONTSIZE.small_1,
  },

  scoreText: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -22,
    fontWeight: 'bold',
    fontSize: FONTSIZE.semi_large,
    color: '#c42414'
  },

  logo: {
    width: hp(4.6),
    height: hp(4.6),
    borderRadius: 200,
  },

  teamLogo: {
    width: hp(6),
    height: hp(6),
    borderRadius: 200,
  },

	leagueName: {
		fontWeight: 'bold',
    fontSize: FONTSIZE.semi_large,
	},

	leagueContainer: {
		flex: 1,
	},

	teamsContainer: {
		flex: 1,
		gap: 20
	},
	
	teamContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	teamNameText: {
		fontWeight: 'bold',
		fontSize: FONTSIZE.label,
		marginLeft: 15,
	},

	leagueNameText: {
		fontWeight: 'bold',
		fontSize: FONTSIZE.large_4,
		lineHeight: FONTSIZE.large_4,
	},

	dateText: {
		fontSize: FONTSIZE.semi_large,
		marginTop: 'auto',
		fontWeight: 'bold',
	},

	footerCardWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},

	profileImage: {
		width: hp(6),
    height: hp(6),
    borderRadius: 200,
	},

	leagueDateInfoContainer: {
		marginLeft: 10
	},

	leagueInfoText: {
		fontWeight: 'bold',
		fontSize: FONTSIZE.label,
	},

	leagueDateText: {
		fontSize: FONTSIZE.semi_medium,
	},

	seeAllContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	chevronRight: {
		color: '#c42414',
	},

	seeAllText: {
		fontWeight: 'bold',
		fontSize: FONTSIZE.x_large,
		marginRight: 5
	},

	popularTeamsContainer: {
		justifyContent: 'space-around',
    paddingHorizontal: 10, // Adjust padding as needed
    paddingTop: 10, // Adjust padding as needed
		paddingBottom: 50
	},

	column: {
    flex: 1,
    marginHorizontal: 5, // Adjust margin as needed
    marginBottom: 10, // Adjust margin between rows
  },
});

export default styles;