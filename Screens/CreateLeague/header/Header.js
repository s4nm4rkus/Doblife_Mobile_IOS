import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import styles from "./header.style";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.joinALeagueText}>Start your</Text>
        <Text style={styles.joinALeagueText}>own League</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>
          Start your own league by creating a name, acronym, and description,
          and by selecting the league type.
        </Text>
      </View>
    </View>
  );
};

export default Header;
