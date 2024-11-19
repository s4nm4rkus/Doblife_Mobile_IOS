import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./modal.style";
import { useEffect } from "react";
import { isVisibleValue } from "../../../../features/auth/authSlice";
import { useSelector } from "react-redux";

const ModalComponent = ({ isCanceled, email }) => {
  const isVisible = useSelector(isVisibleValue);

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.instructionSentText}>Instructions Sent</Text>
          </View>

          <View>
            {/* <Text style={styles.instructionText}>We sent instruction to change your password to <Text style={styles.emailText}>{email}</Text>. please check your inbox.</Text> */}
            <Text style={styles.instructionText}>
              Instructions to reset your password have been sent to your
              registered email address. Please check your inbox.
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.okayButton]}
              onPress={() => isCanceled()}
            >
              <Text style={styles.okayText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
