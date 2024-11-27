import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./teamCard.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  setLeagueParticipantID,
  setTeam,
} from "../../../../features/myTeamsSelectTeam/myTeamsSelectTeamSlice";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const TeamCard = ({ navigation, data, bottomSheetModalRef }) => {
  const dispatch = useDispatch();

  const handleLeaveTeam = (leagueParticipantID) => {
    console.log(leagueParticipantID);
    // dispatch(setIsLeaveTeamOpen(true));
    // dispatch(setTeamName(data.name));
    // dispatch(setLeagueParticipantsID(leagueParticipantID));
    // bottomSheetModalRef.current?.present();
  };

  const handleSelectTeam = (item) => {
    const teamOwner = item.league_participants[0].team_rosters.find(
      (roster) => roster.team_role_id === 1
    );
    dispatch(setLeagueParticipantID(item.league_participants[0].id));
    dispatch(
      setTeam({
        id: item.id,
        name: item.name,
        code: item.code,
        image: item.default_team_profile_pic?.image,
        team_owner: `${teamOwner?.profile.lastname} ${teamOwner?.profile.firstname}`,
        league_participant_ids: item.league_participants.map(
          (participant) => participant.id
        ),
      })
    );
    navigation.navigate("TeamSetup");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => handleSelectTeam(data)}
      >
        <View style={styles.content}>
          {data.default_team_profile_pic ? (
            <Image
              source={{ uri: data.default_team_profile_pic.image }}
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

          <View style={styles.teamNameContainer}>
            <Text style={styles.teamText}>{data.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TeamCard;
