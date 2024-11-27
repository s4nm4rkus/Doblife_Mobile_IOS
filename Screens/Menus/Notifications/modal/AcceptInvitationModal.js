import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./acceptInvitationModal.style";
import { useSelector } from "react-redux";
import { teamNameValue } from "../../../../features/notifications/notificationsSlice";

const AcceptInvitationModal = ({
  isVisible,
  isCanceled,
  navigation,
  handleAccept,
}) => {
  const teamName = useSelector(teamNameValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <Text style={styles.acceptInvitationText}>Accept Invitation</Text>
            <Text style={styles.questionText}>
              Are you sure you want to join
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
              style={styles.acceptButtonContainer}
              onPress={() => handleAccept()}
            >
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AcceptInvitationModal;
