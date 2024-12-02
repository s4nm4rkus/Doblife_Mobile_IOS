import React, { useRef, useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FONTSIZE } from "../../constants/theme";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useReducedMotion } from "react-native-reanimated";
// import { BannerAd, BannerAdSize, InterstitialAd, RewardedInterstitialAd, RewardedAdEventType, TestIds} from 'react-native-google-mobile-ads';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import {
  faBasketball,
  faChevronRight,
  faCirclePlus,
  faPeopleGroup,
  faPerson,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { fetchTeams } from "../../api/teamApi";
import {
  ownedTeamCheckedValue,
  playedInCheckedValue,
} from "../../features/myTeamsFilter/myTeamsFilterSlice";
import {
  leaveTeamOpenValue,
  setIsLeaveTeamOpen,
} from "../../features/myTeamsLeaveTeam/myTeamsLeaveTeamSlice";
import CourtIcon from "../../assets/icons/Court";

import Home from "./Home/Home";
import Leagues from "./Leagues/Leagues";
import MyTeams from "../Menus/MyTeams/MyTeams";
import MyLeagues from "../Menus/MyLeagues/MyLeagues";
import Create from "../Tabs/Create/Create";
import Players from "./Players/Players";
import Teams from "./Teams/Teams";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useProfileData } from "../../hooks/useProfileData";
import { AuthContext } from "../../context/AuthContext";
import { useIsFocused } from "@react-navigation/native";

import BottomSheetContent from "../../components/bottomSheet/BottomSheetContent";
import styles from "./Home/home.style";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Court: faBasketball,
  Leagues: faTrophy,
  Option: faCirclePlus,
  Players: faPerson,
  Teams: faPeopleGroup,
};

const StackNavigator = ({ bottomSheetModalRef }) => {
  console.log(
    "Rendering StackNavigator with bottomSheetModalRef",
    bottomSheetModalRef
  );
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BallFeed"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="MyTeams" options={{ headerShown: false }}>
        {(props) => (
          <MyTeams {...props} bottomSheetModalRef={bottomSheetModalRef} />
        )}
      </Stack.Screen>
      <Stack.Screen name="MyLeagues" options={{ headerShown: false }}>
        {(props) => (
          <MyLeagues {...props} bottomSheetModalRef={bottomSheetModalRef} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

const MainScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { logout, userToken } = useContext(AuthContext);
  const isPlayedInChecked = useSelector(playedInCheckedValue);
  const isOwnedTeamChecked = useSelector(ownedTeamCheckedValue);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%", "50%", "100%"];
  const firstUpdate = useRef(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isFocused = useIsFocused();

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useProfileData(userToken);

  const { mutateAsync: fetchTeamsMutation } = useMutation({
    mutationFn: fetchTeams,
    onSuccess: () => {
      queryClient.invalidateQueries(["teams"]);
    },
  });

  const renderBackdrop = (props) => (
    <BottomSheetBackdrop
      {...props}
      appearsOnIndex={1}
      animatedIndex={{
        value: 1,
      }}
    />
  );

  const renderBottomSheet = (bottomSheetModalRef) => {
    console.log("Rendering bottom sheet content");
    return (
      <BottomSheetContent
        navigation={navigation}
        bottomSheetModalRef={bottomSheetModalRef}
      />
    );
  };

  const handleFilterTeams = async () => {
    const params = {
      profile_id: profile.id,
      is_played_in_checked: isPlayedInChecked,
      is_owned_team_checked: isOwnedTeamChecked,
    };

    try {
      await fetchTeamsMutation({ userToken, params });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    handleFilterTeams();
  }, [isPlayedInChecked, isOwnedTeamChecked]);

  const handlePresentModal = () => {
    try {
      bottomSheetModalRef.current?.present();
    } catch (error) {
      console.error("Error presenting bottom sheet:", error);
    }
  };

  const handleBottomSheetDismiss = () => {
    setIsFilterOpen(false);
    dispatch(setIsLeaveTeamOpen(false));
  };

  const handleGesture = (evt) => {
    const { nativeEvent } = evt;

    if (isFilterOpen) return;

    if (nativeEvent.velocityY < 0) {
      setIsFilterOpen(true);
      handlePresentModal();
      return;
    }
  };

  const handlePressNavigation = (item) => {
    if (item.route.name == "Court") {
      item.navigation.navigate("BallFeed");
      return;
    }

    if (item.route.name == "Option") {
      handlePresentModal();
      return;
    }

    item.navigation.navigate(item.route.name);
  };

  if (isError) {
    {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        tabBar={(props) => {
          try {
            return (
              <View
                style={{
                  height: hp(7.7),
                  backgroundColor: "white",
                  shadowColor: "black",
                  elevation: 15,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {Object.keys(props.descriptors).map((key) => {
                    try {
                      // Check if descriptor for the tab exists
                      const descriptor = props.descriptors[key];
                      if (!descriptor) {
                        console.error(`No descriptor found for key: ${key}`);
                        return null;
                      }

                      if (descriptor.route.name === "Option") {
                        return (
                          <TouchableOpacity
                            key={key}
                            onPress={() => {
                              try {
                                handlePressNavigation(descriptor);
                              } catch (error) {
                                console.error(
                                  "Error in handlePressNavigation for Option tab:",
                                  error
                                );
                              }
                            }}
                          >
                            <View
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                top: Platform.OS == "ios" ? -10 : hp(-1.68),
                              }}
                            >
                              <FontAwesomeIcon
                                icon={
                                  descriptor.navigation.isFocused()
                                    ? icons[descriptor.route.name]
                                    : icons[descriptor.route.name]
                                }
                                size={hp(8.4)}
                                color={"#c42414"}
                              />
                            </View>
                          </TouchableOpacity>
                        );
                      }

                      if (descriptor.route.name === "Court") {
                        return (
                          <TouchableOpacity
                            key={key}
                            onPress={() => {
                              try {
                                handlePressNavigation(descriptor);
                              } catch (error) {
                                console.error(
                                  "Error in handlePressNavigation for Court tab:",
                                  error
                                );
                              }
                            }}
                          >
                            <View
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <CourtIcon
                                width={hp(4.3)}
                                height={hp(3.5)}
                                fill={
                                  descriptor.navigation.isFocused()
                                    ? "#c42414"
                                    : "#e19189"
                                }
                              />

                              <Text
                                style={{
                                  color: descriptor.navigation.isFocused()
                                    ? "#c42414"
                                    : "#e19189",
                                  fontFamily: "RobotoCondensedBold",
                                  fontSize: FONTSIZE.small_6,
                                }}
                              >
                                {descriptor.route.name.toUpperCase()}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        );
                      }

                      return (
                        <TouchableOpacity
                          key={key}
                          onPress={() => {
                            try {
                              handlePressNavigation(descriptor);
                            } catch (error) {
                              console.error(
                                "Error in handlePressNavigation:",
                                error
                              );
                            }
                          }}
                        >
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={
                                descriptor.navigation.isFocused()
                                  ? icons[descriptor.route.name]
                                  : icons[descriptor.route.name]
                              }
                              size={hp(3.5)}
                              color={
                                descriptor.navigation.isFocused()
                                  ? "#c42414"
                                  : "#e19189"
                              }
                            />
                            <Text
                              style={{
                                color: descriptor.navigation.isFocused()
                                  ? "#c42414"
                                  : "#e19189",
                                fontFamily: "RobotoCondensedBold",
                                fontSize: FONTSIZE.small_6,
                              }}
                            >
                              {descriptor.route.name.toUpperCase()}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    } catch (error) {
                      console.error("Error rendering tab:", error);
                      return null;
                    }
                  })}
                </View>
              </View>
            );
          } catch (error) {
            console.error("Error in tabBar rendering:", error);
            return null;
          }
        }}
      >
        <Tab.Screen
          name="Court"
          children={() => (
            <StackNavigator bottomSheetModalRef={bottomSheetModalRef} />
          )}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Leagues"
          component={Leagues}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Option"
          component={Create}
          options={{
            headerShown: false,
          }}
          listeners={{
            tabPress: (e) => {
              try {
                e.preventDefault();
                handlePresentModal();
              } catch (error) {
                console.error(
                  "Error in tabPress listener for Option tab:",
                  error
                );
              }
            },
          }}
        />

        <Tab.Screen
          name="Players"
          component={Players}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Teams"
          component={Teams}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        onDismiss={() => {
          try {
            handleBottomSheetDismiss();
          } catch (error) {
            console.error("Error dismissing bottom sheet:", error);
          }
        }}
        // animateOnMount={false}
      >
        <BottomSheetView style={{ flex: 1, paddingBottom: hp(5.6) }}>
          {renderBottomSheet(bottomSheetModalRef)}
        </BottomSheetView>
      </BottomSheetModal>
    </SafeAreaView>
  );
};

export default MainScreen;
