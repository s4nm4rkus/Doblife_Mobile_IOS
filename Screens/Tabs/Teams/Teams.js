import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import styles from "./teams.style";
import Header from "../../../components/header/Header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTeams } from "../../../api/teamApi";
import {
  setTeam,
  setLeagueParticipantID,
} from "../../../features/selectTeam/selectTeamSlice";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../../context/AuthContext";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Teams = ({ navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);

  const { mutateAsync: fetchTeamsMutation } = useMutation({
    mutationFn: fetchTeams,
    onSuccess: (data) => {
      setTeams((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const onRefresh = async () => {
    setTeams([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchMyTeams();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchMyTeams = async () => {
    setIsLoading(true);

    const params = {
      page: page,
    };

    try {
      await fetchTeamsMutation({ userToken, params });
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleGoToSearch = () => {
    navigation.navigate("SearchTeams");
  };

  const handleGoToFilter = () => {
    navigation.navigate("FilterTeams");
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

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  const renderListItem = ({ item }) => (
    <TouchableOpacity
      style={styles.column}
      onPress={() => handleSelectTeam(item)}
    >
      <View style={styles.cardContainer}>
        <View style={styles.content}>
          {item.default_team_profile_pic ? (
            <Image
              source={{ uri: item.default_team_profile_pic.image }}
              resizeMode="contain"
              style={styles.teamLogo}
            />
          ) : (
            <Image
              source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
              resizeMode="contain"
              style={styles.teamLogo}
            />
          )}
          <View style={styles.teamNameContainer}>
            <Text style={styles.teamText}>{item.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    handleFetchMyTeams();
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="TEAMS"
        navigation={navigation}
        onPressSearch={handleGoToSearch}
        onPressFilter={handleGoToFilter}
      />
      {/* <View style={styles.todayLeagueContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>POPULAR TEAMS</Text>
          <TouchableOpacity style={styles.seeAllContainer}>
            <Text style={styles.seeAllText}>See all</Text>
            <FontAwesomeIcon 
              icon={faChevronRight}
              style={styles.chevronRight}
              size={hp(2.3)}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={testData}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.popularTeamsContainer}
          numColumns={2}
        />
      </View> */}
      <View style={styles.upcomingLeagueContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>TEAMS</Text>
        </View>
        <FlatList
          data={teams}
          renderItem={renderListItem}
          keyExtractor={(item, index) => index}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#c42414"]} // Set color of the refresh indicator
              tintColor={"#c42414"} // Set color of the refresh indicator on iOS
            />
          }
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.popularTeamsContainer}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReached}
        />
      </View>
    </SafeAreaView>
  );
};

export default Teams;
