import React, { useState, useEffect, useRef, useContext } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  Button,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import styles from "./home.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import moment from "moment/moment";
import Carousel from "../../../components/common/cards/Carousel/Carousel";
import { Carousel as ReactCarousel } from "react-native-reanimated-carousel";
import NewUserModal from "../modal/NewUserModal";
import Header from "../../../components/header/Header";
import { useMutation } from "@tanstack/react-query";
import { fetchLeagueMatchupsFeed } from "../../../api/leagueApi";
// import { ShareDialog } from "react-native-fbsdk-next";
import { Share } from "react-native";
import { AuthContext } from "../../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShareFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import FinishedLeagueCarousel from "./carousel/FinishedLeagueCarousel";
// import ViewShot from "react-native-view-shot";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import io from "socket.io-client";
import Toast from "react-native-toast-message";
import SuccessJoinTeamModal from "../../../components/modals/successJoinTeam/SuccessJoinTeamModal";
import { useDispatch, useSelector } from "react-redux";
import {
  isActivePlayerVisibleValue,
  isSuccessJoinTeamVisibleValue,
  setIsActivePlayerVisible,
  setIsSuccessJoinTeamVisible,
} from "../../../features/modal/modalSlice";
import ActivePlayerModal from "../../../components/modals/activePlayer/ActivePlayerModal";
import { isEmptyObject } from "../../../utils/helpers";

const carouselData = [
  {
    id: 1,
    title: "DOBLIFE",
    body: "Unleash your potential with every bounce!",
    imgUrl: require("../../../assets/feedPlaceholders/feed-background-01.png"),
  },
  {
    id: 2,
    title: "DOBLIFE",
    body: "Basketball: It's more than a game; it's a passion.",
    imgUrl: require("../../../assets/feedPlaceholders/feed-background-02.png"),
  },
  {
    id: 3,
    title: "DOBLIFE",
    body: "Shoot for the stars and dunk your dreams!",
    imgUrl: require("../../../assets/feedPlaceholders/feed-background-03.png"),
  },
  {
    id: 4,
    title: "DOBLIFE",
    body: "Every play, every day, bring your A-game!",
    imgUrl: require("../../../assets/feedPlaceholders/feed-background-04.png"),
  },
  {
    id: 5,
    title: "DOBLIFE",
    body: "Chase greatness, one basket at a time.",
    imgUrl: require("../../../assets/feedPlaceholders/feed-background-05.png"),
  },
];

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const viewShotRef1 = useRef(null);
  const viewShotRef2 = useRef(null);
  const [refreshing, setRefreshing] = useState(false);
  const { userToken, userProfile } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [socket, setSocket] = useState(null);
  const isSuccessJoinTeamVisible = useSelector(isSuccessJoinTeamVisibleValue);
  const isActivePlayerVisible = useSelector(isActivePlayerVisibleValue);

  const { mutateAsync: fetchLeagueMatchupsFeedMutation } = useMutation({
    mutationFn: fetchLeagueMatchupsFeed,
    onSuccess: (data) => {
      setData((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setLoading(false);
    },
  });

  const onRefresh = () => {
    setData([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchLeagueMatchupsFeed();
    } else {
      setPage(1);
    }
  };

  const handleFetchLeagueMatchupsFeed = async () => {
    setLoading(true);
    const params = {
      page: page,
    };

    try {
      await fetchLeagueMatchupsFeedMutation({ userToken, params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  // const shareLinkContent = {
  //   contentType: 'photo',
  // photos: [{ imageUrl: 'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', userGenerated: true }],
  //   contentUrl: "https://facebook.com",
  // };

  const captureImages = async () => {
    try {
      const uri1 = await viewShotRef1.current.capture();
      // Now you have the URIs of the captured images (uri1, uri2)
      // Pass these URIs to the function that shares them
      console.log(uri1);
      onShare([uri1]);
    } catch (error) {
      console.error("Failed to capture images:", error);
    }
  };

  const onShare = (capturedImages) => {
    let options = {
      title: "Share multiple images",
      urls: capturedImages,
      type: "image/jpeg", // or 'image/png'
    };
    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      });
  };

  const shareLinkContent = {
    contentType: "link",
    photos: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userGenerated: true,
      },
    ],
    contentUrl: "https://facebook.com",
  };

  const checkProfileIdExists = (item) => {
    let found = false;
    if (item.participants) {
      item.participants.forEach((participant) => {
        if (participant.team_roster) {
          participant.team_roster.forEach((roster) => {
            if (roster.profile_id === userProfile.id) {
              found = true;
            }
          });
        }
      });
    }

    return found;
  };

  const handleOkay = () => {
    dispatch(setIsActivePlayerVisible(false));
    dispatch(setIsSuccessJoinTeamVisible(true));
  };

  const handleGoToSearch = () => {
    navigation.navigate("SearchCourtside");
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    if (isCloseToBottom && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleJoinNow = (item) => {
    if (item.join_status == "closed") {
      Toast.show({
        type: "customErrorToast",
        text1: "Oh snap!",
        text2: `The ${item.league.name} has already closed. Joining this league is no longer available`,
      });

      return;
    }

    navigation.navigate("JoinALeague");
  };

  useEffect(() => {
    async function checkDismissedStatus() {
      try {
        const dismissed = await AsyncStorage.getItem("dismissedMessage");
        if (dismissed === "true") {
          setShowMessage(false);
        } else {
          setModalVisible(true);
        }
      } catch (error) {
        console.error(
          "Error reading dismissed status from AsyncStorage:",
          error
        );
      }
    }
    checkDismissedStatus();
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    // Optional: You can update state or perform actions here on modal close.
  };

  useEffect(() => {
    handleFetchLeagueMatchupsFeed();
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <NewUserModal
        navigation={navigation}
        messageKey="dismissedMessage"
        visible={modalVisible}
        onClose={handleCloseModal}
      />
      <Header
        title="COURT SIDE"
        navigation={navigation}
        onPressSearch={handleGoToSearch}
      />
      <View style={styles.cardsContainer}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ paddingBottom: hp("10%"), paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={400}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#c42414"]} // Set color of the refresh indicator
              tintColor={"#c42414"} // Set color of the refresh indicator on iOS
            />
          }
        >
          <View style={styles.carouselContainer}>
            <Carousel data={carouselData} />
          </View>
          <View style={styles.courtSideContainer}>
            <Text style={styles.courtSideText}>Court Side</Text>
          </View>
          <ScrollView
            contentContainerStyle={styles.feedContainer}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={400}
          >
            {data?.map((item, index) => {
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

                        {!checkProfileIdExists(item) ? (
                          <TouchableOpacity
                            style={styles.joinNowContainer}
                            onPress={() => handleJoinNow(item)}
                          >
                            <Text style={styles.joinNowText}>JOIN NOW</Text>
                          </TouchableOpacity>
                        ) : (
                          <View style={styles.joinNowContainer}>
                            <Text style={styles.joinNowText}>JOINED</Text>
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
                            {item.participants.team_a.image ? (
                              <Image
                                source={{ uri: item.participants.team_a.image }}
                                resizeMode="contain"
                                style={styles.teamImage}
                              />
                            ) : (
                              <Image
                                source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                                resizeMode="contain"
                                style={styles.teamImage}
                              />
                            )}
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
                            {item.participants.team_b.image ? (
                              <Image
                                source={{ uri: item.participants.team_b.image }}
                                resizeMode="contain"
                                style={styles.teamImage}
                              />
                            ) : (
                              <Image
                                source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                                resizeMode="contain"
                                style={styles.teamImage}
                              />
                            )}
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
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {!loading && !hasMore && <Text>No more data</Text>}
          </ScrollView>
          {/* {(
            data?.map((data) => (
              <BallFeedCard
                key={data.feed_id}
                data={data}
              />
            ))
          )} */}
        </ScrollView>
        <ActivePlayerModal
          isVisible={isActivePlayerVisible}
          isCanceled={() => dispatch(setIsActivePlayerVisible(false))}
          handleOkay={() => handleOkay()}
        />
        <SuccessJoinTeamModal
          isVisible={isSuccessJoinTeamVisible}
          isCanceled={() => dispatch(setIsSuccessJoinTeamVisible(false))}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
