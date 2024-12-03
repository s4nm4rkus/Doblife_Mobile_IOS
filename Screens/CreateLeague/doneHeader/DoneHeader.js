import { Text, View, TouchableOpacity } from "react-native";
import { Iconify } from "react-native-iconify";
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
        <Iconify
          icon="gg:check-o"
          size={hp(10)}
          color={COLORS.clr_light_white}
        />
        <Text style={styles.text}>Done creating League</Text>
      </View>
    </View>
  );
};

export default DoneHeader;
