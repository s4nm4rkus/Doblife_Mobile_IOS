import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import styles from "./selectLeague.style";
import { AuthContext } from "../../context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  leagueIDValue,
  setIsConfirmModalVisible,
  leagueNameValue,
  isConfirmModalVisibleValue,
  isSelectDivisionModalVisibleValue,
  setIsSelectDivisionModalVisible,
  divisionIDValue,
} from "../../features/selectLeague/selectLeagueSlice";
import Header from "./header/Header";
import LeagueCard from "./card/LeagueCard";
import { fetchLeagues } from "../../api/leagueApi";
import { selectedTeamsValue } from "../../features/selectTeam/selectTeamSlice";
import ConfirmModal from "./modal/confirmModal/ConfirmModal";
import SelectDivisionModal from "./modal/selectDivisionModal/SelectDivisionModal";
import { joinLeague } from "../../api/leagueParticipantApi";
import Toast from "react-native-toast-message";

const SelectLeague = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const selectedTeams = useSelector(selectedTeamsValue);
  const leagueID = useSelector(leagueIDValue);
  const leagueName = useSelector(leagueNameValue);
  const isConfirmModalVisible = useSelector(isConfirmModalVisibleValue);
  const isSelectDivisionModalVisible = useSelector(
    isSelectDivisionModalVisibleValue
  );
  const divisionID = useSelector(divisionIDValue);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [leagues, setLeagues] = useState([]);
  const [page, setPage] = useState(1);

  const { mutateAsync: fetchLeaguesMutation } = useMutation({
    mutationFn: fetchLeagues,
    onSuccess: (data) => {
      console.log(data.data[0]);
      setLeagues((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const onRefresh = async () => {
    setLeagues([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchLeagues();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchLeagues = async () => {
    let selectedTeamsIDs = selectedTeams.map(
      (team) => team.league_participant.team_profile.id
    );

    const initialParams = {
      selected_teams_ids: selectedTeamsIDs,
      is_approved: true,
      page: page,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchLeaguesMutation({ params, userToken });
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    handleFetchLeagues();
  }, [page]);

  // const { data: leagues, isLoading, isError, error } = useQuery({
  //   queryKey: ["leagues"],
  //   queryFn: () => fetchLeagues({
  //     userToken,
  //     params: {
  //     }
  //   })
  // })

  const { mutateAsync: joinLeagueMutation } = useMutation({
    mutationFn: joinLeague,
    onSuccess: (data) => {
      Toast.show({
        type: "customToast",
        text1: `You successfully joined ${leagueName}`,
      });
    },
  });

  const handleJoinTeam = async () => {
    let teamsIds = selectedTeams.map(
      (team) => team.league_participant.team_profile.id
    );

    const params = {
      league_season_category_id: divisionID,
      teams_ids: teamsIds,
    };
    console.log(params);
    return;
    try {
      await joinLeagueMutation({ userToken, params });
      dispatch(setIsSelectDivisionModalVisible(false));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  const renderItem = ({ item }) => (
    <LeagueCard
      key={item.id}
      data={item}
      navigation={navigation}
      routeParams={route.params}
    />
  );

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <ActivityIndicator size="large" color="#9b001c" />
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.leaguesContainer}>
            <FlatList
              key={"_"}
              data={leagues}
              keyExtractor={(item, index) => "_" + index.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",
                marginBottom: 25,
              }}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={["#c42414"]} // Set color of the refresh indicator
                  tintColor={"#c42414"} // Set color of the refresh indicator on iOS
                />
              }
              ListFooterComponent={renderFooter}
              onEndReachedThreshold={0.2}
              onEndReached={handleEndReached}
            ></FlatList>
          </View>
          <ConfirmModal
            isVisible={isConfirmModalVisible}
            isCanceled={() => dispatch(setIsConfirmModalVisible(false))}
            join={handleJoinTeam}
            leagueName={leagueName}
          />
          <SelectDivisionModal
            isVisible={isSelectDivisionModalVisible}
            isCanceled={() => dispatch(setIsSelectDivisionModalVisible(false))}
            join={handleJoinTeam}
            leagueName={leagueName}
            navigation={navigation}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default SelectLeague;
