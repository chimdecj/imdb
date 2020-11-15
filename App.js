import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import homeStack from "./components/HomeScreen";
import SettingScreen from "./components/SettingScreen";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Grold: require("./assets/fonts/GroldSlim-Regular.otf"),
    "Grold-light": require("./assets/fonts/Grold-SemiLight.ttf"),
    "Grold-medium": require("./assets/fonts/Grold-Medium.ttf"),
    GroldSlim: require("./assets/fonts/GroldSlim-Medium.ttf"),
    "Grold-regular": require("./assets/fonts/GroldSlim-Regular.otf"),
    "Grold-bold-italic": require("./assets/fonts/GroldSlim-BlackItalic.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={homeStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={({ navigation }) => ({
            headerShown: 1,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
