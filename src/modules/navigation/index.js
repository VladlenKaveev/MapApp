import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../authentication/screens/LoginScreen";
import CreateUserScreen from "../authentication/screens/CreateUserScreen";
import HomeScreen from "../home/screens/HomeScreen";
import LoadingScreen from "../authentication/screens/LoadingScreen";

const Stack = createStackNavigator();

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateUserScreen"
            component={CreateUserScreen}
            options={{ headerShown: false, headerBackTitleVisible: true }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
