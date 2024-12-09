import { useContext, useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./basicInfoCard.style";
import { useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../../../../../context/AuthContext";
import { useProfileData } from "../../../../../../../hooks/useProfileData";

const BasicInfoCard = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { userToken, logout } = useContext(AuthContext);
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    if (profile.birthday) {
      var today = new Date();
      var birthDate = new Date(profile.birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age);
    }
  };

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useProfileData(userToken);

  useEffect(() => calculateAge());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.playerDetailsText}>Basic Info</Text>
        <View style={styles.editContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditBasicInfo")}
          >
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.detailsLabelText}>Gender</Text>
          <Text
            style={
              profile.gender == null
                ? styles.nullDetailsText
                : styles.detailsText
            }
          >
            {profile.gender == null ? "Edit gender" : profile.gender}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsLabelText}>Birthday</Text>
          <Text
            style={
              profile.birthday == null
                ? styles.nullDetailsText
                : styles.detailsText
            }
          >
            {profile.birthday == null ? "--------" : profile.birthday}
          </Text>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text style={styles.detailsLabelText}>Age</Text>
          <Text style={age == 0 ? styles.nullDetailsText : styles.detailsText}>
            {age == 0 ? "--" : age}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BasicInfoCard;
