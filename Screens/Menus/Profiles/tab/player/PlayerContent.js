
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './playerContent.style'
import { useContext, useState } from 'react';
import Stats from '../stats/Stats';
import Information from '../information/Information';
import Teams from '../teams/Teams';
import Matches from '../matches/Matches';
import { LinearGradient } from 'expo-linear-gradient';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { updatePlayerStatus } from '../../../../../api/userApi';
import { AuthContext } from '../../../../../context/AuthContext';

const PlayerContent = ({ routeState, navigation }) => {
  const queryClient = useQueryClient();
  const {userToken} = useContext(AuthContext);
  const profile = queryClient.getQueryData(["profile"]);
  const [isEnabled, setIsEnabled] = useState(profile?.status == 'active' ? true : false);
  const [activeTab, setActiveTab] = useState('stats');

  const { mutateAsync: updatePlayerStatusMutation } = useMutation({
    mutationFn: updatePlayerStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });

  const toggleSwitch = async (value) => {
    const params = { 
      is_active: isEnabled,
      user_id: profile.user_id,
    }
    
    try {
      await updatePlayerStatusMutation({userToken, params});
      setIsEnabled(isEnabled => !isEnabled);
    } catch (e) {
      console.log(e);
    }
  };

  const displayTabContent = () => {
    switch (activeTab) {
        case "stats":
          return <Stats navigation={navigation}/>
        case "information":
          return <Information navigation={navigation}/>
        case "teams":
          return <Teams navigation={navigation}/>
        case "matches":
          return <Matches navigation={navigation} routeState={routeState}/>
        default:
          break;
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#c42414', '#7c0b00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.playerStatusContainer}
      >
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status</Text>
        </View>
        <View style={styles.inactiveContainer}>
          <Text style={styles.inactiveText}>{isEnabled ? 'Active' : 'Inactive'}</Text>
          <TouchableOpacity 
            style={[
              styles.outer, 
              isEnabled
                ? {justifyContent: 'flex-end'}
                : {justifyContent: 'flex-start'}
            ]}
            onPress={toggleSwitch}
          >
            <View style={styles.inner}></View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.playerButtonsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('stats')}>
          <Text style={[styles.playerButtonText, styles.playerActiveButtonText('stats', activeTab)]}>STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('information')}>
          <Text style={[styles.playerButtonText, styles.playerActiveButtonText('information', activeTab)]}>INFORMATION</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('teams')}>
          <Text style={[styles.playerButtonText, styles.playerActiveButtonText('teams', activeTab)]}>TEAMS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('matches')}>
          <Text style={[styles.playerButtonText, styles.playerActiveButtonText('matches', activeTab)]}>HISTORY</Text>
        </TouchableOpacity>
      </View>

      {displayTabContent()}
    </View>
  )
}

export default PlayerContent;