import { View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import styles from "./accountSettings.style";
import Header from "./header/Header";
import { useDispatch } from "react-redux";
import DeleteProfileModal from "./modal/DeleteProfileModal";

const AccountSettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isBusy, setBusy] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenDeleteProfileModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      {isBusy ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <ActivityIndicator size="large" color="#9b001c" />
        </View>
      ) : (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <View style={styles.accountSettingsTextContainer}>
            <Text style={styles.accountSettingsText}>Account Settings</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteProfileContainer}
            onPress={() => handleOpenDeleteProfileModal()}
          >
            <Text style={styles.deleteProfileText}>Delete Profile</Text>
            <Text style={styles.deleteProfileDescriptionText}>
              This allows users to permanently remove their account and all
              associated data from the app.
            </Text>
          </TouchableOpacity>
          <DeleteProfileModal
            isVisible={isModalVisible}
            isCanceled={() => setIsModalVisible(false)}
            navigation={navigation}
          />
        </View>
      )}
    </>
  );
};

export default AccountSettingsScreen;
