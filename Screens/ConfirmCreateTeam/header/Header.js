import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./header.style";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.text}>Confirm Your Team</Text>
      </View>
    </View>
  );
};

export default Header;
