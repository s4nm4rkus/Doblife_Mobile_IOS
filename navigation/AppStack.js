import React, { useContext } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/theme";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import MainScreen from "../Screens/Tabs/MainScreen";

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
  </Stack.Navigator>
);

export default AppStack;
