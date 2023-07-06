import { StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationRef from "../utils/navigationRef";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import SignScreen from "../screens/SignScreen";
import SecimScreen from "../screens/SecimScreen";
import SignAcaScreen from "../screens/SignAcaScreen";
import HomeScreen from "../screens/HomeScreen";
import LessonScreen from "../screens/LessonScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          listeners={() => ({
            beforeRemove: (e) => {
              if (e.data.action.type === "GO_BACK") {
                e.preventDefault();
              }
            },
          })}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Sign"
          component={SignScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Secim"
          component={SecimScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Aca"
          component={SignAcaScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Lesson"
          component={LessonScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          listeners={() => ({
            beforeRemove: (e) => {
              if (e.data.action.type === "GO_BACK") {
                e.preventDefault();
              }
            },
          })}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
