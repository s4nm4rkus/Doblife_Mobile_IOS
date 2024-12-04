import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./selectedTeams.style";
import { checkImageUrl } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  addToTeamRosters,
  removeSelectedTeam,
  selectedTeamsValue,
} from "../../../features/selectTeam/selectTeamSlice";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const SelectedTeams = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedTeams = useSelector(selectedTeamsValue);

  const handleRemoveSelectedTeam = (item) => {
    dispatch(removeSelectedTeam(item.id));
    dispatch(addToTeamRosters(item));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.selectedTeamsText}>Selected Teams</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          {selectedTeams?.map((item, index) => (
            <View
              style={styles.teamLogoContainer}
              onStartShouldSetResponder={() => true}
              key={index}
            >
              <View style={styles.teamLogoWrapper}>
                <TouchableOpacity
                  onPress={() => handleRemoveSelectedTeam(item)}
                  style={styles.iconWrapper}
                  hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size={hp(1.6)}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <View style={styles.teamLogoImageWrapper}>
                  {item.league_participant.team_profile
                    .default_team_profile_pic ? (
                    <Image
                      source={{
                        uri: item.league_participant.team_profile
                          .default_team_profile_pic.image,
                      }}
                      resizeMode="contain"
                      style={styles.teamLogo}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                      resizeMode="contain"
                      style={styles.teamLogo}
                    />
                  )}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectedTeams;
