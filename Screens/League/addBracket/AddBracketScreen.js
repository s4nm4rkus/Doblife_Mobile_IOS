import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./addBracket.style";
import Header from "./header/Header";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import {
  faClipboardCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { leagueSeasonCategoryValue } from "../../../features/selectDivision/selectDivisionSlice";
import {
  removeTeamParticipant,
  selectedTeamParticipantsValue,
  setSelectedTeamParticipants,
  setTeamParticipants,
  teamParticipantsValue,
} from "../../../features/addBracket/addBracketSlice";
import { useMutation } from "@tanstack/react-query";
import { fetchLeagueParticipants } from "../../../api/leagueParticipantApi";
import { createBracket } from "../../../api/bracketApi";

const AddBracketScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const [bracketName, setBracketName] = useState(null);
  const [search, setSearch] = useState(null);
  const [errors, setErrors] = useState({});
  const teamParticipants = useSelector(teamParticipantsValue);
  const selectedTeamParticipants = useSelector(selectedTeamParticipantsValue);

  const { mutateAsync: fetchLeagueParticipantsMutation } = useMutation({
    mutationFn: fetchLeagueParticipants,
    onSuccess: (data) => {
      dispatch(setTeamParticipants(data));
    },
  });

  const { mutateAsync: createBracketMutation } = useMutation({
    mutationFn: createBracket,
    onSuccess: (data) => {
      handleFetchLeagueParticipants();
      dispatch(setSelectedTeamParticipants([]));
      navigation.navigate("League");
    },
  });

  const handleFetchLeagueParticipants = async () => {
    const params = {
      league_season_category_id: leagueSeasonCategory.value,
      has_no_bracket: true,
    };

    try {
      await fetchLeagueParticipantsMutation(params);
    } catch (e) {
      console.log(e);
    }
  };

  const handleAddBracket = async () => {
    let errors = {};

    if (!bracketName) errors.bracket_name = "Bracket Name is required";

    setErrors(errors);

    if (Object.keys(errors).length !== 0) return;

    let ids = selectedTeamParticipants.map((participant) => participant.id);

    const params = {
      name: bracketName,
      league_season_category_id: leagueSeasonCategory.value,
      league_participants_ids: ids,
    };

    try {
      await createBracketMutation({ params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleSelectTeam = (item) => {
    dispatch(removeTeamParticipant(item.id));
    dispatch(setSelectedTeamParticipants(item));
  };

  const handleOpenSelectedTeams = (item) => {
    navigation.navigate("SelectedTeams");
  };

  const removeBracketNameError = () => {
    let errorsObj = errors;

    if (errorsObj["bracket_name"] === undefined) return;

    delete errorsObj.bracket_name;

    setErrors((error) => {
      const { bracket_name, ...errors } = error;

      return errors;
    });
  };

  useEffect(() => {
    if (leagueSeasonCategory) {
      handleFetchLeagueParticipants();
    }
  }, [leagueSeasonCategory]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectTeam(item)}>
      <View style={styles.participantsContainer}>
        <View style={styles.teamNameValueContainer}>
          <View style={styles.teamParticipantContainer}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text>
              <Text style={styles.teamAcronymValueText}>
                {item.team_profile.acronym} |{" "}
              </Text>
              <Text style={styles.teamNameValueText}>
                {item.team_profile.name}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} save={handleAddBracket} title="Back" />
        <View style={styles.bracketNameContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.bracketNameText}>
              Bracket Name <Text style={styles.asterisk}>*</Text>
            </Text>
            <View style={styles.textInputContainer}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inInput}
                  value={bracketName}
                  onChangeText={(text) => setBracketName(text)}
                  onFocus={() => removeBracketNameError()}
                />
              </View>
            </View>
            {errors.bracket_name ? (
              <Text style={styles.errorText}>{errors.bracket_name}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.teamsContainer}>
          <View style={styles.titleContainer}>
            <View>
              <Text style={styles.teamsText}>Teams</Text>
            </View>
            <View style={styles.selectedTeamsContainer}>
              <Text style={styles.selectedTeamsText}>Selected Teams</Text>
              <TouchableOpacity onPress={() => handleOpenSelectedTeams()}>
                <View style={styles.badgeContainer}>
                  <FontAwesomeIcon icon={faClipboardCheck} size={hp(3)} />
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {selectedTeamParticipants.length}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.teamsCardContainer}>
            <View style={styles.searchContainer}>
              <View style={styles.textInputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.inInput}
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    placeholder="Search"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size={hp(2.2)}
                    style={styles.searchIcon}
                  />
                </View>
              </View>
            </View>
            <View style={styles.selectTeamsContainer}>
              {teamParticipants.length != 0 ? (
                <FlatList
                  data={teamParticipants}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  showsVerticalScrollIndicator={false}
                ></FlatList>
              ) : (
                <Text>No Participants</Text>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddBracketScreen;
