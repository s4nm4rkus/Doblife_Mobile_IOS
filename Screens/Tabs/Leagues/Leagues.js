import React, { useState, useEffect, useRef, useContext } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  FlatList,
  RefreshControl,
  Share,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  COLORS,
  SHADOWS,
  SIZES,
  FONT,
  FONTSIZE,
} from "../../../constants/theme";
import styles from "./leagues.style";
import Header from "../../../components/header/Header";
// import { checkImageUrl } from "../../../utils/utils";
import {
  faChevronRight,
  faShareFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  fetchFilteredLeagueMatchups,
  fetchLeagueMatchups,
  fetchLeagueMatchupsOngoing,
  fetchLeagueMatchupsUpcoming,
} from "../../../api/leagueApi";
import { useMutation } from "@tanstack/react-query";
import moment from "moment/moment";
import {
  brgyIDValue,
  cityIDValue,
  leagueDateValue,
  provinceIDValue,
  searchValue,
  sortByValue,
} from "../../../features/leaguesFilter/leaguesFilterSlice";
import { useSelector } from "react-redux";
import { captureRef } from "react-native-view-shot";
import { AuthContext } from "../../../context/AuthContext";
import FinishedLeagueCarousel from "../Home/carousel/FinishedLeagueCarousel";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Leagues = ({ navigation }) => {
  const { userToken } = useContext(AuthContext);
  const [refreshingOngoingMatches, setRefreshingOngoingMatches] =
    useState(false);
  const [refreshingUpcomingMatches, setRefreshingUpcomingMatches] =
    useState(false);
  const [refreshingFilteredData, setRefreshingFilteredData] = useState(false);
  const [isLoadingOngoingMatches, setisLoadingOngoingMatches] = useState(false);
  const [isLoadingUpcomingMatches, setisLoadingUpcomingMatches] =
    useState(false);
  const [isLoadingFilteredData, setisLoadingFilteredData] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [data, setData] = useState({
    ongoing_matches: [],
    upcoming_matches: [],
  });
  const sortBy = useSelector(sortByValue);
  const date = useSelector(leagueDateValue);
  const provinceID = useSelector(provinceIDValue);
  const cityID = useSelector(cityIDValue);
  const brgyID = useSelector(brgyIDValue);
  const search = useSelector(searchValue);
  const viewRef = useRef();
  const [hasMoreUpcomingMatches, setHasMoreUpcomingMatches] = useState(false);
  const [hasMoreOngoingMatches, setHasMoreOngoingMatches] = useState(false);
  const [hasMoreFilteredData, setHasMoreFilteredData] = useState(false);
  const [ongoingMatches, setOngoingMatches] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [upcomingMatchesPage, setUpcomingMatchesPage] = useState(1);
  const [ongoingMatchesPage, setOngoingMatchesPage] = useState(1);
  const [filteredPage, setFilteredPage] = useState(1);
  const prevSortBy = useRef();
  const prevDate = useRef();
  const prevProvinceID = useRef();
  const prevCityID = useRef();
  const prevBrgyID = useRef();
  const prevSearch = useRef();

  // const { mutateAsync: fetchLeagueMatchupsMutation } = useMutation({
  //   mutationFn: fetchLeagueMatchups,
  //   onSuccess: (data) => {
  //     setData(data)
  //     setRefreshing(false);
  //   },
  // });

  const { mutateAsync: fetchLeagueMatchupsUpcomingMutation } = useMutation({
    mutationFn: fetchLeagueMatchupsUpcoming,
    onSuccess: (data) => {
      setUpcomingMatches((prevData) => [...prevData, ...data.data]);
      setHasMoreUpcomingMatches(data.next_page_url !== null);
      setRefreshingUpcomingMatches(false);
      setisLoadingUpcomingMatches(false);
    },
  });

  const { mutateAsync: fetchLeagueMatchupsOngoingMutation } = useMutation({
    mutationFn: fetchLeagueMatchupsOngoing,
    onSuccess: (data) => {
      setOngoingMatches((prevData) => [...prevData, ...data.data]);
      setHasMoreOngoingMatches(data.next_page_url !== null);
      setRefreshingOngoingMatches(false);
      setisLoadingOngoingMatches(false);
    },
  });

  const { mutateAsync: fetchFilteredLeagueMatchupsMutation } = useMutation({
    mutationFn: fetchFilteredLeagueMatchups,
    onSuccess: (data) => {
      setFilteredData((prevData) => [...prevData, ...data.data]);
      setHasMoreFilteredData(data.next_page_url !== null);
      setisLoadingFilteredData(false);
    },
  });

  const handleFetchLeagueMatchupsUpcoming = async () => {
    setisLoadingUpcomingMatches(true);
    const params = {
      page: upcomingMatchesPage,
    };

    try {
      await fetchLeagueMatchupsUpcomingMutation({ userToken, params });
      setRefreshingFilteredData(false);
    } catch (e) {
      setRefreshingFilteredData(false);
      console.log(e.response);
      console.log(e);
    }
  };

  const onRefreshUpcomingMatches = () => {
    setUpcomingMatches([]);
    setRefreshingUpcomingMatches(true);
    if (upcomingMatchesPage == 1) {
      handleFetchLeagueMatchupsUpcoming();
    } else {
      setUpcomingMatchesPage(1);
    }
  };

  const handleEndReachedUpcomingMatches = () => {
    if (!isLoadingUpcomingMatches && hasMoreUpcomingMatches) {
      setUpcomingMatchesPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchLeagueMatchupsOngoing = async () => {
    setisLoadingOngoingMatches(true);
    const params = {
      page: ongoingMatchesPage,
    };

    try {
      await fetchLeagueMatchupsOngoingMutation({ userToken, params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const onRefreshOngoingMatches = () => {
    setOngoingMatches([]);
    setRefreshingOngoingMatches(true);
    if (ongoingMatchesPage == 1) {
      handleFetchLeagueMatchupsOngoing();
    } else {
      setOngoingMatchesPage(1);
    }
  };

  const handleEndReachedOngoingMatches = () => {
    if (!isLoadingOngoingMatches && hasMoreOngoingMatches) {
      setOngoingMatchesPage((prevPage) => prevPage + 1);
    }
  };

  const handleFetchLeagueMatchups = async () => {
    const initialParams = {
      sort_by: sortBy,
      date: date,
      province_id: provinceID,
      city_id: cityID,
      brgy_id: brgyID,
      search: search,
      page: filteredPage,
    };

    const hasValue = areAllValuesNull(initialParams);

    if (hasValue) {
      try {
        await fetchFilteredLeagueMatchupsMutation(initialParams);
      } catch (e) {
        console.log(e.response);
        console.log(e);
      }
      return;
    }
  };

  const areAllValuesNull = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] !== null && key != "page") {
          setIsFiltered(true);
          return true;
        }
      }
    }
    setIsFiltered(false);
    return false;
  };

  const captureImages = async () => {
    try {
      const uri1 = await captureRef(viewRef, {
        format: "jpg",
        quality: 0.9,
      });
      onShare([uri1]);
    } catch (error) {
      console.error("Failed to capture image:", error);
    }
  };

  const onShare = async (capturedImages) => {
    try {
      // Check if capturedImages is an array and contains at least one URI
      if (capturedImages && capturedImages.length > 0) {
        const options = {
          title: "Share Image", // For iOS (optional)
          message: "Check out this image!", // For Android and iOS
          url: capturedImages[0], // Use the first image from the array
        };

        // Share the image (native Share API)
        const response = await Share.share(options);

        if (response.action === Share.sharedAction) {
          // Action was shared successfully
          if (response.activityType) {
            console.log(`Shared with activity type: ${response.activityType}`);
          } else {
            console.log("Shared successfully!");
          }
        } else if (response.action === Share.dismissedAction) {
          // Action was dismissed by the user
          console.log("Share dismissed.");
        }
      } else {
        console.error("No image to share.");
      }
    } catch (error) {
      // Handle the error if sharing fails
      if (error.message !== "User did not share") {
        console.error("Failed to share:", error);
      }
    }
  };

  const handleGoToSearch = () => {
    navigation.navigate("SearchLeagues");
  };

  const handleGoToFilter = () => {
    navigation.navigate("FilterLeagues");
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !isLoadingFilteredData && hasMoreFilteredData) {
      setFilteredPage((prevPage) => prevPage + 1);
    }
  };

  const renderUpcomingMatchesList = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.leagueOwnerContainer}>
          <Text style={styles.leagueOwnerText}>
            {item.league_owner_profile.name}
          </Text>
          <FontAwesomeIcon icon={faXmark} size={hp(2.5)} />
        </View>
        <Text style={styles.dateText}>
          {moment(item.created_at).format("MMMM D")}
        </Text>
      </View>

      <View ref={viewRef} style={styles.cardBody}>
        <View style={styles.leagueNameContainer}>
          <Text style={styles.leagueNameText}>{item.league.name}</Text>
        </View>
        <View style={styles.openingDateContainer}>
          <Text style={styles.openingDateText}>
            {moment(item.opening_date).format("MMM D | h:mm A")}
          </Text>
        </View>
      </View>
      <View style={styles.leagueAddressContainer}>
        <Text style={styles.addressText}>
          {item.location.barangay.name}, {item.location.city.name},{" "}
          {item.location.province.name}
        </Text>
        <View style={styles.leagueAddressContainer}>
          <Text style={styles.addressText}>
            {item.location.barangay.name}, {item.location.city.name},{" "}
            {item.location.province.name}
          </Text>
        </View>
        {/* Uncomment if needed */}
        {/* 
        {!checkProfileIdExists(item) && (
          <TouchableOpacity 
            style={styles.joinNowContainer}
            onPress={() => handleJoinNow(item)}
          >
            <Text style={styles.joinNowText}>JOIN NOW</Text>
          </TouchableOpacity>
        )}
        */}
      </View>

      <View style={styles.cardFooter}>
        {/* <View>
          <Text style={styles.reactsText}>0 Reacts ⋅ 0 Share</Text>
        </View> */}
        <TouchableOpacity
          style={styles.buttonsContainer}
          onPress={captureImages}
        >
          {/* <FontAwesomeIcon icon={faThumbsUp} size={hp(2.8)}/> */}
          <FontAwesomeIcon icon={faShareFromSquare} size={hp(2.8)} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEmptyUpcoming = () => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Text style={{ fontSize: FONTSIZE.semi_large }}>No upcoming matches</Text>
    </View>
  );

  const renderOngoingMatchesList = ({ item }) => (
    <View style={styles.onGoingMatchesCardContainer}>
      <View style={styles.onGoingMatchesCardWrapper}>
        <View style={styles.content}>
          <View style={styles.detailContainer}>
            <Text style={styles.onGoingLeagueNameText} numberOfLines={2}>
              {item.league.name}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.detailContainer}>
            <View style={styles.matchContainer}>
              <View style={styles.logoContainer}>
                {item.participants.team_a.image ? (
                  <Image
                    source={{ uri: item.participants.team_a.image }}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                )}
                <Text style={styles.scoreText}>{item.team_a_score}</Text>
              </View>
              <View style={styles.quarterContainer}>
                <Text style={styles.ordinalNumberText}>{item.ordinal}</Text>
                <Text style={styles.quarterText}>{item.quarter}</Text>
              </View>
              <View style={styles.logoContainer}>
                {item.participants.team_b.image ? (
                  <Image
                    source={{ uri: item.participants.team_b.image }}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                )}
                <Text style={styles.scoreText}>{item.team_b_score}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const renderEmptyOngoing = () => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Text style={{ fontSize: FONTSIZE.semi_large }}>No ongoing matches</Text>
    </View>
  );

  useEffect(() => {
    handleFetchLeagueMatchupsUpcoming();
  }, [upcomingMatchesPage]);

  useEffect(() => {
    handleFetchLeagueMatchupsOngoing();
  }, [ongoingMatchesPage]);

  useEffect(() => {
    if (
      prevSortBy.current !== sortBy ||
      prevDate.current !== date ||
      prevProvinceID.current !== provinceID ||
      prevCityID.current !== cityID ||
      prevBrgyID.current !== brgyID ||
      prevSearch.current !== search
    ) {
      setFilteredData([]);
    }

    prevSortBy.current = sortBy;
    prevDate.current = date;
    prevProvinceID.current = provinceID;
    prevCityID.current = cityID;
    prevBrgyID.current = brgyID;
    prevSearch.current = search;
    handleFetchLeagueMatchups();
  }, [sortBy, date, provinceID, cityID, brgyID, search, filteredPage]);

  const renderItem = ({ item }) => (
    <View style={styles.onGoingMatchesCardContainer}>
      <View style={styles.onGoingMatchesCardWrapper}>
        <View style={styles.content}>
          <View style={styles.detailContainer}>
            <Text style={styles.onGoingLeagueNameText} numberOfLines={2}>
              {item.team_a.league_season_category.league_season.league.name}
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.detailContainer}>
            <View style={styles.matchContainer}>
              <View style={styles.logoContainer}>
                {item.team_a.team_profile.default_team_profile_pic ? (
                  <Image
                    source={{
                      uri: item.team_a.team_profile.default_team_profile_pic
                        .image,
                    }}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                )}
                <Text style={styles.scoreText}>
                  {item.match_summary.team_score_A}
                </Text>
              </View>
              <View style={styles.quarterContainer}>
                <Text style={styles.ordinalNumberText}>
                  {item.participants.team_a.name}
                </Text>
                <Text style={styles.quarterText}>
                  {item.participants.team_b.name}
                </Text>
              </View>
              <View style={styles.logoContainer}>
                {item.league_participant_b.team_profile
                  .default_team_profile_pic ? (
                  <Image
                    source={{
                      uri: item.league_participant_b.team_profile
                        .default_team_profile_pic.image,
                    }}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                    resizeMode="contain"
                    style={styles.logo}
                  />
                )}
                <Text style={styles.scoreText}>
                  {item.match_summary.team_score_B}
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
        title="LEAGUES"
        navigation={navigation}
        onPressSearch={handleGoToSearch}
        onPressFilter={handleGoToFilter}
      />
      {!isFiltered ? (
        <>
          <View style={styles.todayLeagueContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>ONGOING MATCHES</Text>
              <TouchableOpacity style={styles.seeAllContainer}>
                <Text style={styles.seeAllText}>See all</Text>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={styles.chevronRight}
                  size={hp(2.3)}
                />
              </TouchableOpacity>
            </View>

            <FlatList
              data={ongoingMatches}
              renderItem={renderOngoingMatchesList}
              keyExtractor={(item) => item.id}
              refreshControl={
                <RefreshControl
                  refreshing={refreshingOngoingMatches}
                  onRefresh={onRefreshOngoingMatches}
                  colors={["#c42414"]} // Set color of the refresh indicator
                  tintColor={"#c42414"} // Set color of the refresh indicator on iOS
                />
              }
              ListEmptyComponent={renderEmptyOngoing}
              contentContainerStyle={{
                columnGap: SIZES.medium,
                paddingHorizontal: 20,
              }}
              numColumns={1}
              horizontal
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              onEndReached={handleEndReachedOngoingMatches}
            />
            {/* {
                data.ongoing_matches.length != 0 ? (
                  <FlatList 
                    data={data.ongoing_matches}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#c42414']} // Set color of the refresh indicator
                        tintColor={'#c42414'} // Set color of the refresh indicator on iOS
                      />
                    }
                    contentContainerStyle={{ columnGap: SIZES.medium, paddingHorizontal: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  />
                ) : (
                  <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center', paddingTop: 20}}>
                    <Text style={{fontSize: FONTSIZE.semi_large}}>No ongoing matches</Text>
                  </View>
                )
              } */}
          </View>
          <View style={styles.upcomingLeagueContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>UPCOMING MATCHES</Text>
            </View>
            <FlatList
              data={upcomingMatches}
              renderItem={renderUpcomingMatchesList}
              keyExtractor={(item) => item.id}
              refreshControl={
                <RefreshControl
                  refreshing={refreshingUpcomingMatches}
                  onRefresh={onRefreshUpcomingMatches}
                  colors={["#c42414"]} // Set color of the refresh indicator
                  tintColor={"#c42414"} // Set color of the refresh indicator on iOS
                />
              }
              ListEmptyComponent={renderEmptyUpcoming}
              contentContainerStyle={styles.scrollViewContainer}
              numColumns={1}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              onEndReached={handleEndReachedUpcomingMatches}
            />
            {/* {
                data.upcoming_matches.length != 0 ? (
                  <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                    {(
                      data.upcoming_matches?.map((item, index) => (
                        
                      ))
                    )}
                  </ScrollView>
                ) : (
                  <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center', paddingTop: 20}}>
                    <Text style={{fontSize: FONTSIZE.semi_large}}>No upcoming matches</Text>
                  </View>
                )
              } */}
          </View>
        </>
      ) : (
        <View style={styles.filteredContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Filtered</Text>
            <Text style={styles.results}>{filteredData.length} Results</Text>
          </View>
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
              gap: SIZES.xxxLarge,
              paddingBottom: hp("18%"),
            }}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={400}
            refreshControl={
              <RefreshControl
                refreshing={refreshingFilteredData}
                onRefresh={onRefreshFiltered}
                colors={["#c42414"]} // Set color of the refresh indicator
                tintColor={"#c42414"} // Set color of the refresh indicator on iOS
              />
            }
          >
            {filteredData?.map((item, index) => {
              if (item.type === "league-season") {
                return (
                  <View style={styles.cardContainer} key={index}>
                    <View style={styles.cardHeader}>
                      <View style={styles.leagueOwnerContainer}>
                        <Text style={styles.leagueOwnerText}>
                          {item.league_owner_profile.name}
                        </Text>
                        <FontAwesomeIcon icon={faXmark} size={hp(2.5)} />
                      </View>
                      <Text style={styles.dateText}>
                        {moment(item.created_at).format("MMMM D")}
                      </Text>
                    </View>
                    <ViewShot
                      ref={viewShotRef1}
                      options={{ format: "jpg", quality: 0.9 }}
                    >
                      <View style={styles.cardBody}>
                        <View style={styles.leagueNameContainer}>
                          <Text style={styles.leagueNameText}>
                            {item.league.name}
                          </Text>
                        </View>
                        <View style={styles.openingDateContainer}>
                          <Text style={styles.openingDateText}>
                            {moment(item.opening_date).format("MMM D | h:mm A")}
                          </Text>
                        </View>
                        {(item.location.barangay.name ||
                          item.location.city.name ||
                          item.location.province.name) && (
                          <View style={styles.leagueAddressContainer}>
                            <Text style={styles.addressText}>
                              {item.location.barangay.name},{" "}
                              {item.location.city.name},{" "}
                              {item.location.province.name}
                            </Text>
                          </View>
                        )}
                      </View>
                    </ViewShot>
                    <View style={styles.cardFooter}>
                      {/* <View>
                            <Text style={styles.reactsText}>0 Reacts ⋅ 0 Share</Text>
                          </View> */}
                      <TouchableOpacity
                        style={styles.buttonsContainer}
                        onPress={captureImages}
                      >
                        {/* <FontAwesomeIcon icon={faThumbsUp} size={hp(2.8)}/> */}
                        <FontAwesomeIcon
                          icon={faShareFromSquare}
                          size={hp(2.8)}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              } else if (item.type === "ongoing-matchup") {
                return (
                  <View style={styles.cardContainer} key={index}>
                    <View style={styles.cardHeader}>
                      <View style={styles.leagueOwnerContainer}>
                        <Text style={styles.leagueOwnerText}>
                          {item.league_owner_profile.name}
                        </Text>
                        <FontAwesomeIcon icon={faXmark} size={hp(2.5)} />
                      </View>
                      <Text style={styles.dateText}>
                        {moment(item.created_at).format("MMMM D")}
                      </Text>
                    </View>
                    <View style={styles.matchupCardBody}>
                      <View style={styles.matchupLeagueNameContainer}>
                        <Text style={styles.matchupLeagueNameText}>
                          {item.league.name}
                        </Text>
                        <Text style={styles.gameText}>GAME 1</Text>
                      </View>
                      <View style={styles.participantsContainer}>
                        <View style={styles.teamContainer}>
                          <View style={styles.teamImageAndScoreContainer}>
                            <Image
                              source={{
                                uri: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                              }}
                              resizeMode="contain"
                              style={styles.teamImage}
                            />
                            <Text style={styles.scoreText}>99</Text>
                          </View>
                        </View>
                        <View style={styles.quarterContainer}>
                          <Text style={styles.numberText}>4th</Text>
                          <Text style={styles.quarterText}>QTR</Text>
                        </View>
                        <View style={styles.teamContainer}>
                          <View style={styles.teamImageAndScoreContainer}>
                            <Text style={styles.scoreText}>99</Text>
                            <Image
                              source={{
                                uri: "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                              }}
                              resizeMode="contain"
                              style={styles.teamImage}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.teamNameContainer}>
                        <Text style={styles.teamNameText}>
                          {item.participants.team_a.name}
                        </Text>
                        <Text style={styles.teamNameText}>
                          {item.participants.team_b.name}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardFooter}>
                      {/* <View>
                            <Text style={styles.reactsText}>0 Reacts ⋅ 0 Share</Text>
                          </View> */}
                      <View style={styles.buttonsContainer}>
                        {/* <FontAwesomeIcon icon={faThumbsUp} size={hp(2.8)}/> */}
                        <FontAwesomeIcon
                          icon={faShareFromSquare}
                          size={hp(2.8)}
                        />
                      </View>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={styles.cardContainer} key={index}>
                    <View style={styles.cardHeader}>
                      <View style={styles.leagueOwnerContainer}>
                        <Text style={styles.leagueOwnerText}>
                          {item.league_owner_profile.name}
                        </Text>
                        <FontAwesomeIcon icon={faXmark} size={hp(2.5)} />
                      </View>
                      <Text style={styles.dateText}>
                        {moment(item.created_at).format("MMMM D")}
                      </Text>
                    </View>
                    <FinishedLeagueCarousel data={item.data} />
                    <View style={styles.cardFooter}>
                      {/* <View>
                            <Text style={styles.reactsText}>0 Reacts ⋅ 0 Share</Text>
                          </View> */}
                      <View style={styles.buttonsContainer}>
                        {/* <FontAwesomeIcon icon={faThumbsUp} size={hp(2.8)}/> */}
                        <FontAwesomeIcon
                          icon={faShareFromSquare}
                          size={hp(2.8)}
                        />
                      </View>
                    </View>
                  </View>
                );
              }
            })}
            {isLoadingFilteredData && (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
            {!isLoadingFilteredData && !hasMoreFilteredData && (
              <Text>No more data</Text>
            )}
          </ScrollView>
          {/* <ScrollView contentContainerStyle={{ alignItems: 'center', gap: SIZES.xxxLarge, paddingBottom: hp('18%') }} showsVerticalScrollIndicator={false}>
              {(
                filteredData?.map((item, index) => (
                  <View style={styles.cardContainer} key={index}>
                    <View style={styles.cardHeader}>
                      <View style={styles.leagueOwnerContainer}>
                        <Text style={styles.leagueOwnerText}>{item.team_a.league_season_category.league_season.league.owner_user.profile.full_name}</Text>
                        <FontAwesomeIcon icon={faXmark} size={hp(2.5)}/>
                      </View>
                      <Text style={styles.dateText}>{moment(item.created_at).format('MMMM D')}</Text>
                    </View>
                    <View style={styles.matchupCardBody}>
                      <View style={styles.matchupLeagueNameContainer}>
                        <Text style={styles.matchupLeagueNameText}>{item.team_a.league_season_category.league_season.league.name}</Text>
                        <Text style={styles.gameText}>GAME 1</Text>
                      </View>
                      <View style={styles.participantsContainer}>
                        <View style={styles.teamContainer}>
                          <View style={styles.teamImageAndScoreContainer}>
                            {
                              item.team_a.team_profile.default_team_profile_pic ? (
                                <Image source={{ uri: item.team_a.team_profile.default_team_profile_pic.image }} resizeMode="contain" style={styles.teamImage} />
                              ) : (
                                <Image source={require('../../../assets/teamPlaceholders/team-placeholder-04.png')} resizeMode="contain" style={styles.teamImage} />
                              )
                            }
                            <Text style={styles.scoreText}>{item.match_summary.team_score_A}</Text>
                          </View>
                        </View>
                        <View style={styles.quarterContainer}>
                          <Text style={styles.numberText}>{item.match_stats_a.period.name}</Text>
                          <Text style={styles.quarterText}>{item.match_stats_a.period.type}</Text>
                        </View>
                        <View style={styles.teamContainer}>
                          <View style={styles.teamImageAndScoreContainer}>
                            <Text style={styles.scoreText}>{item.match_summary.team_score_B}</Text>
                            {
                              item.league_participant_b.team_profile.default_team_profile_pic ? (
                                <Image source={{ uri: item.league_participant_b.team_profile.default_team_profile_pic.image }} resizeMode="contain" style={styles.teamImage} />
                              ) : (
                                <Image source={require('../../../assets/teamPlaceholders/team-placeholder-04.png')} resizeMode="contain" style={styles.teamImage} />
                              )
                            }
                          </View>
                        </View>
                      </View>
                      <View style={styles.teamNameContainer}>
                        <Text style={styles.teamNameText}>{item.team_a.team_profile.name}</Text>
                        <Text style={styles.teamNameText}>{item.league_participant_b.team_profile.name}</Text>
                      </View>
                    </View>
                    <View style={styles.cardFooter}>
                      <View style={styles.buttonsContainer}>
                        <FontAwesomeIcon icon={faShareFromSquare} size={hp(2.8)}/>
                      </View>
                    </View>
                  </View>
                ))
              )}
            </ScrollView> */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Leagues;
