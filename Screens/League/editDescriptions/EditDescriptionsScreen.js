import {
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editDescriptions.style";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { playerIDValue } from "../../../features/dropPlayer/dropPlayerSlice";
import { updatePlayerDetails } from "../../../api/userApi";
import { updateDescriptions } from "../../../api/leagueApi";
import { leagueIDValue } from "../../../features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice";
import {
  leagueDescriptionValue,
  seasonDescriptionValue,
  setLeagueDescription,
  setSeasonDescription,
} from "../../../features/leaguesEditDescriptions/leaguesEditDescriptionsSlice";
import Header from "./header/Header";
import { leagueSeasonCategoryValue } from "../../../features/selectDivision/selectDivisionSlice";

const EditDescriptionsScreen = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const dispatch = useDispatch();
  const leagueSeasonCategory = useSelector(leagueSeasonCategoryValue);
  const leagueID = useSelector(leagueIDValue);
  const leagueDescription = useSelector(leagueDescriptionValue);
  const seasonDescription = useSelector(seasonDescriptionValue);

  const { mutateAsync: updateDescriptionsMutation } = useMutation({
    mutationFn: updateDescriptions,
    onSuccess: (data) => {},
  });

  const handleUpdateDescriptions = async () => {
    const params = {
      league_id: leagueID,
      league_season_id: leagueSeasonCategory.league_season_id,
      league_description: leagueDescription,
      season_description: seasonDescription,
    };

    try {
      await updateDescriptionsMutation({ userToken, params });
      navigation.navigate("League");
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <Header
          navigation={navigation}
          save={handleUpdateDescriptions}
          title="Descriptions"
        />
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>League Description</Text>
            <TextInput
              value={leagueDescription}
              style={styles.descriptionInput}
              onChangeText={(text) => dispatch(setLeagueDescription(text))}
              multiline
              numberOfLines={10}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>Season Description</Text>
            <TextInput
              value={seasonDescription}
              style={styles.descriptionInput}
              onChangeText={(text) => dispatch(setSeasonDescription(text))}
              multiline
              numberOfLines={10}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EditDescriptionsScreen;
