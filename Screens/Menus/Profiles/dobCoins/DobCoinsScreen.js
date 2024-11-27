import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./dobCoinsScreen.style";
import Header from "./header/Header";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleExclamation, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../../../context/AuthContext";
import { fetchLeagueDobcoinsUpcomingLeagues } from "../../../../api/leagueApi";
import moment from "moment/moment";
// import ViewShot from "react-native-view-shot";
import { fetchPlayerDobcoins } from "../../../../api/profileApi";
import Toast from "react-native-toast-message";

const DobCoinsScreen = ({ navigation }) => {
  const [isBusy, setBusy] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [dobcoins, setDobcoins] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const { userToken, userProfile } = useContext(AuthContext);

  const onRefresh = () => {
    setData([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchLeagueDobcoinsUpcomingLeagues();
    } else {
      setPage(1);
    }
  };

  const { mutateAsync: fetchLeagueDobcoinsUpcomingLeaguesMutation } =
    useMutation({
      mutationFn: fetchLeagueDobcoinsUpcomingLeagues,
      onSuccess: (data) => {
        setData((prevData) => [...prevData, ...data.data]);
        setHasMore(data.next_page_url !== null);
        setRefreshing(false);
        setLoading(false);
      },
    });

  const { mutateAsync: fetchPlayerDobcoinsMutation } = useMutation({
    mutationFn: fetchPlayerDobcoins,
    onSuccess: (data) => {
      setDobcoins(data);
    },
  });

  const handleFetchLeagueDobcoinsUpcomingLeagues = async () => {
    setLoading(true);
    const params = {
      page: page,
    };

    try {
      await fetchLeagueDobcoinsUpcomingLeaguesMutation({ userToken, params });
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const handleFetchPlayerDobcoins = async () => {
    const params = {};

    try {
      await fetchPlayerDobcoinsMutation({ params, userToken });
    } catch (e) {}
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
    handleFetchPlayerDobcoins();
  }, [refreshing]);

  useEffect(() => {
    handleFetchLeagueDobcoinsUpcomingLeagues();
  }, [page]);

  return (
    <>
      {isBusy ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
          }}
        >
          <ActivityIndicator size="large" color="#9b001c" />
        </View>
      ) : (
        <View style={styles.container}>
          <Header navigation={navigation} />
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ paddingBottom: hp("10%") }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#c42414"]}
                tintColor={"#c42414"}
              />
            }
            onScroll={handleScroll}
            scrollEventThrottle={400}
          >
            <LinearGradient
              colors={["#c42414", "#7c0b00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.dobCoinsContainer}
            >
              <View style={styles.dobCoinsValueContainer}>
                <Text style={styles.dobCoinsText}>Dob Coins</Text>
                <Text style={styles.dobCoinsValueText}>{dobcoins}</Text>
              </View>
              <View style={styles.starContainer}>
                <FontAwesomeIcon icon={faStar} color="#f18805" size={hp(5)} />
              </View>
            </LinearGradient>
            <View style={styles.creditPointsContainer}>
              <View style={styles.phpContainer}>
                <Text style={styles.phpText}>PHP</Text>
              </View>
              <View style={styles.creditPointsValueContainer}>
                <Text style={styles.creditPointsValueText}>50</Text>
              </View>
              <View style={styles.creditPointsTextContainer}>
                <Text style={styles.creditPointsText}>Credit Points</Text>
              </View>
            </View>

            <View style={styles.redeemContainer}>
              <View style={styles.redeemInfoContainer}>
                <View>
                  <FontAwesomeIcon
                    icon={faCircleExclamation}
                    color="black"
                    size={hp(3.15)}
                  />
                </View>
                <View>
                  <Text style={styles.redeemDescriptionText}>
                    You need a certain amount of points to redeem.
                  </Text>
                </View>
              </View>
              <View style={styles.pointsContainer}>
                <TouchableOpacity
                  onPress={() => console.log("test")}
                  style={styles.redeemButtonContainer}
                >
                  <LinearGradient
                    style={styles.pointsWrapper}
                    colors={["#c42414", "#7c0b00"]}
                  >
                    <Text style={styles.pointsText}>Redeem</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.earnPointsContainer}>
              <Text style={styles.earnPointsText}>Earn Points</Text>
              <Text style={styles.earnPointsDescriptionText}>
                Here are some of Leagues for you to join in.
              </Text>
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
                        <Text style={styles.leagueOwnerText}>
                          {item.league_owner_profile.name}
                        </Text>
                        <Text style={styles.dateText}>
                          {moment(item.created_at).format("MMMM D")}
                        </Text>
                      </View>
                      <ViewShot options={{ format: "jpg", quality: 0.9 }}>
                        <View style={styles.cardBody}>
                          <View style={styles.leagueNameContainer}>
                            <Text style={styles.leagueNameText}>
                              {item.league.name}
                            </Text>
                          </View>
                          <View style={styles.openingDateContainer}>
                            <Text style={styles.openingDateText}>
                              {moment(item.opening_date).format(
                                "MMM D | h:mm A"
                              )}
                            </Text>
                          </View>
                          <View style={styles.leagueAddressContainer}>
                            <Text style={styles.addressText}>
                              {item.location.barangay.name},{" "}
                              {item.location.city.name},{" "}
                              {item.location.province.name}
                            </Text>
                          </View>
                          <TouchableOpacity
                            style={styles.joinNowContainer}
                            onPress={() => handleJoinNow(item)}
                          >
                            <Text style={styles.joinNowText}>JOIN NOW</Text>
                          </TouchableOpacity>
                        </View>
                      </ViewShot>
                    </View>
                  );
                }
              })}

              {loading && <ActivityIndicator size="large" color="#0000ff" />}
              {!loading && !hasMore && <Text>No more data</Text>}
            </ScrollView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default DobCoinsScreen;
