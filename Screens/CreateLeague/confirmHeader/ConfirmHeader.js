import { Text, View } from "react-native";
import styles from "./confirmHeader.style";

const ConfirmHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.text}>Confirm Your League</Text>
      </View>
    </View>
  );
};

export default ConfirmHeader;
