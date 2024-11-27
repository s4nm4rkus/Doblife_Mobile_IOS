import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./statusTransitionInstructionsModal.style";

const StatusTransitionInstructionsModal = ({
  isVisible,
  handleOkay,
  playerCurrentTeam,
  newTeam,
  isCanceled,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              You are currently listed as an active player on the{" "}
              {playerCurrentTeam} team. However, you have joined {newTeam}, but
              your status with this team will remain inactive until you complete
              the following steps: To activate your status with {newTeam},
              please inform the league personnel, or the team owner/coach of
              your previous team to switch your status to inactive on their
              roster. Once this is done, your status will be updated to active
              on {newTeam}.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.confirmButtonContainer}
              onPress={() => handleOkay()}
            >
              <Text style={styles.confirmText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StatusTransitionInstructionsModal;
