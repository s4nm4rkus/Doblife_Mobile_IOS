import { Text, View, TextInput } from "react-native";
import { useState, useEffect, useContext } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./editPlayerDetails.style";
import { BASE_URL } from "../../../../utils/config";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePlayerDetails } from "../../../../api/userApi";
import Header from "../editHeader/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  heightValue,
  naturePositionValue,
  secondaryPositionValue,
  setHeight,
  setNaturePosition,
  setSecondaryPosition,
} from "../../../../features/profile/editPlayerDetails/editPlayerDetailsSlice";

const EditPlayerDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const profile = queryClient.getQueryData(["profile"]);
  const [playingPositions, setPlayingPositions] = useState([]);
  const naturePosition = useSelector(naturePositionValue);
  const secondaryPosition = useSelector(secondaryPositionValue);
  const height = useSelector(heightValue);

  const { mutateAsync: updatePlayerDetailsMutation } = useMutation({
    mutationFn: updatePlayerDetails,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const handleUpdatePlayerDetails = async () => {
    const params = {
      user_id: profile.user_id,
      height: height,
      nature_position_id: naturePosition,
      secondary_position_id: secondaryPosition,
    };

    try {
      await updatePlayerDetailsMutation({ userToken, params });
      navigation.goBack();
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: `${BASE_URL}/playing-positions`,
    };

    axios(config)
      .then((response) => {
        var count = Object.keys(response.data).length;
        let playingPositionsArr = [];
        for (var i = 0; i < count; i++) {
          playingPositionsArr.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setPlayingPositions(playingPositionsArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        save={handleUpdatePlayerDetails}
        title="Edit Player Details"
      />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Nature position</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={playingPositions}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={naturePosition}
            onChange={(item) => {
              dispatch(setNaturePosition(item.value));
            }}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Secondary position</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={playingPositions}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select"
            searchPlaceholder="Search..."
            value={secondaryPosition}
            onChange={(item) => {
              dispatch(setSecondaryPosition(item.value));
            }}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabelText}>Height</Text>
          <View style={styles.heightInputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                keyboardType="numeric"
                style={styles.inInput}
                placeholder="Type here"
                onChangeText={(text) => dispatch(setHeight(text))}
                value={height}
              />
              <Text style={styles.measureText}>ft</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditPlayerDetailsScreen;
