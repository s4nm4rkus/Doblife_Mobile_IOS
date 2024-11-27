import { TouchableOpacity } from 'react-native';
import styles from './headerLeftButton.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const HeaderLeftButton = ({onPress, color, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon 
        icon={icon}
        size={30}
        color={color}
        style={styles.icon}
      />
    </TouchableOpacity>
  )
}

export default HeaderLeftButton