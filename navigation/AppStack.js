import React, { useContext } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/theme";

import MainScreen from "../Screens/Tabs/MainScreen";

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={({ navigation }) => ({
        headerShown: true,
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
