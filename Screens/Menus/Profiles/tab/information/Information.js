
import { View } from 'react-native';

import styles from './information.style'
import BasicInfoCard from './cards/basicInfoCard/BasicInfoCard';
import AddressesCard from './cards/addressesCard/AddressesCard';
import { ScrollView } from 'react-native-gesture-handler';

const Information = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <BasicInfoCard navigation={navigation}/>
        </View>
        <View style={styles.cardContainer}>
          <AddressesCard navigation={navigation}/>
        </View>
      </ScrollView>
    </View>
    
    
  )
}

export default Information;