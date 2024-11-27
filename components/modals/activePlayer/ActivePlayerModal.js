import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./activePlayerModal.style";
import { useDispatch, useSelector } from "react-redux";
import {
  currentTeamValue,
  newTeamValue,
} from "../../../features/modal/modalSlice";

const ActivePlayerModal = ({ isVisible, handleOkay }) => {
  const dispatch = useDispatch();
  const currentTeam = useSelector(currentTeamValue);
  const newTeam = useSelector(newTeamValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              You are currently listed as an active player on the {currentTeam}{" "}
              team. However, you have joined {newTeam}, but your status with
              this team will remain inactive until you complete the following
              steps: To activate your status with {newTeam}, please inform the
              league personnel, or the team owner/coach of your previous team to
              switch your status to inactive on their roster. Once this is done,
              your status will be updated to active on {newTeam}.
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.okayButton]}
              onPress={() => handleOkay()}
            >
              <Text style={styles.okayButtonText}>OKAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ActivePlayerModal;
