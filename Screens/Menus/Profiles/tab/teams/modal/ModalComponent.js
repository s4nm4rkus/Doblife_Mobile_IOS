import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalComponent = ({ isVisible, isCanceled, leave, team }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={() => isCanceled()}>
              <FontAwesomeIcon icon={faXmark} size={hp(2.8)} color="#c42414" />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.modalText}>Leave Team</Text>
          </View>

          <View style={styles.questionContainer}>
            <Text style={{ textAlign: "center" }}>
              <Text style={styles.questionText}>
                Are you sure you want to Leave
              </Text>
              <Text style={styles.questionTeamNameText}> {team}?</Text>
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.yesButton]}
              onPress={leave}
            >
              <Text style={styles.yesButtonText}>LEAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
