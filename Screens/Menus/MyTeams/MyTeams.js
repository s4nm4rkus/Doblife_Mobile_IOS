import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  FlatList,
  Text,
} from "react-native";
import styles from "./myTeams.style";
import TeamCard from "./card/TeamCard";
import Header from "../../../components/header/Header";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchFloatingTeams,
  fetchOwnedTeams,
  fetchPlayedInTeams,
  fetchTeams,
} from "../../../api/teamApi";
import { useDispatch, useSelector } from "react-redux";
// import {
//   floatingCheckedValue,
//   ownedTeamCheckedValue,
//   playedInCheckedValue,
// } from "../../../features/myTeamsFilter/myTeamsFilterSlice";
// import ModalComponent from "../Profiles/tab/teams/modal/ModalComponent";
// import {
//   leagueParticipantsIDValue,
//   setShowCancelModal,
//   showCancelModalValue,
//   teamNameValue,
// } from "../../../features/myTeamsLeaveTeam/myTeamsLeaveTeamSlice";
import { deleteTeamRoster } from "../../../api/teamRosterApi";
import { useFocusEffect } from "@react-navigation/native";
// import BottomSheetContentFilter from "../../../components/bottomSheetFilter/BottomSheetContentFilter";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const MyTeams = ({ navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { userToken, userProfile } = useContext(AuthContext);
  const leagueParticipantsID = useSelector(leagueParticipantsIDValue);
  const teamName = useSelector(teamNameValue);
  const isPlayedInChecked = useSelector(playedInCheckedValue);
  const isOwnedTeamChecked = useSelector(ownedTeamCheckedValue);
  const isFloatingChecked = useSelector(floatingCheckedValue);
  const showCancelModal = useSelector(showCancelModalValue);
  const [refreshing, setRefreshing] = useState(false);
  const bottomSheetModalRef = useRef(BottomSheetModal);
  const [isLoading, setIsLoading] = useState([]);
  const [hasMoreOwnedTeams, setHasMoreOwnedTeams] = useState(false);
  const [hasMorePlayedInTeams, setHasMorePlayedInTeams] = useState(false);
  const [hasMoreFloatingTeams, setHasMoreFloatingTeams] = useState(false);
  const [ownedTeams, setOwnedTeams] = useState([]);
  const [playedInTeams, setPlayedInTeams] = useState([]);
  const [floatingTeams, setFloatingTeams] = useState([]);
  const [ownedTeamsPage, setOwnedTeamsPage] = useState(1);
  const [playedInTeamsPage, setPlayedInTeamsPage] = useState(1);
  const [floatingTeamsPage, setFloatingTeamsPage] = useState(1);

  const { mutateAsync: fetchOwnedTeamsMutation } = useMutation({
    mutationFn: fetchOwnedTeams,
    onSuccess: (data) => {
      setOwnedTeams((prevData) => [...prevData, ...data.data]);
      setHasMoreOwnedTeams(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const { mutateAsync: fetchPlayedInTeamsMutation } = useMutation({
    mutationFn: fetchPlayedInTeams,
    onSuccess: (data) => {
      setPlayedInTeams((prevData) => [...prevData, ...data.data]);
      setHasMorePlayedInTeams(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const { mutateAsync: fetchFloatingTeamsMutation } = useMutation({
    mutationFn: fetchFloatingTeams,
    onSuccess: (data) => {
      setFloatingTeams((prevData) => [...prevData, ...data.data]);
      setHasMoreFloatingTeams(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  // const { data: teams, isLoading } = useQuery({
  //   queryFn: () => fetchTeams({
  //     params: {
  // profile_id: userProfile.id,
  // is_played_in_checked: isPlayedInChecked,
  // is_owned_team_checked: isOwnedTeamChecked,
  //     },
  //     userToken: userToken
  //   }),
  //   queryKey: [
  //     "myteams",
  // userProfile.id,
  // isPlayedInChecked,
  // isOwnedTeamChecked
  //   ],
  // })

  const { mutateAsync: deleteTeamRosterMutation } = useMutation({
    mutationFn: deleteTeamRoster,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["myteams"] });
    },
  });

  const handleLeaveTeam = async () => {
    const params = {
      league_participant_id: leagueParticipantsID,
    };

    try {
      await deleteTeamRosterMutation({ userToken, params });
      dispatch(setShowCancelModal(false));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchOwnedTeams = async () => {
    setIsLoading(true);

    const params = {
      page: ownedTeamsPage,
      profile_id: userProfile.id,
    };

    try {
      await fetchOwnedTeamsMutation({ userToken, params });
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchPlayedInTeams = async () => {
    setIsLoading(true);

    const params = {
      page: playedInTeamsPage,
      profile_id: userProfile.id,
    };

    try {
      await fetchPlayedInTeamsMutation({ userToken, params });
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchFloatingTeams = async () => {
    setIsLoading(true);

    const params = {
      page: floatingTeamsPage,
      profile_id: userProfile.id,
    };

    try {
      await fetchFloatingTeamsMutation({ userToken, params });
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleOwnedTeamsEndReached = () => {
    if (!isLoading && hasMoreOwnedTeams) {
      setOwnedTeamsPage((prevPage) => prevPage + 1);
    }
  };

  const handlePlayedInTeamsEndReached = () => {
    if (!isLoading && hasMorePlayedInTeams) {
      setPlayedInTeamsPage((prevPage) => prevPage + 1);
    }
  };

  const handleFloatingTeamsEndReached = () => {
    if (!isLoading && hasMoreFloatingTeams) {
      setFloatingTeamsPage((prevPage) => prevPage + 1);
    }
  };

  const renderListItem = ({ item }) => (
    <TeamCard
      bottomSheetModalRef={bottomSheetModalRef}
      key={item.id}
      data={item}
      navigation={navigation}
    />
  );

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  const isFiltered = (item) => {
    if (!isPlayedInChecked && !isOwnedTeamChecked && !isFloatingChecked)
      return true;

    switch (item) {
      case "owned":
        if (isOwnedTeamChecked) {
          return true;
        } else {
          return false;
        }
      case "playedIn":
        if (isPlayedInChecked) {
          return true;
        } else {
          return false;
        }
      case "floating":
        if (isFloatingChecked) {
          return true;
        } else {
          return false;
        }
      default:
        break;
    }
  };

  const onRefresh = async () => {
    setTeams([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchOwnedTeams();
    } else {
      setPage(1);
    }
  };

  useEffect(() => {
    handleFetchOwnedTeams();
  }, [userProfile.id, ownedTeamsPage]);

  useEffect(() => {
    handleFetchPlayedInTeams();
  }, [userProfile.id, playedInTeamsPage]);

  useEffect(() => {
    handleFetchFloatingTeams();
  }, [userProfile.id, floatingTeamsPage]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          title="MY TEAMS"
          navigation={navigation}
          onPressFilter={() => bottomSheetModalRef.current?.present()}
        />
        <ScrollView
          style={styles.bodyContainer}
          contentContainerStyle={styles.bodyContentContainer}
        >
          {isFiltered("owned") && (
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTextContainer}>
                <Text style={styles.sectionTitleText}>OWNED TEAMS</Text>
                <Text style={styles.sectionDescriptionText}>
                  Team you have owned
                </Text>
              </View>

              <FlatList
                data={ownedTeams}
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
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={handleOwnedTeamsEndReached}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
              />
            </View>
          )}

          {isFiltered("playedIn") && (
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTextContainer}>
                <Text style={styles.sectionTitleText}>PLAYED IN</Text>
                <Text style={styles.sectionDescriptionText}>
                  Teams you have currently a roster
                </Text>
              </View>

              <FlatList
                data={playedInTeams}
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
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={handlePlayedInTeamsEndReached}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
              />
            </View>
          )}

          {isFiltered("floating") && (
            <View style={styles.sectionContainer}>
              <View style={styles.sectionTextContainer}>
                <Text style={styles.sectionTitleText}>FLOATING</Text>
                <Text style={styles.sectionDescriptionText}>
                  Teams which are waiting to be accepted in a league
                </Text>
              </View>

              <FlatList
                data={floatingTeams}
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
                numColumns={2}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.2}
                onEndReached={handleFloatingTeamsEndReached}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
              />
            </View>
          )}
        </ScrollView>
        {/* <View style={styles.teamsContainer}>
          <ScrollView
            contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}} 
            showsVerticalScrollIndicator={false}
          >
            {(
              teams?.map((data) => (
                <TeamCard
                  bottomSheetModalRef={bottomSheetModalRef}
                  key={data.id}
                  data={data}
                  navigation={navigation}
                />
              ))
            )}
          </ScrollView>
        </View> */}

        <ModalComponent
          isVisible={showCancelModal}
          isCanceled={() => dispatch(setShowCancelModal(false))}
          leave={handleLeaveTeam}
          team={teamName}
        />
        <BottomSheetContentFilter
          navigation={navigation}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </SafeAreaView>
    </>
  );
};

export default MyTeams;
