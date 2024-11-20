import { Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './header.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity style={styles.arrowLeftButton} onPress={() => navigation.goBack()}>
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            size={hp(3.5)}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>TERMS OF SERVICE</Text>
        <View style={styles.arrowRightButton}>
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            size={hp(3.5)}
            color='white'
          />
        </View>
      </View>
    </View>
  )
}

export default Header