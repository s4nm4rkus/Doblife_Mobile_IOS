import { Text, View, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './searchPlayer.style';
import { AuthContext } from '../../../../context/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchHeader from '../../../../components/header/searchHeader/SearchHeader';
import { Iconify } from 'react-native-iconify';
import { useDispatch } from 'react-redux';
import { setMyTeamsTeamName, setTeamID } from '../../../../features/myTeamsSelectTeam/myTeamsSelectTeamSlice';
import { fetchProfiles } from '../../../../api/profileApi';

const SearchPlayerScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {userToken} = useContext(AuthContext);
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  let timeout;

  const { mutateAsync: fetchPlayersMutation } = useMutation({
    mutationFn: fetchProfiles,
    onSuccess: (data) => {
      setData(data);
    },
  });

  const onChangeText = (text) => {
    clearTimeout(timeout); // Clear previous timeout
    setText(text);
    timeout = setTimeout(() => {
      handleSearchPlayers(text); // Call handleSearch after 500ms delay
    }, 500);
  };

  const handleSearchPlayers = async (text) => {
    const params = {
      search: text,
    }

    try {
      await fetchPlayersMutation({params, userToken});
    } catch (e) {
      console.log(e.response);
    }
  }
  
  const handleSearch = (item) => {
    dispatch(setTeamID(item.id));
    dispatch(setMyTeamsTeamName(item.name));
    navigation.navigate('TeamSetup')
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchHeader 
        navigation={navigation} 
        text={text}
        setText={onChangeText}
      />
      <View style={styles.recentSearchesContainer}>
        {(
          data?.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => handleSearch(item)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 15
                }}
              >
                <Text style={{fontWeight: 'bold'}}>{item.full_name}</Text>
                <Iconify icon="heroicons-outline:search" size={hp(3)} style={{opacity: 0.5}} />
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
      
    </SafeAreaView>
  )
}

export default SearchPlayerScreen