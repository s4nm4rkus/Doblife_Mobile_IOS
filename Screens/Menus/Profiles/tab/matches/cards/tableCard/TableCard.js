import React, { useState, useEffect, useContext } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './tableCard.style';
import { useMutation } from '@tanstack/react-query';
import { AuthContext } from '../../../../../../../context/AuthContext';
import { useProfileData } from '../../../../../../../hooks/useProfileData';
import { fetchTeamRosters } from '../../../../../../../api/teamRosterApi';

const TableCard = ({ routeState, navigation }) => {
  const { userToken, logout } = useContext(AuthContext);
  const [teamRosters, setTeamRosters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [paginationButtons, setPaginationButtons] = useState([]);

  const { data: profile, isLoading, isError, error } = useProfileData(userToken);

  const { mutateAsync: fetchTeamRostersMutation } = useMutation({
    mutationFn: fetchTeamRosters,
    onSuccess: (data) => {
      const buttons = [];

      for (let i = 1; i <= Math.ceil(data.total / 10); i++) {
        buttons.push(i);
      }
      setPaginationButtons(buttons);
      setLastPage(data.total);
      setTeamRosters(data.data);
    },
  });

  const handleFetchTeamRosters = async () => {
    const initialParams = { 
      profile_id: profile.id,
      page: currentPage,
      items: 10,
      order_by: 'created_at',
      sort: 'desc'
    }
    
    const filterParams = routeState;

    const params = {
      ...initialParams,
      ...filterParams
    }
    
    try {
      await fetchTeamRostersMutation({userToken, params});
    } catch (e) {
      console.log(e);
    }
  };

  const handlePreviousPage = () => {
    if(currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  }

  const handleNextPage = () => {
    if(lastPage == currentPage) return;
    setCurrentPage(currentPage + 1);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    handleFetchTeamRosters();
  }, [currentPage, routeState]);

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.league_participant.team_profile.acronym}</Text>
    </View>
  )

  const renderButton = ({item}) => (
    <TouchableOpacity
      key={item}
      onPress={() => handlePageClick(item)}
      style={[
        styles.paginationButton,
        item === currentPage ? styles.activeButton : null,
      ]}>
      <Text 
        style={[
          item === currentPage ? styles.activeButtonText : styles.buttonText,
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  )

  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.container}>
          <View style={styles.tableTitle}>
            <Text style={styles.playerDetailsText}>Matches</Text>
            <View style={styles.editContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('FilterMatch')}>
                <Feather
                  name='bar-chart'
                  size={hp(2.9)}
                  style={{transform: [{ rotate: '270deg' }]}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.heading}>League</Text>
            <Text style={styles.heading}>Team</Text>
          </View>
          <FlatList
            data={teamRosters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          >
          </FlatList>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.paginationWrapper}>
          <TouchableOpacity onPress={() => handlePreviousPage()} >
            <Feather
              name='chevron-left'
              size={16}
              color={'#c42414'}
            />
          </TouchableOpacity>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={paginationButtons}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderButton}
          >
          </FlatList>
          <TouchableOpacity onPress={() => handleNextPage()}>
            <Feather
              name='chevron-right'
              size={16}
              color={'#c42414'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default TableCard