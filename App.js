import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import InfoScreen from "./components/InfoScreen";
import homeStack from "./components/HomeScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={homeStack}
          options={{
            title: "FILMS",
            headerStyle: {
              backgroundColor: "#e1eafc",
            },
            headerTintColor: "#364256",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Drawer.Screen
          name="Info"
          component={InfoScreen}
          options={({ navigation }) => ({
            headerShown: false,
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
