import { useState, useEffect, useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./modal.style";
import { Feather } from "@expo/vector-icons";
import { FONTSIZE } from "../../../../constants/theme";

const ModalComponent = ({ isVisible, isCanceled, handleContinue, data }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => isCanceled()}>
              <Feather name="x" size={hp(2.7)} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.modalText}>Done Recruiting</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              paddingHorizontal: 25,
            }}
          >
            <Text style={{ fontSize: FONTSIZE.large }}>
              Invitation has been sent to the Players. You will be notified if
              the players accepted your invitation
            </Text>
          </View>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.yesButton]}
              onPress={handleContinue}
            >
              <Text style={styles.yesButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
