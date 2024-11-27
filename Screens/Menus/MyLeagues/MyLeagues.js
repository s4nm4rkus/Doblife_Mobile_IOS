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
} from "react-native";
import styles from "./myLeagues.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LeagueCard from "./card/LeagueCard";
import Header from "../../../components/header/Header";
import { AuthContext } from "../../../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProfileHistory } from "../../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
// import ModalComponent from "../Profiles/tab/teams/modal/ModalComponent";
// import {
//   ownedLeagueCheckedValue,
//   playedInCheckedValue,
// } from "../../../features/myLeaguesFilter/myLeaguesFilterSlice";
import { deleteLeague, fetchMyLeagues } from "../../../api/leagueApi";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetContentFilterMyLeagues from "./bottomSheet/leagueFilter/BottomSheetContentFilterMyLeagues";
import BottomSheetContentDeleteMyLeagues from "./bottomSheet/leagueDelete/BottomSheetContentDeleteMyLeagues";

const MyLeagues = ({ navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { userToken, userProfile, logout } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [leagues, setLeagues] = useState([]);
  const [page, setPage] = useState(1);
  const [leagueID, setLeagueID] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const isPlayedInChecked = useSelector(playedInCheckedValue);
  const isOwnedLeagueChecked = useSelector(ownedLeagueCheckedValue);

  const bottomSheetModalRef = useRef(BottomSheetModal);
  const bottomSheetModalRef2 = useRef(BottomSheetModal);

  const { mutateAsync: fetchMyLeaguesMutation } = useMutation({
    mutationFn: fetchMyLeagues,
    onSuccess: (data) => {
      setLeagues((prevData) => [...prevData, ...data.data]);
      setHasMore(data.next_page_url !== null);
      setRefreshing(false);
      setIsLoading(false);
      // console.log(data.length)
    },
  });

  const handleFetchMyLeagues = async () => {
    setIsLoading(true);

    const initialParams = {
      profile_id: userProfile.id,
      user_id: userProfile.user_id,
      is_played_in_checked: isPlayedInChecked,
      is_owned_league_checked: isOwnedLeagueChecked,
      page: page,
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchMyLeaguesMutation({ userToken, params });
      setIsLoading(false);
    } catch (e) {
      console.log(e.response);
      console.log(e);
    }
  };

  const onRefresh = () => {
    setLeagues([]);
    setRefreshing(true);
    if (page == 1) {
      handleFetchMyLeagues();
    } else {
      setPage(1);
    }
  };

  const renderListItem = ({ item, index }) => {
    return (
      <LeagueCard
        key={item.id}
        data={item}
        ownerID={userProfile.user_id}
        index={index}
        navigation={navigation}
        deleteLeague={handleShowDeleteLeagueBottomSheet}
      />
    );
  };

  useEffect(() => {
    handleFetchMyLeagues();
  }, [isPlayedInChecked, isOwnedLeagueChecked, page]);

  // const { data: leagues, isLoading, isError, error } = useQuery({
  //   queryKey: ["leagues", {isPlayedInChecked, isOwnedLeagueChecked}],
  //   queryFn: () => fetchMyLeagues({
  //     userToken,
  //     params: {
  //       profile_id: userProfile.id,
  //       user_id: userProfile.user_id,
  //       is_played_in_checked: isPlayedInChecked,
  //       is_owned_league_checked: isOwnedLeagueChecked,
  //     }
  //   })
  // })

  const { mutateAsync: deleteLeagueMutation } = useMutation({
    mutationFn: deleteLeague,
    onSuccess: (data) => {
      bottomSheetModalRef2.current?.dismiss();
      handleFetchMyLeagues();
    },
  });

  const handleShowDeleteLeagueBottomSheet = (leagueID) => {
    setLeagueID(leagueID);
    bottomSheetModalRef2.current?.dismiss();
    bottomSheetModalRef.current?.dismiss();
    setTimeout(() => {
      bottomSheetModalRef2.current?.present();
    }, 500);
  };

  const handleDeleteLeague = async () => {
    const params = {
      user_id: userProfile.user_id,
      league_id: leagueID,
    };

    try {
      await deleteLeagueMutation({ userToken, params });
    } catch (e) {
      console.log(e);
    }
  };

  const handleEndReached = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleFilter = () => {
    bottomSheetModalRef2.current?.dismiss();
    bottomSheetModalRef.current?.present();
  };

  const renderFooter = () => (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      {isLoading && <ActivityIndicator size="large" color="#9b001c" />}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="MY LEAGUES"
        navigation={navigation}
        onPressFilter={handleFilter}
      />
      <View style={styles.teamsContainer}>
        <FlatList
          data={leagues}
          numColumns={2}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          ListFooterComponent={renderFooter}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#c42414"]} // Set color of the refresh indicator
              tintColor={"#c42414"} // Set color of the refresh indicator on iOS
            />
          }
          onEndReachedThreshold={0.2}
          onEndReached={handleEndReached}
        />
      </View>
      <BottomSheetContentFilterMyLeagues
        bottomSheetModalRef={bottomSheetModalRef}
      />
      <BottomSheetContentDeleteMyLeagues
        bottomSheetModalRef={bottomSheetModalRef2}
        deleteLeague={handleDeleteLeague}
      />
    </SafeAreaView>
  );
};

export default MyLeagues;
