import { useState, useEffect, useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  RefreshControl,
  ActivityIndicator,
  FlatList,
} from "react-native";
import styles from "./currentTeamsCard.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../../../../../context/AuthContext";
import { checkImageUrl } from "../../../../../../../utils/utils";
import ModalComponent from "../../modal/ModalComponent";
import { ScrollView } from "react-native-gesture-handler";
import { useProfileData } from "../../../../../../../hooks/useProfileData";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  deleteTeamRoster,
  fetchPlayerCurrentTeams,
} from "../../../../../../../api/teamRosterApi";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const CurrentTeamsCard = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { userToken, logout } = useContext(AuthContext);
  const [leagueParticipantsID, setLeagueParticipantsID] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [currentTeams, setCurrentTeams] = useState([]);
  const [page, setPage] = useState(1);

  const { mutateAsync: deleteTeamRosterMutation } = useMutation({
    mutationFn: deleteTeamRoster,
    onSuccess: (data) => {
      handleFetchPlayerCurrentTeams();
    },
  });

  const { mutateAsync: fetchPlayerCurrentTeamsMutation } = useMutation({
    mutationFn: fetchPlayerCurrentTeams,
    onSuccess: (data) => {
      setCurrentTeams((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const onRefresh = async () => {
    setCurrentTeams([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchPlayerCurrentTeams();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchPlayerCurrentTeams = async () => {
    const params = {
      page: page,
    };

    try {
      await fetchPlayerCurrentTeamsMutation({ userToken, params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleLeaveTeam = async () => {
    const params = {
      league_participant_id: leagueParticipantsID,
    };

    try {
      await deleteTeamRosterMutation({ userToken, params });
      setShowCancelModal(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const renderEmptyContainer = () => (
    <View style={styles.noCurrentTeamsContainer}>
      <Text style={styles.noCurrentTeamsText}>
        Your teams will be shown here
      </Text>
    </View>
  );

  const renderListItem = ({ item }) => (
    <View style={styles.details}>
      <View style={styles.detailContainer}>
        <View style={styles.detailWrapper}>
          <View style={styles.imageContainer}>
            {item.league_participant.team_profile.default_team_profile_pic ? (
              <Image
                source={{
                  uri: item.league_participant.team_profile
                    .default_team_profile_pic.image,
                }}
                resizeMode="contain"
                style={styles.teamImage}
              />
            ) : (
              <Image
                source={require("../../../../../../../assets/teamPlaceholders/team-placeholder-04.png")}
                resizeMode="contain"
                style={styles.teamImage}
              />
            )}
          </View>
          <View>
            <Text style={styles.teamNameText}>
              {item.league_participant.team_profile.name}
            </Text>
            <Text style={styles.positionText}>POS : SG | C</Text>
          </View>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={() => {
              setLeagueParticipantsID(item.league_participant.id);
              setSelectedTeam(item.league_participant.team_profile.name);
              setShowCancelModal(true);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} size={hp(2.4)} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  useEffect(() => {
    handleFetchPlayerCurrentTeams();
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{isLoading ? "test" : ""}Current Teams</Text>
      </View>
      <View style={styles.detailsContainer}>
        <FlatList
          data={currentTeams}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#c42414"]} // Set color of the refresh indicator
              tintColor={"#c42414"} // Set color of the refresh indicator on iOS
            />
          }
          ListEmptyComponent={renderEmptyContainer}
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.popularTeamsContainer}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReached}
        />
      </View>
      {/* {
        currentTeams.length !== 0 ? (
          <View style={styles.detailsContainer}>
            <ScrollView>
              {currentTeams.map((item, index) => (
                <View 
                  key={index}
                  style={styles.details}
                >
                  <View style={styles.detailContainer}>
                    <View style={styles.detailWrapper}>
                      <View style={styles.imageContainer}>
                        <Image source={{ uri: checkImageUrl(profileImageUrl) ? profileImageUrl : profileImageUrl }} resizeMode="contain" style={styles.teamImage} />
                      </View>
                      <View>
                        <Text style={styles.teamNameText}>{item.league_participant.team_profile.name}</Text>
                        <Text style={styles.positionText}>POS : SG | C</Text>
                      </View>
                    </View>
                    <View style={styles.editContainer}>
                      <TouchableOpacity 
                        onPress={() => {
                          setLeagueParticipantsID(item.league_participant.id)
                          setSelectedTeam(item.league_participant.team_profile.name)
                          setShowCancelModal(true)
                        }}
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} size={hp(2.4)}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={styles.noCurrentTeamsContainer}>
            <Text style={styles.noCurrentTeamsText}>Your teams will be shown here</Text>
          </View>
        )
      } */}
      <ModalComponent
        isVisible={showCancelModal}
        isCanceled={() => setShowCancelModal(false)}
        leave={handleLeaveTeam}
        team={selectedTeam}
      />
    </View>
  );
};

export default CurrentTeamsCard;
