import { Text, View } from "react-native";
import styles from "./doneCreateLeague.style";
import { useDispatch, useSelector } from "react-redux";
import {
  acronymValue,
  leagueNameValue,
} from "../../../features/createLeague/createLeagueSlice";

const DoneCreateLeague = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const leagueName = useSelector(leagueNameValue);
  const acronym = useSelector(acronymValue);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <View style={styles.leagueContainer}>
        <Text style={styles.leagueText}>League</Text>
        <Text style={styles.leagueNameText}>{leagueName}</Text>
        <Text style={styles.leagueAcronymText}>{acronym}</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          You will be notified if your league is ready to be open. This might
          take some time.
        </Text>
      </View>
    </View>
  );
};

export default DoneCreateLeague;
