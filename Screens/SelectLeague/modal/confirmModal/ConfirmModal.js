import { useState, useEffect, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./confirmModal.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FONTSIZE } from "../../../../constants/theme";

const ConfirmModal = ({ isVisible, isCanceled, join, leagueName }) => {
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.modalText}>Confirm</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text>
              <Text style={{ fontSize: FONTSIZE.large }}>
                Are you sure you want to join
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: FONTSIZE.large }}>
                {" "}
                {leagueName}?
              </Text>
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.yesButton]}
              onPress={join}
            >
              <Text style={styles.yesButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;
