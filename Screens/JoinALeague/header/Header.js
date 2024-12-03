import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({ navigation }) => {
  return (
    <LinearGradient colors={["#c42414", "#7c0b00"]} style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={hp(3.2)} color="white" />
        </TouchableOpacity>
        <Text style={styles.backText}>Back</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.joinALeagueText}>JOIN A LEAGUE</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>
          By joining the league, you have the option to either create your own
          team, select an existing team, or join a team using a provided code.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
