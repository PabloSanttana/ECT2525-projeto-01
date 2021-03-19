import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Login from "./screens/Login";
import Detail from "./screens/Detail";
import All from "./screens/All";
import Menu from "./screens/Menu";
import Popular from "./screens/Popular";
import Header from "./components/Header";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function TabRoutes() {
  const tabBarOptionsStyles = {
    showIcon: true,
    showLabel: true,
    activeTintColor: "#259a43",
    inactiveTintColor: "gray",
    style: { backgroundColor: "#fff" },
    labelStyle: { fontWeight: "bold", fontSize: 16 },
    indicatorStyle: { backgroundColor: "#259a43" },
  };
  return (
    <>
      <Header />
      <Tab.Navigator initialRouteName="All" tabBarOptions={tabBarOptionsStyles}>
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </>
  );
}

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={TabRoutes} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
