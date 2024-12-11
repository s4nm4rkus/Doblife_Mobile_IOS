import { useState, useEffect, useContext, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./participantsCard.style";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { leagueSeasonCategoryValue } from "../../../../../../../features/selectDivision/selectDivisionSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEllipsisVertical,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import BottomSheetSortByParticipants from "../../../../../bottomSheetModal/bottomSheetSortByParticipants/BottomSheetSortByParticipants";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { bracketValue } from "../../../../../../../features/selectBracket/selectBracketSlice";
import { fetchLeagueParticipants } from "../../../../../../../api/leagueParticipantApi";
import { sortByValue } from "../../../../../../../features/sortParticipants/sortParticipantsSlice";
import {
  setLeagueParticipantID,
  setLeagueParticipantIDs,
  setTeam,
} from "../../../../../../../features/leagueTeam/leagueTeamSlice";
import { AuthContext } from "../../../../../../../context/AuthContext";

const ParticipantsCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const bracket = useSelector(bracketValue);
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const sortBy = useSelector(sortByValue);
  const [leagueParticipants, setLeagueParticipants] = useState([]);
  const { userToken } = useContext(AuthContext);

  const { mutateAsync: fetchLeagueParticipantsMutation } = useMutation({
    mutationFn: fetchLeagueParticipants,
    onSuccess: (data) => {
      setLeagueParticipants(data);
    },
  });

  const handleFetchLeagueParticipants = async () => {
    if (!leagueSeasonCategory && !bracket) return;

    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      bracket_id: bracket ? bracket.id : null,
      sortBy: sortBy,
    };
    try {
      await fetchLeagueParticipantsMutation({ params, userToken });
    } catch (e) {
      console.error("Error fetching league participants:", e);
    }
  };

  const handleGoToLeagueTeam = (item) => {
    dispatch(setTeam(item.team_profile));
    dispatch(
      setLeagueParticipantIDs(
        item.team_profile.league_participants.map(
          (participant) => participant.id
        )
      )
    );
    dispatch(setLeagueParticipantID(item.id));
    navigation.navigate("LeagueTeam");
  };

  useEffect(() => {
    handleFetchLeagueParticipants();
  }, [leagueSeasonCategory, bracket, sortBy]);

  const bottomSheetModalRef = useRef(BottomSheetModal);

  const handleOpenBottomSheet = () => {
    bottomSheetModalRef.current?.present();
  };

  const data = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Alice", age: 30, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 28, city: "Chicago" },
    // Add more data as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.participantsContainer}>
      <View style={styles.rankValueContainer}>
        <Text style={styles.rankValueText}>--</Text>
      </View>

      <View style={styles.teamNameValueContainer}>
        <TouchableOpacity
          style={styles.teamParticipantContainer}
          onPress={() => handleGoToLeagueTeam(item)}
        >
          {item.team_profile.default_team_profile_pic != null ? (
            <Image
              source={{ uri: item.team_profile.default_team_profile_pic.image }}
              resizeMode="contain"
              style={styles.logo}
            />
          ) : (
            <Image
              source={require("../../../../../../../assets/teamPlaceholders/team-placeholder-04.png")}
              resizeMode="contain"
              style={styles.logo}
            />
          )}
          <Text>
            <Text style={styles.teamAcronymValueText}>
              {item.team_profile.acronym} |{" "}
            </Text>
            <Text style={styles.teamNameValueText}>
              {item.team_profile.name}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.winContainer}>
        <Text style={styles.rankValueText}>{item.win}</Text>
      </View>
      <View style={styles.loseContainer}>
        <Text style={styles.rankValueText}>{item.loss}</Text>
      </View>
      <View style={styles.standingContainer}>
        <Text style={styles.rankValueText}>{item.standing_points}</Text>
      </View>
      <View style={styles.tieBreakerContainer}>
        <Text style={styles.rankValueText}>{item.tie_breaker_points}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => console.log("test")}>
          <FontAwesomeIcon icon={faEllipsisVertical} size={hp(2.5)} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.participantsText}>PARTICIPANTS</Text>
        <View>
          <TouchableOpacity
            onPress={() => handleOpenBottomSheet()}
            style={styles.sortByContainer}
          >
            <Text style={styles.sortByText}>Sort By</Text>
            <FontAwesomeIcon
              icon={faFilter}
              style={styles.filterIcon}
              size={hp(2.4)}
            />
          </TouchableOpacity>
        </View>
      </View>
      {leagueParticipants.length != 0 ? (
        <ScrollView horizontal>
          <FlatList
            data={leagueParticipants}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.columnHeaderContainer}>
                <View style={styles.rankContainer}>
                  <Text style={styles.headerText}>RANK</Text>
                </View>
                <View style={styles.teamNameContainer}>
                  <Text style={styles.teamNameText}>TEAM NAME</Text>
                </View>
                <View style={styles.winHeaderContainer}>
                  <Text style={styles.headerText}>WIN</Text>
                </View>
                <View style={styles.loseHeaderContainer}>
                  <Text style={styles.headerText}>LOSE</Text>
                </View>
                <View style={styles.standingHeaderContainer}>
                  <Text style={styles.headerText}>STANDING</Text>
                </View>
                <View style={styles.tieBreakerHeaderContainer}>
                  <Text style={styles.headerText}>TIE BREAKER</Text>
                </View>
                <View style={styles.actionHeaderContainer}>
                  <Text></Text>
                </View>
              </View>
            }
          ></FlatList>
        </ScrollView>
      ) : (
        <View style={styles.participantsContainer}>
          <Text style={styles.noParticipantsText}>No Participants</Text>
        </View>
      )}
      <BottomSheetSortByParticipants
        navigation={navigation}
        bottomSheetModalRef={bottomSheetModalRef}
      />
    </View>
  );
};

export default ParticipantsCard;
