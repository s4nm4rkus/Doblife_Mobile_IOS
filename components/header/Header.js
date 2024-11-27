import { Text, View, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import { Iconify } from "react-native-iconify";
import styles from "./header.style";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Header = ({ title, navigation, onPressSearch, onPressFilter }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onPressSearch}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={hp(3)}
            color={COLORS.clr_light_white}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFilter}>
          <Feather
            name="bar-chart"
            size={hp(4)}
            color={COLORS.clr_light_white}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
