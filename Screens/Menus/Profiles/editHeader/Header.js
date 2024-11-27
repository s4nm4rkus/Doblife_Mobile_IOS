import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ navigation, save, title, screenName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.navigate("Profiles")}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={hp(2.8)} color="#c42414" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.headerButton} onPress={save}>
          <Text style={styles.headerText}>
            {screenName == "FilterMatch" ? "Search" : "Save"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
