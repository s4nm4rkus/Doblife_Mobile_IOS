import { useState, useEffect, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./modal.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ModalComponent = ({ isVisible, isCanceled, handleContinue, data }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => isCanceled()}>
              <FontAwesomeIcon icon={faXmark} size={hp(3)} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.modalText}>Confirmation</Text>
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              Are you sure you want to create
            </Text>
            <Text style={styles.questionTeamNameText}>
              {" "}
              {data.team_name} | {data.acronym}{" "}
              <Text style={styles.questionTeamText}>team</Text>
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.yesButton]}
              onPress={handleContinue}
            >
              <Text style={styles.yesButtonText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
