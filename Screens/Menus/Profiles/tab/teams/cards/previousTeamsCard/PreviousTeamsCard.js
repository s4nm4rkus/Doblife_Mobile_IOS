import { useState, useEffect, useContext } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import styles from "./previousTeamsCard.style";
import { COLORS, FONT, SIZES } from "../../../../../../../constants/theme";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../../../../../context/AuthContext";
import { checkImageUrl } from "../../../../../../../utils/utils";
import ModalComponent from "../../modal/ModalComponent";
import { ScrollView } from "react-native-gesture-handler";
import { useProfileData } from "../../../../../../../hooks/useProfileData";
import {
  deleteTeamRoster,
  fetchPlayerPreviousTeams,
} from "../../../../../../../api/teamRosterApi";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const PreviousTeamsCard = ({ navigation }) => {
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

  const { data: profile, isError, error } = useProfileData(userToken);

  const { mutateAsync: deleteTeamRosterMutation } = useMutation({
    mutationFn: deleteTeamRoster,
    onSuccess: (data) => {
      handleFetchPlayerPreviousTeams();
    },
  });

  const { mutateAsync: fetchPlayerPreviousTeamsMutation } = useMutation({
    mutationFn: fetchPlayerPreviousTeams,
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
      handleFetchPlayerPreviousTeams();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchPlayerPreviousTeams = async () => {
    const params = {
      page: page,
    };

    try {
      await fetchPlayerPreviousTeamsMutation({ userToken });
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
      console.log(e);
    }
  };

  const renderEmptyContainer = () => (
    <View style={styles.noCurrentTeamsContainer}>
      <Text style={styles.noCurrentTeamsText}>
        Your previous teams will be shown here
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
            {/* <Text style={styles.positionText}>{profile.birthplace_city.name}</Text> */}
          </View>
        </View>
        <View>
          <View style={styles.editContainer}>
            <TouchableOpacity
              onPress={() => {
                setLeagueParticipantsID(item.league_participant.id);
                setSelectedTeam(item.league_participant.team_profile.name);
                setShowCancelModal(true);
              }}
            >
              <Feather
                name="more-vertical"
                size={hp(2.7)}
                color={COLORS.clr_light_white}
                style={{ fontWeight: "bolder" }}
              />
            </TouchableOpacity>
          </View>
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
    handleFetchPlayerPreviousTeams();
    // const res = profile.profile_histories.filter((history) => {
    //   if (history.league_participant.league_season_category !== null) {
    //     return history.league_participant.league_season_category.league_season.is_open === 0;
    //   }
    // });

    // setCurrentTeams(res);
  }, [page]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Previous Teams</Text>
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

      <ModalComponent
        isVisible={showCancelModal}
        isCanceled={() => setShowCancelModal(false)}
        leave={handleLeaveTeam}
        team={selectedTeam}
      />
    </View>
  );
};

export default PreviousTeamsCard;
