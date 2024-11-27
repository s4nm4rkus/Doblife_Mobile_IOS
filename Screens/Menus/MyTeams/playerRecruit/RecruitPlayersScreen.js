import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import { useState, useEffect, useContext, useCallback } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./recruitPlayers.style";
import { BASE_URL } from "../../../../utils/config";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowLeft,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../../../../api/profileApi";
import {
  leagueParticipantIDValue,
  teamValue,
} from "../../../../features/myTeamsSelectTeam/myTeamsSelectTeamSlice";
import { checkImageUrl } from "../../../../utils/utils";
import {
  addToPlayers,
  playersValue,
  removePlayer,
  removeSelectedPlayer,
  resetAll,
  searchValue,
  selectedPlayersValue,
  setPlayers,
  setSearch,
  setSelectedPlayers,
} from "../../../../features/selectPlayer/selectPlayerSlice";
import { recruitPlayers } from "../../../../api/requestApi";
import { setIsDoneRecruitingModalVisible } from "../../../../features/teamSetup/teamSetupSlice";
import { useFocusEffect } from "@react-navigation/native";
import RecruitmentStatusConfirmationModal from "../modal/recruitment/RecruitmentStatusConfirmationModal";
import { checkTeamSameLeague } from "../../../../api/leagueParticipantApi";
import { FONTSIZE } from "../../../../constants/theme";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const RecruitPlayersScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [playerName, setPlayerName] = useState(null);
  const [playerCurrentTeam, setPlayerCurrentTeam] = useState(null);
  const [newTeam, setNewTeam] = useState(null);
  const [player, setPlayer] = useState({});
  const [isRecruitmentModalVisible, setIsRecruitmentModalVisible] =
    useState(null);
  const dispatch = useDispatch();
  const team = useSelector(teamValue);
  const profile = queryClient.getQueryData(["profile"]);
  const players = useSelector(playersValue);
  const selectedPlayers = useSelector(selectedPlayersValue);
  const search = useSelector(searchValue);
  const leagueParticipantID = useSelector(leagueParticipantIDValue);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);

  const { mutateAsync: checkTeamSameLeagueMutation } = useMutation({
    mutationFn: checkTeamSameLeague,
    onSuccess: (data) => {},
  });

  const { mutateAsync: fetchPlayersMutation } = useMutation({
    mutationFn: fetchProfiles,
    onSuccess: (data) => {
      console.log(data);
      dispatch(setPlayers(data.data));
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const { mutateAsync: recruitPlayersMutation } = useMutation({
    mutationFn: recruitPlayers,
    onSuccess: (data) => {
      navigation.navigate("TeamSetup");
      dispatch(setIsDoneRecruitingModalVisible(true));
      dispatch(resetAll());
      // socket.emit('sendNotification', {
      //   sender_profile_id: userProfile.id,
      //   receiver_profile_id: team.league_participants[0].team_rosters.find(item => item.team_role_id === 1).profile_id
      // });
    },
  });

  const handleFetchPlayers = async () => {
    const initialParams = {
      team_id: team.id,
      search: search,
      league_participant_id: leagueParticipantID,
      is_recruit: true,
      page: page,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchPlayersMutation({ userToken, params });
    } catch (e) {
      console.log(e);
      console.log(e.response);
    }
  };

  const onRefresh = async () => {
    dispatch(setPlayers([]));
    setRefreshing(true);
    if (page == 1) {
      handleFetchPlayers();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleFetchPlayers();
    }, [search])
  );

  const handleDone = async () => {
    const profileIDs = selectedPlayers.map((item) => item.id);

    const params = {
      league_participants_id: leagueParticipantID,
      profile_ids: profileIDs,
    };

    try {
      await recruitPlayersMutation({ userToken, params });
      // setShowCancelModal(false);
      // Toast.show({
      //   type: 'customToast',
      //   text1: "You've successfully joined Brill Sports Team, You'll be notified when the Team accepted your request.",
      // });
      // navigation.navigate('Feed')
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
    // navigation.navigate('TeamSetup')
  };

  const handleRemoveSelectedPlayer = (item) => {
    dispatch(removeSelectedPlayer(item.id));
    dispatch(addToPlayers(item));
  };

  const handleRecruitPlayer = async (item) => {
    setPlayer({});
    const params = {
      team_id: team.id,
      profile_id: item.id,
    };

    try {
      const teamInfo = await checkTeamSameLeagueMutation({ userToken, params });

      if (teamInfo.has_same_league) {
        setPlayer({
          id: item.id,
          info: item,
        });
        setPlayerName(item.full_name);
        setPlayerCurrentTeam(teamInfo.previous_team_name);
        setNewTeam(team.name);
        setIsRecruitmentModalVisible(true);
      } else {
        dispatch(removePlayer(item.id));
        dispatch(setSelectedPlayers(item));
      }
      console.log(teamInfo);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleOkay = () => {
    setIsRecruitmentModalVisible(false);
    dispatch(removePlayer(player.id));
    dispatch(setSelectedPlayers(player.info));
  };

  const renderPlayerPosition = (profile) => {
    let positions = [];

    if (
      profile.nature_position_item == null &&
      profile.secondary_position_item == null
    ) {
      return "n/a";
    }

    if (profile.nature_position_item != null)
      positions.push(profile.nature_position_item.name);
    if (profile.secondary_position_item != null)
      positions.push(profile.secondary_position_item.name);

    return positions.slice().join("-");
  };

  const renderListItem = ({ item }) => (
    <View style={styles.playerContainer}>
      <View style={styles.playerDetailsContainer}>
        <View style={styles.imageContainer}>
          {item.default_profile_pic ? (
            <Image
              source={{ uri: item.default_profile_pic.image }}
              resizeMode="contain"
              style={styles.teamImage}
            />
          ) : (
            <Image
              source={require("../../../../assets/playerPlaceholders/player-placeholder-02.png")}
              resizeMode="contain"
              style={styles.teamImage}
            />
          )}
          {/* <Image source={{ uri: checkImageUrl(profileImageUrl) ? profileImageUrl : profileImageUrl }} resizeMode="contain" style={styles.teamImage} /> */}
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={styles.nameText}>{item.full_name}</Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "baseline" }}
          >
            <View style={styles.heightContainer}>
              <Text style={styles.detailText}>Ht. </Text>
              <Text style={styles.valueText}>{item.height}</Text>
            </View>
            <View style={styles.positionContainer}>
              <Text style={styles.detailText}>Pos. </Text>
              <Text style={styles.valueText}>{renderPlayerPosition(item)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.recruitContainer}>
        <View>
          <TouchableOpacity onPress={() => handleRecruitPlayer(item)}>
            <Text style={styles.recruitText}>Recruit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderSelectedPlayers = ({ item }) => (
    <View
      style={styles.selectedPlayerContainer}
      onStartShouldSetResponder={() => true}
    >
      <TouchableOpacity
        onPress={() => handleRemoveSelectedPlayer(item)}
        hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
        style={{ alignSelf: "flex-end" }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          size={hp(1.5)}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        {item.default_profile_pic ? (
          <Image
            source={{ uri: item.default_profile_pic.image }}
            resizeMode="contain"
            style={styles.selectedPlayerImage}
          />
        ) : (
          <Image
            source={require("../../../../assets/playerPlaceholders/player-placeholder-02.png")}
            resizeMode="contain"
            style={styles.selectedPlayerImage}
          />
        )}
        {/* <Image source={{ uri: checkImageUrl(profileImageUrl) ? profileImageUrl : profileImageUrl }} resizeMode="contain" style={styles.selectedPlayerImage} /> */}
      </View>
      <Text style={styles.playerNameText} numberOfLines={1}>
        {item.full_name}
      </Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 25}
        style={styles.container}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.arrowLeftContainer}>
              <TouchableOpacity
                style={styles.arrowLeftButton}
                onPress={() => navigation.navigate("TeamSetup")}
              >
                <FontAwesomeIcon icon={faArrowLeft} size={hp(3)} color="red" />
              </TouchableOpacity>
              <Text style={styles.filterText}>Recruit Player</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => handleDone()}
              >
                <Text style={styles.headerText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.textInputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inInput}
                  value={search}
                  placeholder="Search"
                  onChangeText={(text) => dispatch(setSearch(text))}
                />
                <View style={styles.searchIconContainer}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size={hp(2.5)}
                    style={{ opacity: 0.5 }}
                  />
                </View>
              </View>
            </View>
          </View>
          {selectedPlayers.length == 0 ? null : (
            <View style={styles.contentContainer}>
              <FlatList
                horizontal
                data={selectedPlayers}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderSelectedPlayers}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={styles.selectedPlayerSeparator} />
                )}
              ></FlatList>
            </View>
          )}
          {players.length == 0 ? (
            <View
              style={{
                paddingHorizontal: 15,
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Text style={{ fontSize: FONTSIZE.x_large }}>
                No Players available
              </Text>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <FlatList
                data={players}
                renderItem={renderListItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={styles.playerSeparator} />
                )}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={["#c42414"]} // Set color of the refresh indicator
                    tintColor={"#c42414"} // Set color of the refresh indicator on iOS
                  />
                }
                onEndReachedThreshold={0.2}
                onEndReached={handleEndReached}
              />
            </View>
          )}
          <RecruitmentStatusConfirmationModal
            isVisible={isRecruitmentModalVisible}
            isCanceled={() => setIsRecruitmentModalVisible(false)}
            handleOkay={() => handleOkay()}
            playerName={playerName}
            playerCurrentTeam={playerCurrentTeam}
            newTeam={newTeam}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default RecruitPlayersScreen;
