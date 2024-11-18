import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

// import { Provider } from "react-redux";
// import { store } from "./store";
import LoginScreen from "./Screens/Auth/Login/LoginScreen";

export default function App() {
  const [loaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Thin.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto-Italic.ttf"),
    RobotoCondensed: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    RobotoCondensedBold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    DigitalNumbersRegular: require("./assets/fonts/DS-DIGI.ttf"),
    Koulen: require("./assets/fonts/Koulen-Regular.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    // <Provider store={store}>
    //   </Provider>
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
