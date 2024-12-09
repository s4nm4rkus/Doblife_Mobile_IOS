import { Text, View } from "react-native";

import styles from "./matches.style";
import TableCard from "./cards/tableCard/TableCard";

const Matches = ({ routeState, navigation }) => {
  return (
    <View style={styles.container}>
      <TableCard navigation={navigation} routeState={routeState} />
    </View>
  );
};

export default Matches;
