import { View, Text, TouchableOpacity, Modal, Image } from "react-native";
import styles from "./changeProfileImage.style";

const ChangeProfileImageModal = ({
  isVisible,
  isCanceled,
  navigation,
  image,
}) => {
  const handleChangeProfileImage = () => {
    isCanceled();
    navigation.navigate("ChangeProfilePicture");
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.overlay} />
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.teamLogoTextContainer}>
            <Text style={styles.teamLogoText}>Profile Picture</Text>
          </View>
          <View style={styles.teamLogoContainer}>
            <Image
              source={{ uri: image }}
              resizeMode="contain"
              style={styles.teamLogo}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.cancelButtonContainer}
              onPress={() => isCanceled()}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.changeButtonContainer}
              onPress={() => handleChangeProfileImage()}
            >
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ChangeProfileImageModal;
