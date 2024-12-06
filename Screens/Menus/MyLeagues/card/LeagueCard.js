import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./leagueCard.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS, FONT, SIZES } from "../../../../constants/theme";
import { checkImageUrl } from "../../../../utils/utils";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  setIsLeaveTeamOpen,
  setLeagueParticipantsID,
  setTeamName,
} from "../../../../features/myTeamsLeaveTeam/myTeamsLeaveTeamSlice";
import { setLeagueID } from "../../../../features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice";
import { setIsJoin } from "../../../../features/league/leagueSlice";
import { setLeagueSeasonCategory } from "../../../../features/selectDivision/selectDivisionSlice";
import { setLeagueMatchups } from "../../../../features/selectMatchups/selectMatchupsSlice";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const LeagueCard = ({ navigation, data, index, deleteLeague, ownerID }) => {
  const dispatch = useDispatch();

  const handleLeaveTeam = (leagueParticipantID) => {
    dispatch(setIsLeaveTeamOpen(true));
    dispatch(setTeamName(data.team_profile.name));
    dispatch(setLeagueParticipantsID(leagueParticipantID));
  };

  const handleGoToLeague = (data) => {
    dispatch(setLeagueMatchups({}));
    dispatch(setLeagueSeasonCategory(null));
    dispatch(setIsJoin(false));
    dispatch(setLeagueID(data.id));
    navigation.navigate("League");
  };

  const renderDetails = (data) => {
    const matchup =
      data.league_season[0].league_season_categories[0].league_matchups;

    if (matchup.length != 0) {
      return (
        <View style={styles.matchContainer}>
          <View style={styles.logoContainer}>
            {matchup[0].team_a.team_profile.default_team_profile_pic ? (
              <Image
                source={{
                  uri: matchup[0].team_a.team_profile.default_team_profile_pic
                    .image,
                }}
                resizeMode="contain"
                style={styles.logo}
              />
            ) : (
              <Image
                source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            )}
            <Text style={styles.scoreText}>
              {matchup[0]?.match_stats_a?.points}
            </Text>
          </View>
          <View style={styles.quarterContainer}>
            <Text style={styles.ordinalNumberText}>
              {matchup[0]?.match_stats_a?.period}
            </Text>
            <Text style={styles.quarterText}>QTR</Text>
          </View>
          <View style={styles.logoContainer}>
            {matchup[0].league_participant_b.team_profile
              .default_team_profile_pic ? (
              <Image
                source={{
                  uri: matchup[0].league_participant_b.team_profile
                    .default_team_profile_pic.image,
                }}
                resizeMode="contain"
                style={styles.logo}
              />
            ) : (
              <Image
                source={require("../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                resizeMode="contain"
                style={styles.logo}
              />
            )}
            <Text style={styles.scoreText}>
              {matchup[0]?.match_stats_b?.points}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.noMatchesContainer}>
        <Text style={styles.noMatchesText}>No Matches yet</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleGoToLeague(data)}
      >
        <View style={styles.content}>
          <View style={styles.leagueContainer}>
            <View>
              <Text style={styles.leagueNameText}>{data.name}</Text>
            </View>
          </View>
          {/* {data.owner == ownerID ? (
            <View style={{flex: 0, alignSelf: 'flex-start'}}>
              <TouchableOpacity
                onPress={() => deleteLeague(data.id)}
              >
                <Feather
                  name='more-vertical'
                  size={hp(2.5)}
                  style={{ fontWeight: 'bold' }}
                />
              </TouchableOpacity>
            </View>
          ) : null} */}
        </View>
        <View style={styles.content}>
          <View style={styles.detailContainer}>{renderDetails(data)}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LeagueCard;
