import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./teamsTable.style";
import { useMutation } from "@tanstack/react-query";
import {
  fetchMyTeamRosters,
  fetchTeamRosters,
} from "../../../api/teamRosterApi";
import { AuthContext } from "../../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPageValue,
  lastPageValue,
  paginationButtonsValue,
  teamRostersValue,
  removeProfileHistory,
  searchValue,
  setCurrentPage,
  setLastPage,
  setPaginationButtons,
  setTeamRosters,
  setSelectedTeams,
} from "../../../features/selectTeam/selectTeamSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const profileImageUrl =
  "https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const TeamsTable = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userToken, userProfile } = useContext(AuthContext);
  const teamRosters = useSelector(teamRostersValue);
  const currentPage = useSelector(currentPageValue);
  const lastPage = useSelector(lastPageValue);
  const paginationButtons = useSelector(paginationButtonsValue);
  const search = useSelector(searchValue);

  const { mutateAsync: fetchMyTeamRostersMutation } = useMutation({
    mutationFn: fetchMyTeamRosters,
    onSuccess: (data) => {
      const buttons = [];

      for (let i = 1; i <= Math.ceil(data.total / 10); i++) {
        buttons.push(i);
      }
      dispatch(setPaginationButtons(buttons));
      dispatch(setLastPage(data.total));
      dispatch(setTeamRosters(data.data));
    },
  });

  const handleFetchMyTeamRosters = async () => {
    const initialParams = {
      page: currentPage,
      search: search,
      items: 10,
      order_by: "created_at",
      sort: "desc",
    };

    const params = {
      ...initialParams,
    };

    try {
      await fetchMyTeamRostersMutation({ userToken, params });
    } catch (e) {
      console.log(e);
    }
  };

  const handleJoinTeam = (item) => {
    dispatch(removeProfileHistory(item.id));
    dispatch(setSelectedTeams(item));
  };

  const handlePreviousPage = () => {
    if (currentPage == 1) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextPage = () => {
    if (lastPage == currentPage) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handlePageClick = (page) => {
    dispatch(setCurrentPage(page));
  };

  useEffect(() => {
    handleFetchMyTeamRosters();
  }, [currentPage, search]);

  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            nestedScrollEnabled={true}
          >
            {teamRosters.length == 0 ? (
              <View style={styles.rowContainer}>
                <Text style={styles.noTeamsText}>
                  No available teams on the list
                </Text>
              </View>
            ) : (
              teamRosters?.map((item, index) => (
                <View
                  style={styles.rowContainer}
                  onStartShouldSetResponder={() => true}
                  key={index}
                >
                  <TouchableOpacity
                    key={item}
                    onPress={() => handleJoinTeam(item)}
                    style={styles.rowWrapper}
                    hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                  >
                    {item.league_participant.team_profile
                      .default_team_profile_pic ? (
                      <Image
                        source={{
                          uri: item.league_participant.team_profile
                            .default_team_profile_pic.image,
                        }}
                        resizeMode="contain"
                        style={styles.teamLogo}
                      />
                    ) : (
                      <Image
                        source={require("../../../assets/teamPlaceholders/team-placeholder-04.png")}
                        resizeMode="contain"
                        style={styles.teamLogo}
                      />
                    )}
                    <Text style={styles.teamName}>
                      {item.league_participant.team_profile.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </ScrollView>
        </View>
        <View style={styles.paginationContainer}>
          <View style={styles.paginationWrapper}>
            <TouchableOpacity
              onPress={() => handlePreviousPage()}
              hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                size={hp(2.2)}
                color={"#c42414"}
              />
            </TouchableOpacity>
            <ScrollView
              contentContainerStyle={styles.scrollViewButtonContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {paginationButtons?.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => handlePageClick(item)}
                  style={[
                    styles.paginationButton,
                    item === currentPage ? styles.activeButton : null,
                  ]}
                  hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                >
                  <Text
                    style={[
                      item === currentPage
                        ? styles.activeButtonText
                        : styles.buttonText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              onPress={() => handleNextPage()}
              hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size={hp(2.2)}
                color={"#c42414"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeamsTable;
