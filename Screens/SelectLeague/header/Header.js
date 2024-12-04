import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import styles from "./header.style";
import { IconButton } from "react-native-paper";
import { COLORS } from "../../../constants/theme";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.arrowLeftButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={hp(3.5)} color="white" />
        </TouchableOpacity>
        <Text style={styles.backText}>Select League</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Search")}
        >
          <IconButton
            icon="magnify"
            size={hp(3.5)}
            iconColor={COLORS.clr_light_white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Feather
            name="bar-chart"
            size={hp(4)}
            color={COLORS.clr_light_white}
            style={{ transform: [{ rotate: "270deg" }], marginTop: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
