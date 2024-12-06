import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./bottomSheetSelectTeam.style";
import { useDispatch, useSelector } from "react-redux";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { fetchLeagueParticipants } from "../../../../api/leagueParticipantApi";
import { bracketValue } from "../../../../features/selectBracket/selectBracketSlice";
import { leagueSeasonCategoryValue } from "../../../../features/selectDivision/selectDivisionSlice";
import {
  activeGameNumberValue,
  activeRoundValue,
  addLeagueMatchup,
  bottomSheetSelectTeamOpenValue,
  closeBottomSheet,
  leagueMatchupsValue,
  updateMatchup,
  updateTeamMatchup,
} from "../../../../features/selectMatchups/selectMatchupsSlice";

const BottomSheetSelectTeam = ({ bottomSheetModalRef, activeTeam }) => {
  const dispatch = useDispatch();
  const [teams, setTeams] = useState([]);
  const [sortBy, setSortBy] = useState("Unscheduled");
  const bottomSheetSelectTeamOpen = useSelector(bottomSheetSelectTeamOpenValue);
  const activeRound = useSelector(activeRoundValue);
  const bracket = useSelector(bracketValue);
  const activeGameNumber = useSelector(activeGameNumberValue);
  const leagueMatchups = useSelector(leagueMatchupsValue);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);

  const { mutateAsync: fetchLeagueParticipantsMutation } = useMutation({
    mutationFn: fetchLeagueParticipants,
    onSuccess: (data) => {
      let teams = data;
      let teamsArr = [];
      for (let i = 0; i < teams.length; i++) {
        teamsArr.push({
          name: teams[i].team_profile.name,
          league_participant_id: teams[i].id,
        });
      }
      setTeams(teamsArr);
    },
  });

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };

  const handleFetchLeagueParticipants = async () => {
    if (!leagueSeasonCategory && !bracket) return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      bracket_id: bracket ? bracket.id : null,
      matchup_sort_by: sortBy,
      league_rounds: activeRound,
    };

    try {
      await fetchLeagueParticipantsMutation(params);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  useEffect(() => {
    if (bottomSheetSelectTeamOpen) {
      handleFetchLeagueParticipants();
    }
  }, [sortBy, bottomSheetSelectTeamOpen]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.matchupButtonContainer}
      onPress={() => handleSelectTeam(item)}
    >
      <View style={styles.teamNameContainer}>
        <Text style={styles.teamNameText} numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleBottomSheetDismiss = () => {
    dispatch(closeBottomSheet());
  };

  const handleSelectTeam = (item) => {
    if (leagueMatchups.hasOwnProperty(activeGameNumber)) {
      dispatch(
        updateTeamMatchup({ key: activeGameNumber, item, team: activeTeam })
      );
    } else {
      dispatch(
        addLeagueMatchup({
          [activeGameNumber]: {
            date_and_time: null,
            matchup: item,
          },
        })
      );
    }

    bottomSheetModalRef.current?.dismiss();
    dispatch(closeBottomSheet());
    handleFetchLeagueParticipants();
  };

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={1}
        animatedIndex={{
          value: 1,
        }}
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["30%", "100%"]}
      backdropComponent={renderBackdrop}
      onDismiss={() => handleBottomSheetDismiss()}
    >
      <View style={styles.teamsContainer}>
        <Text style={styles.teamsText}>Teams</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={teams}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetSelectTeam;
