import { TouchableOpacity } from "react-native";
import styles from "./headerRightButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const HeaderRightButton = ({ onPress, color, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon
        icon={icon}
        size={30}
        color={color}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default HeaderRightButton;
