import { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./playerDetailsCard.style";
import { AuthContext } from "../../../../context/AuthContext";
import { useProfileData } from "../../../../hooks/useProfileData";
import { useDispatch } from "react-redux";
import {
  setHeight,
  setNaturePosition,
  setSecondaryPosition,
} from "../../../../features/profile/editPlayerDetails/editPlayerDetailsSlice";

const PlayerDetailsCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useProfileData(userToken);

  const handleEditPlayerDetails = () => {
    dispatch(
      setNaturePosition(
        profile.nature_position_item != null
          ? profile.nature_position_item.id
          : null
      )
    );
    dispatch(
      setSecondaryPosition(
        profile.secondary_position_item != null
          ? profile.secondary_position_item.id
          : null
      )
    );
    dispatch(setHeight(profile.height));
    navigation.navigate("EditPlayerDetails");
  };

  const renderPlayerPosition = () => {
    let positions = [];

    if (
      profile.nature_position_item == null &&
      profile.secondary_position_item == null
    ) {
      return <Text style={styles.nullDetailsText}>No position</Text>;
    }

    if (profile.nature_position_item != null)
      positions.push(profile.nature_position_item.name);
    if (profile.secondary_position_item != null)
      positions.push(profile.secondary_position_item.name);

    return (
      <Text style={styles.detailsText}>{positions.slice().join("-")}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.playerDetailsText}>PLAYER DETAILS</Text>
        <View style={styles.editContainer}>
          <TouchableOpacity onPress={() => handleEditPlayerDetails()}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.detailsLabelText}>Position</Text>
          {renderPlayerPosition()}
        </View>
        <View>
          <Text style={styles.detailsLabelText}>Height</Text>
          <View style={styles.heightLabelContainer}>
            <Text
              style={
                profile.height == null
                  ? styles.nullHeightText
                  : styles.heightText
              }
            >
              {profile.height == null ? "00" : profile.height}
            </Text>
            <Text style={styles.measureText}>ft</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerDetailsCard;
