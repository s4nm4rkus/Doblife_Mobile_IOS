import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./selectTournamentFormatModal.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SelectTournamentFormatModal = ({
  isVisible,
  isCanceled,
  handleGenerateMatch,
}) => {
  const handleTournamentFormat = (format) => {
    isCanceled();
    handleGenerateMatch(format);
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => isCanceled()}>
              <FontAwesomeIcon icon={faXmark} size={hp(2.7)} />
            </TouchableOpacity>
          </View>
          <View style={styles.generateMatchContainer}>
            <TouchableOpacity
              style={styles.generateMatchButton}
              onPress={() => handleTournamentFormat("single round robin")}
            >
              <Text style={styles.buttonText}>Single Round Robin</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.generateMatchButton}
              onPress={() => handleTournamentFormat("single elimination")}
            >
              <Text style={styles.buttonText}>Single Elimination</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SelectTournamentFormatModal;
