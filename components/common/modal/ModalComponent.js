import { useState, useEffect, useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './modal.style';

const ModalComponent = ({ isVisible, isCanceled, isAccepted, message, lottieUrl }) => {
  return (
    <Modal
        visible={isVisible}
        transparent={true}
        animationType="fade"
    > 
        <View style={styles.overlay}/>
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.lottieContainer}>
                    <LottieView
                        autoPlay
                        style={styles.lottieStyle}
                        loop={true}
                        source={lottieUrl}
                    />
                </View>
                <Text style={styles.modalText}>
                    {message}
                </Text>
                <View style={styles.modalButtons}>
                    <TouchableOpacity
                    style={[styles.modalButton, styles.yesButton]}
                        onPress={isAccepted}
                    >
                    <Text style={styles.yesButtonText}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.modalButton, styles.noButton]}
                        onPress={isCanceled}
                    >
                    <Text style={styles.modalButtonText}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ModalComponent