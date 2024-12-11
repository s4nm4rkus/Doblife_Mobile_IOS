import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./league.style";
import Header from "./header/Header";
import LeagueContent from "./content/LeagueContent";
import { Dropdown } from "react-native-element-dropdown";
import { useMutation } from "@tanstack/react-query";
import { fetchLeagueSeasonCategoriesByLeague } from "../../api/leagueSeasonCategoryApi";
import { useDispatch, useSelector } from "react-redux";
import {
  leagueSeasonCategoriesValue,
  leagueSeasonCategoryValue,
  setLeagueSeasonCategories,
  setLeagueSeasonCategory,
} from "../../features/selectDivision/selectDivisionSlice";
import { leagueIDValue } from "../../features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice";
import {
  closeLeague,
  fetchLeague,
  fetchLeagueMatchupRounds,
  fetchLeagueMatchupSchedules,
  openLeague,
} from "../../api/leagueApi";
import {
  isCloseLeagueModalVisibleValue,
  isJoinValue,
  isOpenValue,
  isOwnerValue,
  leagueDataValue,
  setIsCloseLeagueModalVisible,
  setIsJoin,
  setIsOpen,
  setIsOwner,
  setLeagueData,
} from "../../features/league/leagueSlice";
import {
  roundValue,
  setGames,
  setRound,
  setRounds,
} from "../../features/selectLeagueRound/selectLeagueRoundSlice";
import { useFocusEffect } from "@react-navigation/native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import BottomSheetDivisions from "./bottomSheetModal/bottomSheetDivisions/BottomSheetDivisions";
import { removeAllSelectedTeamParticipant } from "../../features/addBracket/addBracketSlice";
import { fetchBrackets } from "../../api/bracketApi";
import {
  bracketValue,
  setBracket,
  setBrackets,
} from "../../features/selectBracket/selectBracketSlice";
import BottomSheetBrackets from "./bottomSheetModal/bottomSheetBrackets/BottomSheetBrackets";
import * as ScreenOrientation from "expo-screen-orientation";
import { AuthContext } from "../../context/AuthContext";
import {
  setIsSelectDivisionModalVisible,
  setLeagueID,
  setLeagueName,
} from "../../features/selectLeague/selectLeagueSlice";
import CloseLeagueModal from "./modal/closeLeague/CloseLeagueModal";
import { joinLeague } from "../../api/leagueParticipantApi";
import { selectedTeamsValue } from "../../features/selectTeam/selectTeamSlice";
import Toast from "react-native-toast-message";
import { formValue, setFormData } from "../../features/team/createTeamSlice";

const LeagueScreen = ({ route, navigation }) => {
  ScreenOrientation.unlockAsync();
  const [isBusy, setBusy] = useState(true);
  const { userProfile, userToken } = useContext(AuthContext);
  const dispatch = useDispatch();
  const bracket = useSelector(bracketValue);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const round = useSelector(roundValue);
  const leagueID = useSelector(leagueIDValue);
  // console.log("League ID:", leagueID);
  const leagueData = useSelector(leagueDataValue);
  const isJoin = useSelector(isJoinValue);
  const bottomSheetModalRef = useRef(BottomSheetModal);
  const bottomSheetModalRefBrackets = useRef(BottomSheetModal);
  const isOwner = useSelector(isOwnerValue);
  const isCloseLeagueModalVisible = useSelector(isCloseLeagueModalVisibleValue);
  const isOpen = useSelector(isOpenValue);
  const leagueSeasonCategories = useSelector(leagueSeasonCategoriesValue);
  const selectedTeams = useSelector(selectedTeamsValue);
  const formData = useSelector(formValue);

  const { mutateAsync: fetchLeagueMutation } = useMutation({
    mutationFn: fetchLeague,
    onSuccess: (data) => {
      if (data.owner == userProfile.user_id) {
        dispatch(setIsOwner(true));
      } else {
        dispatch(setIsOwner(false));
      }
      dispatch(setLeagueData(data));
    },
  });

  const { mutateAsync: joinLeagueMutation } = useMutation({
    mutationFn: joinLeague,
    onSuccess: (data) => {
      Toast.show({
        type: "customToast",
        text1: `You successfully joined ${leagueData?.name}`,
      });
      console.log("Joined League:", data);
    },
  });

  const { mutateAsync: closeLeagueMutation } = useMutation({
    mutationFn: closeLeague,
    onSuccess: (data) => {
      console.log("League Closed:", data);
    },
  });

  const { mutateAsync: openLeagueMutation } = useMutation({
    mutationFn: openLeague,
    onSuccess: (data) => {
      console.log("League Opened:", data);
    },
  });

  const { mutateAsync: fetchBracketsMutation } = useMutation({
    mutationFn: fetchBrackets,
    onSuccess: (data) => {
      console.log("Fetched Brackets:", data);
      dispatch(setBrackets(data));

      if (bracket == null) {
        const defaultSelectedItem = data.length > 0 ? data[0] : null;
        dispatch(setBracket(defaultSelectedItem));
      } else {
        dispatch(setBracket(getObjectByID(data, bracket.id)));
      }
    },
  });

  const { mutateAsync: fetchLeagueSeasonCategoriesMutation } = useMutation({
    mutationFn: fetchLeagueSeasonCategoriesByLeague,
    onSuccess: (data) => {
      var count = Object.keys(data).length;
      let leagueSeasonCategoriesArr = [];

      dispatch(setIsOpen(data[0].league_season.join_status));

      for (var i = 0; i < count; i++) {
        leagueSeasonCategoriesArr.push({
          value: data[i].id,
          label: data[i].name,
          from: data[i].age_limit_from,
          to: data[i].age_limit_to,
          season_description: data[i].league_season.season_description,
          league_participants: data[i].league_participants,
          league_season_id: data[i].league_season.id,
          league_name: data[i].league_season.league.name,
          league_acronym: data[i].league_season.league.acronym,
          country_id: data[i].league_season.location_country,
          barangay: data[i].league_season.location_barangay?.name,
          barangay_id: data[i].league_season.location_barangay?.id,
          city: data[i].league_season.location_city?.city,
          city_id: data[i].league_season.location_city?.id,
          province: data[i].league_season.location_province?.name,
          province_id: data[i].league_season.location_province?.id,
          opening_date: data[i].league_season.opening_date,
          owner_name: data[i].league_season.league.owner_user.profile.full_name,
          league_type: data[i].league_season.league.league_type.name,
        });
      }

      dispatch(setLeagueSeasonCategories(leagueSeasonCategoriesArr));

      if (leagueSeasonCategory == null) {
        const defaultSelectedItem =
          leagueSeasonCategoriesArr.length > 0
            ? leagueSeasonCategoriesArr[0]
            : null;
        dispatch(setLeagueSeasonCategory(defaultSelectedItem));
      } else {
        dispatch(
          setLeagueSeasonCategory(
            getObjectByValue(
              leagueSeasonCategoriesArr,
              leagueSeasonCategory.value
            )
          )
        );
      }
    },
  });

  const handleFetchLeague = async () => {
    setBusy(true);
    const params = {
      league_id: leagueID,
    };

    try {
      await fetchLeagueMutation({ params, userToken });
      await handleFetchLeagueSeasonCategories();
      // await handleFetchLeagueMatchupSchedules();
      setBusy(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleJoinTeam = async () => {
    if (route.params != undefined) {
      if (formData.contentType != undefined) {
        dispatch(
          setFormData({
            teamName: formData.teamName,
            acronym: formData.acronym,
            profile_id: formData.profile_id,
            uri: formData.uri,
            type: formData.mimeType,
            name: formData.fileName,
            contentType: formData.mimeType,
            league_name: leagueData.name,
            league_acronym: leagueData.acronym,
            division_name: leagueSeasonCategory.label,
            division_id: leagueSeasonCategory.value,
            division_opening_date: leagueSeasonCategory.opening_date,
          })
        );
      } else {
        dispatch(
          setFormData({
            teamName: formData.teamName,
            acronym: formData.acronym,
            profile_id: formData.profile_id,
            league_name: leagueData.name,
            league_acronym: leagueData.acronym,
            division_name: leagueSeasonCategory.label,
            division_id: leagueSeasonCategory.value,
            division_opening_date: leagueSeasonCategory.opening_date,
          })
        );
      }
      navigation.navigate("ConfirmCreateTeam");
      return;
    }

    let teamsIds = selectedTeams.map(
      (team) => team.league_participant.team_profile.id
    );

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      teams_ids: teamsIds,
    };

    try {
      await joinLeagueMutation({ userToken, params });
      dispatch(setIsJoin(false));
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const getObjectByValue = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].value === id) {
        return array[i];
      }
    }
    return null;
  };

  const getObjectByID = (array, id) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
    return null;
  };

  const handleFetchLeagueSeasonCategories = async () => {
    const params = {
      league_id: leagueID,
    };

    try {
      await fetchLeagueSeasonCategoriesMutation({ params, userToken });
    } catch (e) {
      console.log(e);
    }
  };

  const handleFetchBrackets = async () => {
    if (!leagueSeasonCategory) return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
    };

    try {
      await fetchBracketsMutation({ params });
    } catch (e) {
      console.log(e);
    }
  };

  const { mutateAsync: fetchLeagueMatchupSchedulesMutation } = useMutation({
    mutationFn: fetchLeagueMatchupSchedules,
    onSuccess: (data) => {
      dispatch(setGames(data));
      // dispatch(setLeagueSeasonCategories(leagueSeasonCategoriesArr));
    },
  });

  const handleFetchLeagueMatchupSchedules = async () => {
    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      round_id: round,
    };

    try {
      await fetchLeagueMatchupSchedulesMutation({ params });
    } catch (e) {
      console.log(e);
    }
  };

  const { mutateAsync: fetchLeagueMatchupRoundsMutation } = useMutation({
    mutationFn: fetchLeagueMatchupRounds,
    onSuccess: (data) => {
      dispatch(setRounds(data));
      dispatch(setRound(data[0].league_round.id));
    },
  });

  const handleFetchLeagueMatchupRounds = async () => {
    if (!leagueSeasonCategory) return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
    };

    try {
      await fetchLeagueMatchupRoundsMutation({ params });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSwitchDivision = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleAddBracket = () => {
    dispatch(removeAllSelectedTeamParticipant());
    navigation.navigate("AddBracket");
  };

  const handleSwitchBracket = () => {
    bottomSheetModalRefBrackets.current?.present();
  };

  const handleCloseLeague = async () => {
    const params = {
      league_id: leagueID,
    };

    try {
      await closeLeagueMutation({ params });
      dispatch(setIsCloseLeagueModalVisible(false));
      handleFetchLeague();
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleOpenLeague = async () => {
    const params = {
      league_id: leagueID,
    };

    try {
      await openLeagueMutation({ params });
      handleFetchLeague();
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleOpenCloseLeagueModal = () => {
    dispatch(setIsCloseLeagueModalVisible(true));
  };

  const renderEngageButton = () => {
    if (isJoin) {
      return (
        <View style={styles.closeLeagueButtonContainer}>
          <TouchableOpacity
            style={styles.closeLeagueButton}
            onPress={() => handleJoinTeam()}
          >
            <Text style={styles.closeLeagueButtonText}>Join League</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (isOwner) {
      if (isOpen === "open") {
        return (
          <View style={styles.closeLeagueButtonContainer}>
            <TouchableOpacity
              style={styles.closeLeagueButton}
              onPress={() => handleOpenCloseLeagueModal()}
            >
              <Text style={styles.closeLeagueButtonText}>Close League</Text>
            </TouchableOpacity>
          </View>
        );
      } else {
        return (
          <View style={styles.closeLeagueButtonContainer}>
            <TouchableOpacity
              style={styles.openLeagueButton}
              onPress={() => handleOpenLeague()}
            >
              <Text style={styles.openLeagueButtonText}>Open League</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

    return null;
  };

  const renderItems = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  useEffect(() => {
    if (leagueSeasonCategory) {
      handleFetchLeagueMatchupRounds();
      handleFetchBrackets();
    }
  }, [leagueSeasonCategory]);

  useFocusEffect(
    useCallback(() => {
      handleFetchLeague();
    }, [leagueID])
  );

  useEffect(() => {
    if (round && leagueSeasonCategory) {
      handleFetchLeagueMatchupSchedules();
    }
  }, [round]);

  // useEffect(() => {
  //   console.log("User Token:", userToken);
  // }, []);

  return (
    <>
      {isBusy ? (
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
        <View style={styles.container}>
          <Header navigation={navigation} />

          {isJoin ? (
            <View style={styles.joinLeagueContainer}>
              <View style={styles.joinLeagueNameContainer}>
                <Text style={styles.joinLeagueAcronymText}>
                  {leagueData?.acronym}
                </Text>
                <Text style={styles.joinLeagueNameText}>
                  {leagueData?.name}
                </Text>
              </View>
              <View style={styles.joinLeagueOptionsContainer}>
                <Text style={styles.optionLabelText}>Division</Text>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={leagueSeasonCategories}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select"
                  searchPlaceholder="Search..."
                  value={leagueSeasonCategory}
                  onChange={(item) => {
                    dispatch(setLeagueSeasonCategory(item));
                  }}
                  renderItem={renderItems}
                />
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity
                    style={[styles.joinLeagueButton]}
                    onPress={() => handleJoinTeam()}
                  >
                    <Text style={styles.buttonText}>JOIN LEAGUE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <>
              <View style={styles.leagueNameContainer}>
                <View style={styles.leagueNameWrapper}>
                  <Text style={styles.leagueAcronymText}>
                    {leagueData?.acronym}
                  </Text>
                  <Text style={styles.activeText}>Active</Text>
                </View>
                <Text style={styles.leagueNameText}>{leagueData?.name}</Text>
              </View>
              <View style={styles.optionsContainer}>
                <View style={styles.optionsWrapper}>
                  <View style={styles.divisionContainer}>
                    <Text style={styles.optionLabelText}>Division</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.divisionText} numberOfLines={1}>
                        {leagueSeasonCategory
                          ? leagueSeasonCategory.label
                          : "No Division"}
                      </Text>
                      <TouchableOpacity onPress={() => handleSwitchDivision()}>
                        <Text style={styles.switchText}>Switch</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.bracketContainer}>
                    <Text style={styles.optionLabelText}>Bracket</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.bracketText} numberOfLines={1}>
                        {bracket ? bracket.name : "No Bracket"}
                      </Text>
                      {bracket ? (
                        <TouchableOpacity onPress={() => handleSwitchBracket()}>
                          <Text style={styles.switchText}>Switch</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={() => handleAddBracket()}>
                          <Text style={styles.switchText}>Add</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </View>
              </View>
              {renderEngageButton()}
            </>
          )}
          <LeagueContent navigation={navigation} />
          <BottomSheetDivisions
            navigation={navigation}
            bottomSheetModalRef={bottomSheetModalRef}
          />
          <BottomSheetBrackets
            navigation={navigation}
            bottomSheetModalRef={bottomSheetModalRefBrackets}
          />
          <CloseLeagueModal
            isVisible={isCloseLeagueModalVisible}
            isCanceled={() => dispatch(setIsCloseLeagueModalVisible(false))}
            handleClose={handleCloseLeague}
          />
        </View>
      )}
    </>
  );
};

export default LeagueScreen;
