import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './searchTeams.style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchHeader from '../../../../components/header/searchHeader/SearchHeader';
import { Iconify } from 'react-native-iconify';
import { useDispatch } from 'react-redux';
import { fetchTeams } from '../../../../api/teamApi';
import { setLeagueParticipantID, setTeamID } from '../../../../features/myTeamsSelectTeam/myTeamsSelectTeamSlice';

const SearchTeamsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [teams, setTeams] = useState([]);
  const [page, setPage] = useState(1);
  let timeout;

  const { mutateAsync: fetchTeamsMutation } = useMutation({
    mutationFn: fetchTeams,
    onSuccess: (data) => {
      console.log('test2')
      console.log(data);
      setTeams(prevData => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setIsLoading(false);
    },
  });

  const onChangeText = (text) => {
    setText(text);
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  }

  const handleSearchTeams = async () => {
    console.log(text)
    if (!text) {
      setTeams([]);
      return;
    }

    const params = {
      search: text,
      page: page
    }

    try {
      await fetchTeamsMutation({params});
    } catch (e) {
      console.log(e.response);
    }
  }
  
  const handleSelectTeam = (item) => {
    const teamOwner = item.league_participants[0].team_rosters.find(roster => roster.team_role_id === 1);
    dispatch(setLeagueParticipantID(item.league_participants[0].id))
    dispatch(setTeamID({
      id: item.id,
      name: item.name,
      code: item.code,
      image: item.default_team_profile_pic?.image,
      team_owner: `${teamOwner?.profile.lastname} ${teamOwner?.profile.firstname}`,
      league_participant_ids: item.league_participants.map(participant => participant.id)
    }))
    navigation.navigate('TeamSetup');
  }

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c"/>}
    </View>
  )

  const renderListItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => handleSelectTeam(item)}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15
        }}
      >
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Iconify icon="heroicons-outline:search" size={hp(3)} style={{opacity: 0.5}} />
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setTeams([]);
      setPage(1);
      handleSearchTeams();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [text])

  useEffect(() => {
    handleSearchTeams();
  }, [page])

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.container}>
        <SearchHeader 
          navigation={navigation} 
          text={text}
          setText={onChangeText}
        />
        <View style={styles.recentSearchesContainer}>
          <FlatList
            data={teams}
            renderItem={renderListItem}
            keyExtractor={(item, index) => index}
            ListFooterComponent={renderFooter}
            contentContainerStyle={styles.popularTeamsContainer}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.2}
            onEndReached={handleEndReached}
          />
          {/* {(
            data?.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => handleSelectTeam(item)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 15
                  }}
                >
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                  <Iconify icon="heroicons-outline:search" size={hp(3)} style={{opacity: 0.5}} />
                </View>
              </TouchableOpacity>
            ))
          )} */}
        </View>
        
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SearchTeamsScreen