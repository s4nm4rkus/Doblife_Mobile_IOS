import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./recruitmentStatusConfirmationModal.style";

const RecruitmentStatusConfirmationModal = ({
  isVisible,
  handleOkay,
  playerName,
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
              {playerName} is currently active on {playerCurrentTeam}. After
              recruitment and accepting your offer, {playerName} will be
              eligible to join {newTeam}. However, the player's status with your
              team will remain INACTIVE until the following steps are completed:
              {playerName} must inform league personnel or the previous team's
              owner/coach to switch their status to inactive. Once this is done,
              the player's status will be updated to ACTIVE on your team.
            </Text>
            <Text style={styles.infoText}>
              Do you want to proceed with recruiting {playerName}?
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.cancelButtonContainer}
              onPress={() => isCanceled()}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.confirmButtonContainer}
              onPress={() => handleOkay()}
            >
              <Text style={styles.confirmText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RecruitmentStatusConfirmationModal;
