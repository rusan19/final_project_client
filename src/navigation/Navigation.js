import { StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationRef from "../utils/navigationRef";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import StockScreen from "../screens/StockScreen";
import MarketScreen from "../screens/MarketScreen";
import EditProductScreen from "../screens/EditProductScreen";
import AddProductScreen from "../screens/AddProductScreen";
import CartScreen from "../screens/CartScreen";
import RecordScreen from "../screens/RecordScreen";
import Loader from "../screens/Loader";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Loader">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Loader"
          component={Loader}
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
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Stock"
          component={StockScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Market"
          component={MarketScreen}
        />
        <Stack.Screen
          name="EditProduct"
          component={EditProductScreen}
          options={{ title: "Ürün Düzenleme" }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{ title: "Ürün Ekleme" }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Sepet" }}
        />
        <Stack.Screen
          name="Record"
          component={RecordScreen}
          options={{ title: "Raporlar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
