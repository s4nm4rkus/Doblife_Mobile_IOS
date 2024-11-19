import { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./lottie.style";

const LottieComponent = ({ message, lottieUrl }) => {
  return (
    <View style={styles.lottieContainer}>
      <LottieView
        autoPlay
        style={styles.lottieStyle}
        loop={true}
        source={lottieUrl}
      />
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

export default LottieComponent;
