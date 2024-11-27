import { Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import { useState, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './searchCourtside.style';
import { AuthContext } from '../../../../context/AuthContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Iconify } from 'react-native-iconify';
import { useDispatch } from 'react-redux';
import { setLeagueParticipantID, setMyTeamsTeamName, setTeam, setTeamID } from '../../../../features/myTeamsSelectTeam/myTeamsSelectTeamSlice';
import { searchCourtsideSuggestions, searchCourtsideResults } from '../../../../api/courtsideApi';
import SearchHeader from './header/SearchHeader';

const SearchCourtsideScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {userToken} = useContext(AuthContext);
  const [text, setText] = useState(null);
  const [data, setData] = useState([]);
  const [courtsideResults, setCourtsideResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  let timeout;

  const { mutateAsync: searchCourtsideSuggestionsMutation } = useMutation({
    mutationFn: searchCourtsideSuggestions,
    onSuccess: (data) => {
      setData(data);
    },
  });

  const { mutateAsync: searchCourtsideResultsMutation } = useMutation({
    mutationFn: searchCourtsideResults,
    onSuccess: (data) => {
      setCourtsideResults(data);
    },
  });

  const onChangeText = (text) => {
    clearTimeout(timeout); // Clear previous timeout
    setText(text);
    timeout = setTimeout(() => {
      handleSearchCourtsideSuggestions(text); // Call handleSearch after 500ms delay
    }, 500);
  };

  const handleSearchCourtsideSuggestions = async (text) => {
    if (!text) {
      setData([]);
      return;
    }
    
    const params = {
      search: text,
    }

    try {
      await searchCourtsideSuggestionsMutation({params, userToken});
    } catch (e) {
      console.log(e.response);
    }
  }
  
  const handleSearchCourtsideResults = async (item = null) => {
    let search;
    if (item) {
      search = item.full_name || item.name;
      setText(search);
    } else {
      search = text;
    }

    setIsSearched(true)

    const params = {
      search: search,
    }

    try {
      await searchCourtsideResultsMutation({params, userToken});
    } catch (e) {
      console.log(e.response);
    }
  }

  const handleSelectTeam = (item) => {
    const teamOwner = item.league_participants[0].team_rosters.find(roster => roster.team_role_id === 1);
    dispatch(setLeagueParticipantID(item.league_participants[0].id))
    dispatch(setTeam({
      id: item.id,
      name: item.name,
      code: item.code,
      image: item.default_team_profile_pic?.image,
      team_owner: `${teamOwner?.profile.lastname} ${teamOwner?.profile.firstname}`,
      league_participant_ids: item.league_participants.map(participant => participant.id)
    }))
    navigation.navigate('TeamSetup');
  }

  const displayPlayingPosition = (nature, secondary) => {
    if (nature && secondary) {
      return `${nature.name} - ${secondary.name}`;
    }

    if (nature) {
      return `${nature.name}`;
    }

    if (secondary) {
      return `${secondary.name}`;
    }

    return null;
  };

  const displayAge = (birthday) => {
    if(birthday) {
      var today = new Date();
      var birthDate = new Date(birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    return null
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <SafeAreaView style={styles.container}>
        <SearchHeader
          navigation={navigation} 
          text={text}
          setIsSearched={setIsSearched}
          setText={onChangeText}
          handleSearch={handleSearchCourtsideResults}
        />
        {
          isSearched ? (
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ paddingBottom: hp('10%')}} 
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.searchResultContainer} onStartShouldSetResponder={() => true}>
                <View style={styles.searchResultTextContainer}>
                  <Text style={styles.searchResultText}>Search Result</Text>
                </View>
                {courtsideResults?.profiles?.length > 0 && (
                  <View style={styles.playersCardContainer}>
                    <View style={styles.playersTextContainer}>
                      <Text style={styles.playersText}>PLAYERS</Text>
                    </View>
                    {(
                      courtsideResults?.profiles?.slice(0, 5).map((player, index) => (
                        <View style={styles.playerCardsContainer} key={index}>
                          <View style={styles.playerCardContainer}>
                            <View style={styles.playerContent}>
                              <View style={styles.playerImageContainer}>
                                <Image source={require('../../../../assets/playerPlaceholders/player-placeholder-02.png')} resizeMode="contain" style={styles.playerProfileImage} />
                              </View>
                              <View style={styles.playerDetailsTextContainer}>
                                <View style={styles.playerNameTextContainer}>
                                  <Text style={styles.playerNameText}>{player.full_name}</Text>
                                </View>
                                <View style={styles.playerAttributesTextContainer}>
                                  <View style={{flex: 1}}>
                                    <Text style={styles.attributeText}>Pos:  <Text style={styles.attributeValueText}>{displayPlayingPosition(player.nature_position_item, player.secondary_position_item)}</Text></Text>
                                  </View>
                                  <View style={{flex: 1}}>
                                    <Text style={styles.attributeText}>Ht:  <Text style={styles.attributeValueText}>{player.height}</Text></Text>
                                  </View>
                                  <View style={{flex: 1}}>
                                    <Text style={styles.attributeText}>Age:  <Text style={styles.attributeValueText}>{displayAge(player.birthday)}</Text></Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      ))
                    )}

                    {courtsideResults?.profiles?.length > 5 && (
                      <View style={styles.seeAllButtonContainer}>
                        <TouchableOpacity
                          style={styles.seeAllButton}
                          onPress={() => console.log('test')}
                        >
                          <Text style={styles.seeAllText}>See All</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                )}

                {courtsideResults?.leagues?.length > 0 && (
                  <View style={styles.leaguesCardContainer}>
                    <View style={styles.leaguesTextContainer}>
                      <Text style={styles.leaguesText}>LEAGUES</Text>
                    </View>
                    <View style={styles.leagueCardsContainer}>
                      {(
                        courtsideResults?.leagues?.slice(0, 5).map((league, index) => (
                          <View style={styles.leagueCardContainer} key={index}>
                            <View style={styles.leagueNameContainer}>
                              <Text style={styles.leagueAcronymText}>{league.acronym}</Text>
                              <Text style={styles.leagueNameText}>{league.name}</Text>
                            </View>
                          </View>
                        ))
                      )}
                    </View>
                  </View>
                )}
                  
                {courtsideResults?.teams?.length > 0 && (
                  <View style={styles.teamsCardContainer}>
                    <View style={styles.teamsTextContainer}>
                      <Text style={styles.teamsText}>TEAMS</Text>
                    </View>
                    <View style={styles.teamCardsContainer}>
                      {(
                        courtsideResults?.teams?.slice(0, 5).map((team, index) => (
                          <TouchableOpacity 
                            style={styles.teamCardContainer} 
                            key={index}
                            onPress={() => handleSelectTeam(team)}
                          >
                            <View style={styles.teamContent}>
                              <View style={styles.teamImageContainer}>
                                <Image source={require('../../../../assets/playerPlaceholders/player-placeholder-02.png')} resizeMode="contain" style={styles.teamProfileImage} />
                              </View>
                              <View style={styles.teamDetailsTextContainer}>
                                <View style={styles.teamNameTextContainer}>
                                  <Text style={styles.teamAcronymText}>{team.acronym}</Text>
                                  <Text style={styles.teamNameText}>{team.name}</Text>
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>
                        ))
                      )}

                      {courtsideResults?.teams?.length > 5 && (
                        <View style={styles.seeAllButtonContainer}>
                          <TouchableOpacity
                            style={styles.seeAllButton}
                            onPress={() => console.log('test')}
                          >
                            <Text style={styles.seeAllText}>See All</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </View>
                )}
              </View>
            </ScrollView>
          ) : (
            <View style={styles.recentSearchesContainer}>
              {(
                data?.map((item) => (
                  <TouchableOpacity key={item.id} onPress={() => handleSearchCourtsideResults(item)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 15
                      }}
                    >
                      <Text style={{fontWeight: 'bold'}}>{item.full_name || item.name }</Text>
                      <Iconify icon="heroicons-outline:search" size={hp(3)} style={{opacity: 0.5}} />
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </View>
          ) 
        }
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SearchCourtsideScreen