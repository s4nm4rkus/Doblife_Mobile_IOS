import { View, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './searchHeader.style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchHeader = ({ navigation, text, setText, handleSearch, setIsSearched }) => {

  return (
    <View style={styles.container}>
      <View style={styles.arrowLeftContainer}>
        <TouchableOpacity style={styles.arrowLeftButton} onPress={() => navigation.navigate('Main')}>
          <FontAwesomeIcon 
            icon={faArrowLeft} 
            color={'#c42414'}
            size={hp(3.5)}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inInput}
            placeholder={'Search'}
            value={text}
            onFocus={() => setIsSearched(false) }
            blurOnSubmit={text ? true : false}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={() => {
              if (!text) return;
              handleSearch()
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default SearchHeader