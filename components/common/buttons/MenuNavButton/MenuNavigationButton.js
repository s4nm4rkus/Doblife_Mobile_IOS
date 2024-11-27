import { TouchableOpacity, Text } from "react-native";
import styles from "./menuNavigationButton.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MenuNavigationButton = ({
  onPress,
  iconColor,
  icon,
  title,
  notificationCount,
}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      <FontAwesomeIcon
        icon={icon}
        size={hp(2.8)}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={styles.titleStyle}>{title}</Text>
      {title == "Notifications" && notificationCount != 0 && (
        <Text style={styles.notificationCount}>{notificationCount}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MenuNavigationButton;
