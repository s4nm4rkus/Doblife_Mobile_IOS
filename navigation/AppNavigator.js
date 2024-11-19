import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
// import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const AppNavigator = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default AppNavigator;
