import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./resgister.style";

import Stepper from "../../../components/stepper/Stepper";

const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Stepper navigation={navigation} />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
