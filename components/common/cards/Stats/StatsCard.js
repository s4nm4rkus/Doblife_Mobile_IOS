import { View, Text } from "react-native";
import styles from "./statsCard.style";

const StatsCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statNumberText}>{data.value}</Text>
      <Text style={styles.statNameText}>{data.stat}</Text>
    </View>
  );
};

export default StatsCard;
