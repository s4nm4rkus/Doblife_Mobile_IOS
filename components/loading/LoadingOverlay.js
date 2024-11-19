import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import styles from './loadingOverlay.style';

const LoadingOverlay = ({ visible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingOverlay;