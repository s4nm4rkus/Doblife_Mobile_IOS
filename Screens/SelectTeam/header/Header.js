import { Text, View } from "react-native";
import styles from "./header.style";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient colors={["#c42414", "#7c0b00"]} style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.joinALeagueText}>Select your</Text>
        <Text style={styles.joinALeagueText}>Team to Compete</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>
          Select your team to join the league by choosing from your list using
          the search feature.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
