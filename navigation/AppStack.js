import React, { useContext } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  HeaderStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { COLORS } from "../constants/theme";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import MainScreen from "../Screens/Tabs/MainScreen";
import MenuScreen from "../Screens/Menu/MenuScreen";

import CreateLeagueScreen from "../Screens/CreateLeague/CreateLeagueScreen";
import JoinALeagueScreen from "../Screens/JoinALeague/JoinALeagueScreen";
import CreateTeamScreen from "../Screens/CreateTeam/CreateTeamScreen";
import SelectLeague from "../Screens/SelectLeague/SelectLeague";
import SearchLeaguesScreen from "../Screens/Tabs/Leagues/search/SearchLeaguesScreen";
import LeagueScreen from "../Screens/League/LeagueScreen";
import ProfilesScreen from "../Screens/Menus/Profiles/ProfilesScreen";
import ConfirmCreateTeamScreen from "../Screens/ConfirmCreateTeam/ConfirmCreateTeamScreen";

import HeaderLeftButton from "../components/common/buttons/headerLeftButton/HeaderLeftButton";

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <HeaderLeftButton
            onPress={() => navigation.navigate("Menu")}
            color={COLORS.clr_light_white}
            icon={faBars}
          />
        ),
        headerTitle: (props) => (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 100, height: 50 }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: COLORS.clr_minestrone,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: "black",
          shadowOpacity: 0.4,
          shadowRadius: 5,
        },
        headerShadowVisible: true,
      })}
    />

    <Stack.Screen
      name="CreateLeague"
      component={CreateLeagueScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="JoinALeague"
      component={JoinALeagueScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="CreateTeam"
      component={CreateTeamScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="ConfirmCreateTeam"
      component={ConfirmCreateTeamScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="SelectLeague"
      component={SelectLeague}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="SearchLeagues"
      component={SearchLeaguesScreen}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="League"
      component={LeagueScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <HeaderLeftButton
            onPress={() => navigation.navigate("Menu")}
            color={COLORS.clr_light_white}
            icon={faBars}
          />
        ),
        headerTitle: (props) => (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 100, height: 50 }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: COLORS.clr_minestrone,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: "black",
          shadowOpacity: 0.4,
          shadowRadius: 5,
        },
        headerShadowVisible: true,
      })}
    />

    <Stack.Screen
      name="Profiles"
      component={ProfilesScreen}
      options={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => (
          <HeaderLeftButton
            onPress={() => navigation.navigate("Menu")}
            color={COLORS.clr_light_white}
            icon={faBars}
          />
        ),
        headerTitle: (props) => (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 100, height: 50 }}
            resizeMode="contain"
          />
        ),
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: COLORS.clr_minestrone,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowColor: "black",
          shadowOpacity: 0.3,
          shadowRadius: 5,
        },
        headerShadowVisible: true,
      })}
    />

    <Stack.Screen
      name="Menu"
      component={MenuScreen}
      options={{
        gestureDirection: "horizontal-inverted",
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AppStack;
