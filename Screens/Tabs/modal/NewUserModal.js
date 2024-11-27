import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import styles from "./modal.style";
import { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NewUserModal = ({ messageKey, visible, onClose }) => {
  const [showModal, setShowModal] = useState(visible);
  const [isChecked, setIsChecked] = useState(visible);

  useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  const handlePress = async (data) => {
    try {
      if (isChecked) {
        await AsyncStorage.setItem(messageKey, "true");
      }

      if (data == "setup") {
        navigation.navigate("Menu");
      }
      setShowModal(false);
      onClose();
    } catch (error) {
      console.error("Error saving dismissed status to AsyncStorage:", error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    setShowModal(false);
    onClose(); // Optional: Handle modal close action.
  };

  return (
    <Modal transparent={true} visible={showModal} onRequestClose={handleClose}>
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.startByText}>START BY</Text>
              <Text style={styles.creatingText}>CREATING</Text>
              <Text style={styles.yourProfileText}>YOUR PROFILE</Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/logo-icon-01.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.modalDetailsContainer}>
            <Text style={styles.detailsText}>
              Personalize your account details to enhance your platform
              experience. Make sure to use your REAL FULL NAME, BIRTHDAY,
              BIRTHPLACE, HOME ADDRESS, LIVING ADDRESS, and VOTING ADDRESS while
              using the DOBLIFE app, as this is required for verification by the
              league personnel when you join a league. Click the 'Setup Profile'
              button below to get started. Alternatively, if you prefer to set
              up your profile later, you can click the 'Skip for now' button.
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.setupButton}
              onPress={() => handlePress("setup")}
            >
              <Text style={styles.setupButtonText}>SETUP PROFILE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => handlePress("skip")}
            >
              <Text style={styles.skipButtonText}>Skip for now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkBoxContainer}>
            <Checkbox
              status={isChecked ? "checked" : "unchecked"}
              onPress={handleCheckboxChange}
            />
            <Text style={styles.checkBoxText}>
              Do not show this message again.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewUserModal;
