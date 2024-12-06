import { Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import styles from './header.style';

const Header = ({navigation, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity style={styles.arrowLeftButton} onPress={() => navigation.navigate('AddBracket')}>
          <Feather
            name='arrow-left'
            size={hp(4)}
            color='red'
          />
        </TouchableOpacity>
        <Text style={styles.editPlayerDetailsText}>{title}</Text>
      </View>
    </View>
  )
}

export default Header