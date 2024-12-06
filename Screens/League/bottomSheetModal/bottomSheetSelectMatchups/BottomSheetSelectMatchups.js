import { View, TouchableOpacity, Text, FlatList } from "react-native";
import styles from "./bottomSheetSelectMatchups.style";
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
  bottomSheetOpenValue,
  closeBottomSheet,
  leagueMatchupsValue,
  updateMatchup,
} from "../../../../features/selectMatchups/selectMatchupsSlice";

const options = ["Unscheduled", "Scheduled"];

const BottomSheetSelectMatchups = ({ bottomSheetModalRef }) => {
  const dispatch = useDispatch();
  const [matchups, setMatchups] = useState([]);
  const [sortBy, setSortBy] = useState("Unscheduled");
  const bottomSheetOpen = useSelector(bottomSheetOpenValue);
  const activeRound = useSelector(activeRoundValue);
  const bracket = useSelector(bracketValue);
  const activeGameNumber = useSelector(activeGameNumberValue);
  const leagueMatchups = useSelector(leagueMatchupsValue);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);

  const { mutateAsync: fetchLeagueParticipantsMutation } = useMutation({
    mutationFn: fetchLeagueParticipants,
    onSuccess: (data) => {
      let teams = data;
      let matchups = [];
      for (let i = 0; i < teams.length; i++) {
        for (let j = i + 1; j < teams.length; j++) {
          matchups.push({
            team1: {
              name: teams[i].team_profile.name,
              league_participant_id: teams[i].id,
            },
            team2: {
              name: teams[j].team_profile.name,
              league_participant_id: teams[j].id,
            },
          });
        }
      }

      setMatchups(matchups);
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
    if (bottomSheetOpen) {
      handleFetchLeagueParticipants();
    }
  }, [sortBy, bottomSheetOpen]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.matchupButtonContainer}
      onPress={() => handleSelectMatchup(item)}
    >
      <View style={styles.teamNameContainer}>
        <Text style={styles.teamNameText} numberOfLines={1}>
          {item.team1.name}
        </Text>
      </View>
      <View style={styles.vsContainer}>
        <Text style={styles.vsText}>vs</Text>
      </View>
      <View style={styles.teamNameContainer}>
        <Text style={styles.teamNameText} numberOfLines={1}>
          {item.team2.name}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleBottomSheetDismiss = () => {
    dispatch(closeBottomSheet());
  };

  const handleSelectMatchup = (item) => {
    if (leagueMatchups.hasOwnProperty(activeGameNumber)) {
      dispatch(updateMatchup({ key: activeGameNumber, matchup: item }));
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
      <View style={styles.matchupsContainer}>
        <Text style={styles.matchupsText}>Match Ups</Text>
      </View>
      <View style={styles.optionsContainer}>
        {options?.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => handleSortBy(item)}
            style={styles.optionButton(item, sortBy)}
          >
            <View>
              <Text style={styles.optionText(item, sortBy)}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <FlatList
          data={matchups}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheetSelectMatchups;
