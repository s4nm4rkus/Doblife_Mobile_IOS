import { Text, TouchableHighlight, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Iconify } from "react-native-iconify";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./joinALeague.style";
import Header from "./header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCirclePlus,
  faPeopleGroup,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { resetAll } from "../../features/selectTeam/selectTeamSlice";

const JoinALeagueScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [isCreateTeamPress, setIsCreateTeamPress] = useState(false);
  const [isJoinTeamPress, setIsJoinTeamPress] = useState(false);
  const [isSelectTeamPress, setIsSelectTeamPress] = useState(false);

  const handleSelectTeam = () => {
    dispatch(resetAll());
    navigation.navigate("SelectTeam");
  };

  const handleCreateTeam = () => {
    dispatch(resetAll());
    navigation.navigate("CreateTeam");
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={styles.cardContainer}
          underlayColor="#c42414"
          onPress={() => handleCreateTeam()}
          onHideUnderlay={() => setIsCreateTeamPress(false)}
          onShowUnderlay={() => setIsCreateTeamPress(true)}
        >
          <>
            <View style={styles.circlePlusIconContainer}>
              <FontAwesomeIcon
                icon={faCirclePlus}
                size={hp(8)}
                color={isCreateTeamPress ? "white" : "#c42414"}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text
                style={
                  isCreateTeamPress ? styles.titleTextWhite : styles.titleText
                }
              >
                CREATE TEAM
              </Text>
              <Text
                style={
                  isCreateTeamPress
                    ? styles.descriptionTextWhite
                    : styles.descriptionText
                }
              >
                Create your own team to join in a league
              </Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cardContainer}
          underlayColor="#c42414"
          onPress={() => navigation.navigate("JoinTeam")}
          onHideUnderlay={() => setIsJoinTeamPress(false)}
          onShowUnderlay={() => setIsJoinTeamPress(true)}
        >
          <>
            <View style={styles.righToBracketIconContainer}>
              <FontAwesomeIcon
                icon={faRightToBracket}
                size={hp(8)}
                color={isJoinTeamPress ? "white" : "#c42414"}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text
                style={
                  isJoinTeamPress ? styles.titleTextWhite : styles.titleText
                }
              >
                JOIN TEAM
              </Text>
              <Text
                style={
                  isJoinTeamPress
                    ? styles.descriptionTextWhite
                    : styles.descriptionText
                }
              >
                Join a team via code
              </Text>
            </View>
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cardContainer}
          underlayColor="#c42414"
          onPress={() => handleSelectTeam()}
          onHideUnderlay={() => setIsSelectTeamPress(false)}
          onShowUnderlay={() => setIsSelectTeamPress(true)}
        >
          <>
            <View style={styles.peopleGroupIconContainer}>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                size={hp(8)}
                color={isSelectTeamPress ? "white" : "#c42414"}
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text
                style={
                  isSelectTeamPress ? styles.titleTextWhite : styles.titleText
                }
              >
                SELECT TEAM
              </Text>
              <Text
                style={
                  isSelectTeamPress
                    ? styles.descriptionTextWhite
                    : styles.descriptionText
                }
              >
                Select your team to join the league
              </Text>
            </View>
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default JoinALeagueScreen;
