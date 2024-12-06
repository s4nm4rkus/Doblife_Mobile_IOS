import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./openLeagueModal.style";
import { useSelector } from "react-redux";
import { teamNameValue } from "../../../../features/notifications/notificationsSlice";

const OpenLeagueModal = ({ isVisible, isCanceled, handleClose }) => {
  const teamName = useSelector(teamNameValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Close League</Text>
            <Text style={styles.questionText}>
              Are you sure you want to <Text>Close</Text> your League?
            </Text>
            <Text style={styles.descriptionText}>
              Closing your league will temporarily disable the ability for
              participants to join along with the games to be posponed.
            </Text>
            <Text style={styles.description2Text}>
              You can still put your league into Active.
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
              onPress={() => handleClose()}
            >
              <Text style={styles.acceptText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OpenLeagueModal;
