import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./selectTeam.style";
import Header from "./header/Header";
import { TextInput } from "react-native-gesture-handler";
import ModalComponent from "./modal/ModalComponent";
import TeamsTable from "./teamsTable/TeamsTable";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import SelectedTeams from "./selectedTeams/SelectedTeams";
import { useDispatch, useSelector } from "react-redux";
import {
  searchValue,
  selectedTeamsValue,
  setSearch,
} from "../../features/selectTeam/selectTeamSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";

const SelectTeamScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectedTeams = useSelector(selectedTeamsValue);
  const search = useSelector(searchValue);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleSubmit = () => {
    setShowCancelModal(true);
  };

  const handleConfirm = async () => {
    setShowCancelModal(false);
    navigation.navigate("SelectLeague");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
          <View onStartShouldSetResponder={() => true}>
            <Header navigation={navigation} />
            <View style={styles.inputsContainer}>
              <View style={styles.inputContainer}>
                <View style={styles.textInputContainer}>
                  <View style={styles.inputWrapper}>
                    <TextInput
                      style={styles.inInput}
                      value={search}
                      placeholder="Search"
                      onChangeText={(text) => dispatch(setSearch(text))}
                    />
                    <View style={styles.searchIconContainer}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size={22}
                        style={{ opacity: 0.5 }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {selectedTeams.length == 0 ? null : (
                <View style={styles.selectedTeamsContainer}>
                  <SelectedTeams navigation={navigation}></SelectedTeams>
                </View>
              )}

              <View style={styles.teamsContainer}>
                <TeamsTable navigation={navigation}></TeamsTable>
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.cancelButtonContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => navigation.navigate("JoinALeague")}
                  >
                    <Text style={styles.cancelButtonText}>CANCEL</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.submitButtonContainer}>
                  <TouchableOpacity
                    onPress={() => handleSubmit()}
                    disabled={selectedTeams.length == 0}
                  >
                    <LinearGradient
                      colors={["#ca0024", "#9b001c", "#33020b"]}
                      locations={[0, 0.5, 1]}
                      style={[styles.modalButton, styles.selectButton]}
                    >
                      <Text style={styles.selectButtonText}>SELECT</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <ModalComponent
          isVisible={showCancelModal}
          isCanceled={() => setShowCancelModal(false)}
          handleContinue={handleConfirm}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SelectTeamScreen;
