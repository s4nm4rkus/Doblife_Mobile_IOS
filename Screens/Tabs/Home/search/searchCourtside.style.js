import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, FONT, FONTSIZE, SIZES } from "../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  recentSearchesContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabelText: {
    fontWeight: 'bold',
    fontSize: FONTSIZE.label,
    marginBottom: 10,
  },
  heightInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    height: "100%",
  },
  inInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    position: 'absolute',
    paddingHorizontal: SIZES.medium
  },
  measureText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 20
  },
  dropdown: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },

  searchResultContainer: {
    flex: 1,
    marginHorizontal: wp(5.3)
  },

  searchResultTextContainer: {
    marginTop: hp(2.5),
  },

  searchResultText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoRegular'
  },

  playersCardContainer: {
    backgroundColor: '#efefef',
    borderRadius: 11,
    marginTop: hp(1.95),
  },

  playerCardsContainer: {
    marginTop: hp(1.1),
  },

  playersTextContainer: {
    marginLeft: wp(3.7),
    marginTop: hp(1.35),
  },

  playersText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoBold'
  },

  playerCardContainer: {
    marginHorizontal: wp(2.6),
    marginBottom: hp(0.8),
    paddingLeft: wp(6.1),
    paddingVertical: hp(1),
    borderRadius: 11,
    backgroundColor: '#fff'
  },

  playerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3.1),
  },

  playerImageContainer: {
		width: hp(5.9),
		height: hp(5.9),
    alignSelf: 'flex-start',
		borderRadius: 200,
		backgroundColor: 'white',
		elevation: 5,
	},

  playerProfileImage: {
    width: hp(5.9),
    height: hp(5.9),
    borderRadius: 200,
  },

  playerDetailsTextContainer: {
    flex: 1,
    gap: hp(0.6)
  },

  playerNameText: {
		fontSize: FONTSIZE.large,
    fontFamily: 'RobotoBold',
	},

  playerAttributesTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  attributeText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: 'RobotoRegular',
    color: '#aaa'
  },

  attributeValueText: {
    fontSize: FONTSIZE.semi_medium,
    fontFamily: 'RobotoBold',
    color: '#040912'
  },

  seeAllButtonContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    marginBottom: hp(1.3),
		paddingHorizontal: wp(2.6)
  },

  seeAllButton: {
    flex: 1,
    borderRadius: 11,
		backgroundColor: '#c42414',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(1.1),
  },

  seeAllText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoRegular',
		color: 'white',
  },

  leaguesCardContainer: {
    backgroundColor: '#efefef',
    borderRadius: 11,
    marginTop: hp(1.95),
  },

  leagueCardsContainer: {
    marginTop: hp(1.1),
  },

  leaguesTextContainer: {
    marginLeft: wp(3.7),
    marginTop: hp(1.35),
  },

  leaguesText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoBold'
  },

  leagueCardContainer: {
    marginHorizontal: wp(2.6),
    marginBottom: hp(0.8),
    paddingHorizontal: wp(4.4),
    paddingTop: hp(1.6),
    paddingBottom: hp(1.8),
    borderRadius: 11,
    backgroundColor: '#fff'
  },

  leagueAcronymText: {
    fontSize: FONTSIZE.button,
    lineHeight: FONTSIZE.button,
    fontFamily: 'RobotoCondensed',
    color: '#040912'
  },

  leagueNameText: {
    fontSize: FONTSIZE.large,
    lineHeight: FONTSIZE.large,
    fontFamily: 'RobotoBold'
  },

  teamsCardContainer: {
    backgroundColor: '#efefef',
    borderRadius: 11,
    marginTop: hp(1.95),
  },

  teamCardsContainer: {
    marginTop: hp(1.1),
  },

  teamsTextContainer: {
    marginLeft: wp(3.7),
    marginTop: hp(1.35),
  },

  teamsText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoBold'
  },

  teamCardContainer: {
    marginHorizontal: wp(2.6),
    marginBottom: hp(0.8),
    paddingHorizontal: wp(4.4),
    paddingVertical: hp(1.1),
    borderRadius: 11,
    backgroundColor: '#fff'
  },

  teamContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3.1),
  },

  teamImageContainer: {
		width: hp(5.9),
		height: hp(5.9),
    alignSelf: 'flex-start',
		borderRadius: 200,
		backgroundColor: 'white',
		elevation: 5,
	},

  teamProfileImage: {
    width: hp(5.9),
    height: hp(5.9),
    borderRadius: 200,
  },

  teamDetailsTextContainer: {
    flex: 1,
    gap: hp(0.6)
  },

  teamAcronymText: {
    fontSize: FONTSIZE.button,
    fontFamily: 'RobotoCondensed',
  },

  teamNameText: {
		fontSize: FONTSIZE.large,
    fontFamily: 'RobotoBold',
	},
});

export default styles;
