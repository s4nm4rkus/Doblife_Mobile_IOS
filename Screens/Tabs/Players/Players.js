import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import styles from "./players.style";
import Header from "../../../components/header/Header";
// import { checkImageUrl } from '../../../utils/utils';
import { fetchProfiles } from "../../../api/profileApi";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import {
  cityIDValue,
  leagueIDValue,
  maxAgeValue,
  maxHeightValue,
  minAgeValue,
  minHeightValue,
  naturePositionIDValue,
  secondaryPositionIDValue,
} from "../../../features/playersFilter/playersFilterSlice";
import { AuthContext } from "../../../context/AuthContext";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Players = ({ navigation }) => {
  const [search, setSearch] = useState(null);
  const { userToken } = useContext(AuthContext);
  const naturePositionID = useSelector(naturePositionIDValue);
  const secondaryPositionID = useSelector(secondaryPositionIDValue);
  const leagueID = useSelector(leagueIDValue);
  const cityID = useSelector(cityIDValue);
  const minAge = useSelector(minAgeValue);
  const maxAge = useSelector(maxAgeValue);
  const minHeight = useSelector(minHeightValue);
  const maxHeight = useSelector(maxHeightValue);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);

  const { mutateAsync: fetchProfilesMutation } = useMutation({
    mutationFn: fetchProfiles,
    onSuccess: (data) => {
      setPlayers((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
    },
  });

  const onRefresh = async () => {
    setPlayers([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchProfiles();
    } else {
      setPage(1);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchProfiles = async () => {
    const initialParams = {
      search: search,
      nature_position_id: naturePositionID,
      secondary_position_id: secondaryPositionID,
      league_id: leagueID,
      city_id: cityID,
      secondary_position_id: secondaryPositionID,
      min_age: minAge,
      max_age: maxAge,
      min_height: minHeight,
      max_height: maxHeight,
      page: page,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchProfilesMutation({ params, userToken });
    } catch (e) {
      console.log(e);
    }
  };

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
    if (birthday) {
      var today = new Date();
      var birthDate = new Date(birthday);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    return null;
  };

  const handleGoToSearch = () => {
    navigation.navigate("SearchPlayers");
  };

  const handleGoToFilter = () => {
    navigation.navigate("FilterPlayers");
  };

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  useEffect(() => {
    handleFetchProfiles();
  }, [
    naturePositionID,
    leagueID,
    minAge,
    maxAge,
    minHeight,
    maxHeight,
    cityID,
    page,
  ]);

  const renderListItem = ({ item }) => (
    <View style={styles.column}>
      <View style={styles.cardContainer}>
        <View style={styles.content}>
          <View style={styles.playerImageContainer}>
            {item.default_profile_pic ? (
              <Image
                source={{ uri: item.default_profile_pic.image }}
                resizeMode="contain"
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={require("../../../assets/playerPlaceholders/player-placeholder-02.png")}
                resizeMode="contain"
                style={styles.profileImage}
              />
            )}
          </View>
          <View style={styles.playerDetailsTextContainer}>
            <View style={styles.playerNameTextContainer}>
              <Text style={styles.playerNameText}>{item.full_name}</Text>
            </View>
            <View style={styles.playerAttributesTextContainer}>
              <View style={{ flex: 1 }}>
                <Text style={styles.attributeText}>
                  Pos:{" "}
                  <Text style={styles.attributeValueText}>
                    {displayPlayingPosition(
                      item.nature_position_item,
                      item.secondary_position_item
                    )}
                  </Text>
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.attributeText}>
                  Ht:{" "}
                  <Text style={styles.attributeValueText}>{item.height}</Text>
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.attributeText}>
                  Age:{" "}
                  <Text style={styles.attributeValueText}>
                    {displayAge(item.birthday)}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="PLAYERS"
        navigation={navigation}
        onPressSearch={handleGoToSearch}
        onPressFilter={handleGoToFilter}
      />
      <View style={styles.upcomingLeagueContainer}>
        <FlatList
          data={players}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#c42414"]} // Set color of the refresh indicator
              tintColor={"#c42414"} // Set color of the refresh indicator on iOS
            />
          }
          ListFooterComponent={renderFooter}
          contentContainerStyle={styles.popularTeamsContainer}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReached}
        />
      </View>
    </SafeAreaView>
  );
};

export default Players;
