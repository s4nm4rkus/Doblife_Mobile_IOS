import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './filterPlayers.style';
import { BASE_URL } from '../../../../utils/config';
import { AuthContext } from '../../../../context/AuthContext';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setNaturePositionID, setSecondaryPositionID, setMinAge, setMaxAge, setMinHeight, setMaxHeight, setCityID, setLeagueID } from '../../../../features/playersFilter/playersFilterSlice';

const FilterPlayersScreen = ({ navigation }) => {
  const {userToken} = useContext(AuthContext);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const profile = queryClient.getQueryData(["profile"]);
  const [playingPositions, setPlayingPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);
  const [playedLeagues, setPlayedLeagues] = useState([]);
  const [naturePosition, setNaturePosition] = useState(null);
  const [secondaryPosition, setSecondaryPosition] = useState(null);
  const [playedLeague, setPlayedLeague] = useState(null);
  const [minAge, setMinimumAge] = useState(null);
  const [maxAge, setMaximumAge] = useState(null);
  const [minHeight, setMinimumHeight] = useState(null);
  const [maxHeight, setMaximumHeight] = useState(null);

  const handleFilterPlayers = () => {
    dispatch(setNaturePositionID(naturePosition));
    dispatch(setSecondaryPositionID(secondaryPosition));
    dispatch(setCityID(city));
    dispatch(setLeagueID(playedLeague));
    dispatch(setMinAge(minAge));
    dispatch(setMaxAge(maxAge))
    dispatch(setMinHeight(minHeight));
    dispatch(setMaxHeight(maxHeight));
    navigation.navigate('Players');
  };
  
  useEffect(() => {
    var config = {
      method: 'get',
      url: `${BASE_URL}/playing-positions`,
    };

    axios(config)
      .then(response => {
        var count = Object.keys(response.data).length;
        let playingPositionsArr = [];
        for (var i = 0; i < count; i++) {
          playingPositionsArr.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setPlayingPositions(playingPositionsArr);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var config = {
      method: 'get',
      url: `${BASE_URL}/cities/all`,
    };

    axios(config)
      .then(response => {
        var count = Object.keys(response.data).length;
        let citiesArr = [];
        for (var i = 0; i < count; i++) {
          citiesArr.push({
            value: response.data[i].id,
            label: response.data[i].city,
          });
        }
        setCities(citiesArr);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    var config = {
      method: 'get',
      url: `${BASE_URL}/leagues/player/${profile.id}`,
    };

    axios(config)
      .then(response => {
        var count = Object.keys(response.data).length;
        let playedLeaguesArr = [];
        for (var i = 0; i < count; i++) {
          playedLeaguesArr.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setPlayedLeagues(playedLeaguesArr);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 25}
      style={styles.container}
    >
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.arrowLeftContainer}>
          <TouchableOpacity style={styles.arrowLeftButton} onPress={() => navigation.navigate('Players')}>
            <FontAwesomeIcon icon={faArrowLeft}  size={hp(4)} color='red'/>
          </TouchableOpacity>
          <Text style={styles.filterText}>Filter</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.headerButton} onPress={() => handleFilterPlayers()}>
            <Text style={styles.headerText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Nature position</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={playingPositions}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select"
              searchPlaceholder="Search..."
              value={naturePosition}
              onChange={item => {
                setNaturePosition(item.value);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Leagues played</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={playedLeagues}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select"
              searchPlaceholder="Search..."
              value={playedLeague}
              onChange={item => {
                setPlayedLeague(item.value);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Hometown Address</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={cities}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select"
              searchPlaceholder="Search..."
              value={city}
              onChange={item => {
                setCity(item.value);
              }}
              renderItem={renderItem}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Age</Text>
            <View style={styles.inputMinMaxContainer}>
              <View style={styles.testinputGroup}>
                <View style={styles.testinputGroupPrepend}>
                  <Text style={styles.testinputGroupText}>MIN</Text>
                </View>
                <TextInput
                  style={styles.testinput}
                  keyboardType='numeric'
                  onChangeText={setMinimumAge}
                  value={minAge}
                />
              </View>
              <Text style={styles.toText}>to</Text>
              <View style={styles.testinputGroup}>
                <View style={styles.testinputGroupPrepend}>
                  <Text style={styles.testinputGroupText}>MAX</Text>
                </View>
                <TextInput
                  style={styles.testinput}
                  keyboardType='numeric'
                  onChangeText={setMaximumAge}
                  value={maxAge}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabelText}>By Height</Text>
            <View style={styles.inputMinMaxContainer}>
              <View style={styles.testinputGroup}>
                <View style={styles.testinputGroupPrepend}>
                  <Text style={styles.testinputGroupText}>MIN</Text>
                </View>
                <TextInput
                  style={styles.testinput}
                  keyboardType='numeric'
                  onChangeText={setMinimumHeight}
                  value={minHeight}
                />
              </View>
              <Text style={styles.toText}>to</Text>
              <View style={styles.testinputGroup}>
                <View style={styles.testinputGroupPrepend}>
                  <Text style={styles.testinputGroupText}>MAX</Text>
                </View>
                <TextInput
                  style={styles.testinput}
                  keyboardType='numeric'
                  onChangeText={setMaximumHeight}
                  value={maxHeight}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default FilterPlayersScreen