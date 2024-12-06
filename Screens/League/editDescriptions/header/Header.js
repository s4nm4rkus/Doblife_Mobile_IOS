import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ navigation, save, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.navigate("League")}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={hp(3)} color="#9b001c" />
        </TouchableOpacity>
        <Text style={styles.editPlayerDetailsText}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.headerButton} onPress={save}>
          <Text style={styles.headerText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
