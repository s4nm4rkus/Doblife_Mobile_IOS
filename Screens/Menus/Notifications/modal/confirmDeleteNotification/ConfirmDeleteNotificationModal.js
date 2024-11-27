import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./confirmDeleteNotificationModal.style";
import { useSelector } from "react-redux";

const ConfirmDeleteNotificationModal = ({
  isVisible,
  isCanceled,
  navigation,
  handleDelete,
}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Delete Notification</Text>
            <Text style={styles.questionText}>
              Are you sure you want to delete this notification? This action
              cannot be undone once deleted.
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
              style={styles.deleteButtonContainer}
              onPress={() => handleDelete()}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteNotificationModal;
