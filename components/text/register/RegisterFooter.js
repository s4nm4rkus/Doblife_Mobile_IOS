import { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./registerFooter.style";
import { COLORS, FONT } from "../../../constants/theme";

const RegisterFooter = ({
  onPressNext,
  text,
  onPressLogin,
  isTextVisible,
  isChecked = true,
}) => {
  return (
    <>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={onPressNext}
          disabled={!isChecked}
        >
          <Text style={styles.navigationButtonText}>{text}</Text>
        </TouchableOpacity>
      </View>

      {isTextVisible ? (
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Already have an account?</Text>
          <TouchableOpacity onPress={onPressLogin}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default RegisterFooter;
