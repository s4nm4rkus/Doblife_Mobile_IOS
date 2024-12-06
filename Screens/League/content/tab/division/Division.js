import { View } from "react-native";

import styles from "./division.style";
import DivisionDetailsCard from "./cards/divisionDetails/DivisionDetailsCard";
import ParticipantsCard from "./cards/participants/ParticipantsCard";
import { ScrollView } from "react-native-gesture-handler";

const Division = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <ParticipantsCard navigation={navigation} />
      </View>
    </View>
  );
};

export default Division;
