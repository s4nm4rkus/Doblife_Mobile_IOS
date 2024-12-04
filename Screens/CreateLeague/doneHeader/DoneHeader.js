import { Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import styles from "./doneHeader.style";
import { COLORS } from "../../../constants/theme";

const DoneHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <IconButton
          icon="check-circle"
          size={hp(10)}
          iconColor={COLORS.clr_light_white}
        />
        <Text style={styles.text}>Done creating League</Text>
      </View>
    </View>
  );
};

export default DoneHeader;
