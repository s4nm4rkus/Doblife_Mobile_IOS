import { View } from "react-native";
import styles from "./gameAndSchedule.style";
import GamesAndScheduleCard from "./cards/gamesAndSchedule/GamesAndScheduleCard";

const GameAndSchedule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <GamesAndScheduleCard navigation={navigation} />
      </View>
    </View>
  );
};

export default GameAndSchedule;
