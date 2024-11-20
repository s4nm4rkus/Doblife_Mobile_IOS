import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/Auth/Login/LoginScreen";
import RegistrationScreen from "../Screens/Auth/Register/RegistrationScreen";
// import AccountDeletedScreen from "../screens/Auth/AccountDelete/AccountDeletedScreen";
import TermsOfServiceScreen from "../Screens/TermsOfService/TermsOfServiceScreen";
import PrivacyPolicyScreen from "../Screens/PrivacyPolicy/PrivacyPolicyScreen";
// import FacebookLoginScreen from "../screens/Auth/FacebookLogin/FacebookLoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
        name="AccountDeleted"
        component={AccountDeletedScreen}
        options={{ headerShown: false }}
      /> */}

        <Stack.Screen
          name="TermsOfService"
          component={TermsOfServiceScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
        name="FacebookLogin"
        component={FacebookLoginScreen}
        options={{ headerShown: false }}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
