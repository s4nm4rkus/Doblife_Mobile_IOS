import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./deleteProfileModal.style";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const DeleteProfileModal = ({ isVisible, isCanceled, navigation }) => {
  const { deleteUser } = useContext(AuthContext);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <Text style={styles.deleteProfileText}>Delete your Profile?</Text>
            <Text style={styles.deleteProfileDescriptionText}>
              Delete process will take 30 days and will be automatically deleted
              if the user does not log in within 30 days.
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
              onPress={() => deleteUser(navigation)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteProfileModal;
