import { View } from "react-native";

import styles from "./details.style";
import SeasonDetailsCard from "./cards/seasonDetails/SeasonDetailsCard";
import { ScrollView } from "react-native-gesture-handler";
import DivisionDetailsCard from "./cards/divisions/DivisionDetailsCard";
import DescriptionCard from "./cards/description/DescriptionCard";

const Details = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <DescriptionCard navigation={navigation} />
        </View>
        <View style={styles.cardContainer}>
          <SeasonDetailsCard navigation={navigation} />
        </View>
        <View style={styles.cardContainer}>
          <DivisionDetailsCard navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
