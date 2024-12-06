import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import styles from "./header.style";

const Header = ({ navigation, save, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.navigate("League")}
        >
          <Feather name="arrow-left" size={hp(4)} color="red" />
        </TouchableOpacity>
        <Text style={styles.editPlayerDetailsText}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.headerButton} onPress={save}>
          <Text style={styles.headerText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
