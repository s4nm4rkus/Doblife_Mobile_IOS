import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./successJoinTeam.style";
import { useDispatch, useSelector } from "react-redux";
import {
  newTeamValue,
  setIsSuccessJoinTeamVisible,
} from "../../../features/modal/modalSlice";

const SuccessJoinTeamModal = ({ isVisible, isCanceled, leave }) => {
  const dispatch = useDispatch();
  const newTeam = useSelector(newTeamValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              You've successfully joined {newTeam}, You'll be notified when the
              Team accepted your request.
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.okayButton]}
              onPress={() => dispatch(setIsSuccessJoinTeamVisible(false))}
            >
              <Text style={styles.okayButtonText}>OKAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessJoinTeamModal;
