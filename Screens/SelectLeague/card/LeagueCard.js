import { View, Text, TouchableOpacity } from 'react-native';
import styles from './leagueCard.style';
import { useDispatch } from 'react-redux';
import { setIsJoin } from '../../../features/league/leagueSlice';
import { setLeagueID as setMyLeaguesLeagueID} from '../../../features/myLeaguesSelectLeague/myLeaguesSelectLeagueSlice';
import Toast from 'react-native-toast-message';
import moment from 'moment/moment';
import { useMutation } from '@tanstack/react-query';
import { fetchStatusAndJoinStatus } from '../../../api/leagueApi';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const LeagueCard = ({ routeParams, data, navigation }) => {
  const dispatch = useDispatch();
  const { userToken } = useContext(AuthContext);

  const { mutateAsync: fetchStatusAndJoinStatusMutation } = useMutation({
    mutationFn: fetchStatusAndJoinStatus,
    onSuccess: (data) => {
    },
  });
  
  // const handleJoinTeam = () => {
  //   if (data.league_season[0].join_status == 'closed') {
  //     Toast.show({
  //       type: 'customErrorToast',
  //       text1: 'Oh snap!',
  //       text2: `The ${data.name} has already closed. Joining this league is no longer available`
  //     });

  //     return;
  //   }
  //   dispatch(setLeagueName(data.name));
  //   dispatch(setLeagueID(data.id));
  //   dispatch(setIsSelectDivisionModalVisible(true));
  // }

  const handleJoin = async () => {
    const params = { 
      league_id: data.id,
    }

    try {
      const response = await fetchStatusAndJoinStatusMutation({userToken, params});
      
      if (response.join_status == 'closed') {
        Toast.show({
          type: 'customErrorToast',
          text1: 'Oh snap!',
          text2: `The ${data.name} has already closed. Joining this league is no longer available`
        });
  
        return;
      }

      if (response.status == 'pending') {
        Toast.show({
          type: 'customErrorToast',
          text1: 'Oh snap!',
          text2: `Unable to join this league as approval is still pending.`
        });
        return;
      }

      dispatch(setIsJoin(true));
      dispatch(setMyLeaguesLeagueID(data.id));

      if (routeParams != undefined) {
        navigation.navigate({
          name: 'League',
          params: {is_join: true},
          merge: true,
        });
        return;
      }
      
      
      navigation.navigate('League');
    } catch (e) {
      console.log(e.response)
      console.log(e);
    }
  }

  return (
    <View style={styles.container}>
      <View 
        style={styles.cardContainer}
      >
        <View style={styles.content}>
          <View style={styles.teamNameContainer}>
            <View>
              <Text numberOfLines={2} style={styles.teamNameText}>{data?.name}</Text>
            </View>
            <View style={{marginTop: 'auto'}}>
              <Text style={styles.openingDateText}>Opening Date</Text>
              <Text style={styles.dateText}>{moment(data?.opening_date).format('MMM DD, YYYY')}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.joinContainer} 
            onPress={() => handleJoin()}
            disabled={data?.is_joined}
          >
            <Text style={styles.joinText}>{data?.is_joined ? 'JOINED' : 'JOIN'}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  )
}

export default LeagueCard