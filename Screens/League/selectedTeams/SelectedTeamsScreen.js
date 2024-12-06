import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./selectedTeams.style";
import Header from "./header/Header";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import {
  faClipboardCheck,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import {
  addToTeamParticipants,
  removeAllSelectedTeamParticipant,
  removeSelectedTeamParticipant,
  selectedTeamParticipantsValue,
} from "../../../features/addBracket/addBracketSlice";

const SelectedTeamsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedTeamParticipants = useSelector(selectedTeamParticipantsValue);

  const handleRemoveSelectedTeam = (item) => {
    dispatch(removeSelectedTeamParticipant(item.id));
    dispatch(addToTeamParticipants(item));
  };

  const handleRemoveAllSelectedTeam = () => {
    dispatch(removeAllSelectedTeamParticipant());
  };

  const renderItem = ({ item }) => (
    <View style={styles.participantsContainer}>
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
          <Text style={styles.teamNameValueText}>{item.team_profile.name}</Text>
        </Text>
      </View>
      <View style={styles.removeContainer}>
        <TouchableOpacity onPress={() => handleRemoveSelectedTeam(item)}>
          <FontAwesomeIcon
            icon={faXmark}
            size={hp(3)}
            style={styles.removeIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Back" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Selected Teams</Text>
        <View>
          <TouchableOpacity onPress={() => handleRemoveAllSelectedTeam()}>
            <Text style={styles.editText}>Delete All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.teamsContainer}>
        <View style={styles.teamsCardContainer}>
          <View style={styles.selectTeamsContainer}>
            <FlatList
              data={selectedTeamParticipants}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            ></FlatList>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectedTeamsScreen;
