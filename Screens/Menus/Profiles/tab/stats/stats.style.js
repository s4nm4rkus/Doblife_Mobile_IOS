import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, FONT, SIZES, SHADOWS, FONTSIZE } from "../../../../../constants/theme";

const styles = StyleSheet.create({
  container: {
	},

  allTimeStatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(28.5),
    height: hp(12.7),
    borderRadius: 11,
    backgroundColor: 'white',
    marginRight: wp(4.75),
  },

  leaguePointsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(59.5),
    height: hp(12.7),
    borderRadius: 11,
    backgroundColor: 'white',
  },
  
  statNumberText: {
    fontFamily: 'RobotoBold',
    fontSize: FONTSIZE.xx_large,
    color: '#c42414'
  },

  statNameText: {
    fontFamily: 'RobotoCondensed',
    fontSize: FONTSIZE.small_7,
  },

  playerStatsContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(5.1),
    marginTop: hp(3)
  },

  playerDetailsContainer: {
    marginHorizontal: wp(5.1),
    marginTop: hp(2.2),
  },

  leagueAcronymText: {
    fontFamily: 'RobotoCondensed',
    fontSize: FONTSIZE.button,
    color: '#040912',
  },

  leagueNameText: {
    fontSize: FONTSIZE.large,
    fontFamily: 'RobotoCondensedBold',
  },

  leagueNumberText: {
    fontFamily: 'RobotoBold',
    fontSize: FONTSIZE.xx_large,
    color: '#c42414'
  },

  leaguePointsText: {
    fontFamily: 'RobotoCondensed',
    fontSize: FONTSIZE.small_7,
  },
  
});

export default styles;