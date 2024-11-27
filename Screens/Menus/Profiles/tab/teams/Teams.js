import { View } from "react-native";

import styles from "./teams.style";
import CurrentTeamsCard from "./cards/currentTeamsCard/CurrentTeamsCard";
import PreviousTeamsCard from "./cards/previousTeamsCard/PreviousTeamsCard";
import { ScrollView } from "react-native-gesture-handler";

const Teams = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.cardContainer}>
          <CurrentTeamsCard navigation={navigation} />
        </View>
        <View style={styles.cardContainer}>
          <PreviousTeamsCard navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Teams;
