
import { View, Text, Switch, Button, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import styles from './stats.style'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PlayerDetailsCard from '../../../../../components/common/cards/PlayerDetails/PlayerDetailsCard';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Carousel from "react-native-reanimated-carousel";
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../../../../../context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { fetchLeaguePlayerPoints } from '../../../../../api/teamRosterApi';

const Stats = ({ navigation }) => {
  const ref = useRef(null);
  const {userToken} = useContext(AuthContext);
  const [leaguePlayerPoints, setLeaguePlayerPoints] = useState([]);
  const [allTimePlayerPoints, setAllTimePlayerPoints] = useState(0);

  const { mutateAsync: fetchLeaguePlayerPointsMutation } = useMutation({
    mutationFn: fetchLeaguePlayerPoints,
    onSuccess: (leaguePlayerPoints) => {
      let pointsArray = [];
      leaguePlayerPoints.forEach(item => {
        pointsArray.push(item.player_points)
      });

      if (pointsArray.length === 0) {
        setAllTimePlayerPoints(0);
      } else {
        const totalPoints = pointsArray.reduce((acc, points) => acc + points, 0);
        const averagePoints = totalPoints / pointsArray.length;
        setAllTimePlayerPoints(averagePoints);
      }

      setLeaguePlayerPoints(leaguePlayerPoints)
    },
  });

  const handleFetchLeaguePlayerPoints = async () => {
    
    const params = {
    }

    try {
      await fetchLeaguePlayerPointsMutation({params, userToken});
    } catch (e) {
      console.log(e.response)
      console.log(e);
    }
  };

  useEffect(() => {
    handleFetchLeaguePlayerPoints();
  }, [])

  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 7,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      > 
        <Text style={styles.leagueAcronymText}>{item.league_acronym}</Text>
        <Text style={styles.leagueNameText}>{item.league_name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end'
        }}
      > 
        <View
           style={{
            alignItems: 'center'
          }}
        >
          <Text style={styles.leagueNumberText}>{item.player_points}</Text>
          <Text style={styles.leaguePointsText}>Points</Text>
        </View>
        
      </View>
    </View>
  );

  const handlePreviousPage = () => {
    ref.current?.scrollTo({ count: -1, animated: true });
  }

  const handleNextPage = () => {
    ref.current?.scrollTo({ count: 1, animated: true });
  }

  return (
    <>
      <View style={styles.playerStatsContainer}>
        <View style={styles.allTimeStatContainer}>
          <Text style={styles.statNumberText}>{allTimePlayerPoints}</Text>
          <Text style={styles.statNameText}>All time</Text>
        </View>
        <View style={styles.leaguePointsContainer}>
          <TouchableOpacity onPress={() => handlePreviousPage()} >
            <Feather
              name='chevron-left'
              size={hp(1.9)}
              color={'#c42414'}
            />
          </TouchableOpacity>
          <Carousel
            loop
            ref={ref}
            width={wp(47)}
            autoPlay={false}
            data={leaguePlayerPoints}
            scrollAnimationDuration={1000}
            renderItem={renderItem}
          />
          <TouchableOpacity onPress={() => handleNextPage()}>
            <Feather
              name='chevron-right'
              size={hp(1.9)}
              color={'#c42414'}
            />
          </TouchableOpacity>
        
        </View>
        {/* {(
          stats?.map((stat) => (
            <StatsCard
              key={stat.id}
              data={stat}
            />
          ))
        )} */}
      </View>

      <View style={styles.playerDetailsContainer}>
        <PlayerDetailsCard navigation={navigation}></PlayerDetailsCard>
      </View>
    </>
  )
}

export default Stats;