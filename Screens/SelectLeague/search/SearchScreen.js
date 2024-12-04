import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.style';
import { AuthContext } from '../../../context/AuthContext';
import { useQueryClient } from '@tanstack/react-query';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchHeader from '../../../components/header/searchHeader/SearchHeader';
import { Iconify } from 'react-native-iconify';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  'Sk senior League',
  'Brill Sports League',
  'Brill Sports League 1',
  'Brill Sports League 2',
]

const SearchScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [text, setText] = useState(null);
  const [history, setHistory]= useState([])
  const profile = queryClient.getQueryData(["profile"]);

  const recover = async () => {
    let history = await AsyncStorage.getItem('history');
    if (history) {
      setHistory(JSON.parse(history));
    }
  }
  
  const handleSearch = (item) => {
    let historyArr = history;
    historyArr.push({"name": item});
    
    let result = history.reduce((unique, o) => {
        if(!unique.some(obj => obj.name === o.name)) {
          unique.push(o);
        }
        return unique;
    },[]);

    setHistory(result);
    AsyncStorage.setItem('history', JSON.stringify(result));
    setText(null);
  }

  const handleRemoveHistory = (item) => {
    let result = history.filter(history => history.name !== item.name);
    
    setHistory(result);
    AsyncStorage.setItem('history', JSON.stringify(result));
  }

  useEffect(()=>{
    recover();
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader 
        navigation={navigation} 
        text={text}
        setText={setText}
      />
      {
        text ? (
          <View style={styles.recentSearchesContainer}>
            {(
              data?.map((item) => (
                <TouchableOpacity key={item} onPress={() => handleSearch(item)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 15
                    }}
                  >
                    <Text style={{fontWeight: 'bold'}}>{item}</Text>
                    <Iconify icon="heroicons-outline:search" size={hp(3)} style={{opacity: 0.5}} />
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        ) : (
          <View style={styles.recentSearchesContainer}>
            <Text style={{opacity: 0.5, marginBottom: 20}}>Recent search</Text>
            {(
              history?.map((item) => (
                <View
                  key={item.name}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <Iconify icon="subway:refresh-time" size={hp(3)} style={{opacity: 0.5, marginRight: 10}} />
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}
                  >
                    <TouchableOpacity onPress={() => handleRemoveHistory(item)}>
                      <Iconify icon="heroicons-outline:x" size={hp(3)} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>
        ) 
      }
      
    </SafeAreaView>
  )
}

export default SearchScreen