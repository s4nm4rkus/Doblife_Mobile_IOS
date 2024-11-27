import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./declineInvitationModal.style";
import { useSelector } from "react-redux";
import { teamNameValue } from "../../../../../features/notifications/notificationsSlice";

const DeclineInvitationModal = ({
  isVisible,
  isCanceled,
  navigation,
  handleDecline,
}) => {
  const teamName = useSelector(teamNameValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Decline Invitation</Text>
            <Text style={styles.questionText}>
              Are you sure you want to decline
            </Text>
            <Text style={styles.questionText}>
              <Text style={styles.teamNameText}>{teamName}</Text> team?
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
              style={styles.declineButtonContainer}
              onPress={() => handleDecline()}
            >
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeclineInvitationModal;
