import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { useState, useContext, useEffect } from "react";
import styles from "./leagueForm.style";
import { TextInput } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  acronymValue,
  descriptionValue,
  leagueNameValue,
  leagueTypeValue,
  setAcronym,
  setDescription,
  setLeagueName,
  setLeagueType,
} from "../../../features/createLeague/createLeagueSlice";
import { AuthContext } from "../../../context/AuthContext";
import { BASE_URL } from "../../../utils/config";
import axios from "axios";

const datas = [
  { label: "Item 1", value: "1", search: "Item 1" },
  { label: "Item 2", value: "2", search: "Item 2" },
  { label: "Item 3", value: "3", search: "Item 3" },
  { label: "Item 4", value: "4", search: "Item 4" },
  { label: "Item 5", value: "5", search: "Item 5" },
  { label: "Item 6", value: "6", search: "Item 6" },
  { label: "Item 7", value: "7", search: "Item 7" },
  { label: "Item 8", value: "8", search: "Item 8" },
];

const LeagueForm = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData(["profile"]);
  const dispatch = useDispatch();
  const leagueName = useSelector(leagueNameValue);
  const acronym = useSelector(acronymValue);
  const description = useSelector(descriptionValue);
  const leagueType = useSelector(leagueTypeValue);
  const { userToken } = useContext(AuthContext);
  const [leagueTypes, setLeagueTypes] = useState([]);
  const [errors, setErrors] = useState({});

  const removeLeagueNameError = () => {
    let errorsObj = errors;

    if (errorsObj["league_name"] === undefined) return;

    delete errorsObj.league_name;

    setErrors((error) => {
      const { league_name, ...errors } = error;

      return errors;
    });
  };

  const removeAcronymError = () => {
    let errorsObj = errors;

    if (errorsObj["acronym"] === undefined) return;

    delete errorsObj.acronym;

    setErrors((error) => {
      const { acronym, ...errors } = error;

      return errors;
    });
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BASE_URL}/league-types`,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios(config)
      .then((response) => {
        var count = Object.keys(response.data).length;
        let leagueTypesArr = [];
        for (var i = 0; i < count; i++) {
          leagueTypesArr.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setLeagueTypes(leagueTypesArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItems = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.inputsContainer} onStartShouldSetResponder={() => true}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>League Name *</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inInput}
              value={leagueName}
              onChangeText={(text) => dispatch(setLeagueName(text))}
              onFocus={() => removeLeagueNameError()}
            />
          </View>
        </View>
        {errors.league_name ? (
          <Text style={styles.errorText}>{errors.league_name}</Text>
        ) : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>Acronym *</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inInput}
              value={acronym}
              onChangeText={(text) => dispatch(setAcronym(text))}
              onFocus={() => removeAcronymError()}
            />
          </View>
        </View>
        {errors.acronym ? (
          <Text style={styles.errorText}>{errors.acronym}</Text>
        ) : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>League Type *</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={leagueTypes}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select"
          searchPlaceholder="Search..."
          value={leagueType}
          onChange={(item) => {
            dispatch(setLeagueType(item));
          }}
          renderItem={renderItems}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabelText}>Description</Text>
        <TextInput
          value={description}
          style={styles.descriptionInput}
          onChangeText={(text) => dispatch(setDescription(text))}
          multiline
          numberOfLines={10}
        />
      </View>
    </View>
  );
};

export default LeagueForm;
