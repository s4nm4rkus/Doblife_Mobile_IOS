import { Text, View } from "react-native";
import styles from "./header.style";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient colors={["#c42414", "#7c0b00"]} style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.joinALeagueText}>Create your</Text>
        <Text style={styles.joinALeagueText}>Dream Team</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>
          Create your dream team by first coming up with a team name, acronym,
          and logo. Once your team is successfully created, a unique code will
          be automatically generated. Players can use this code to join your
          team.
        </Text>
      </View>
    </LinearGradient>
  );
};

export default Header;
