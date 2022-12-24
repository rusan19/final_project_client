import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Text from "../components/Text";
import Card from "../components/Card";
import { wp } from "../utils/responsive";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Text style={styles.title}>Hoşgeldiniz</Text>
      <Card
        title="Stok Denetim"
        description="Stok ekleme, silme, güncelleme işlemleri yapılır"
        name="clipboard-outline"
        id="Stock"
      />
      <Card
        title="Satış"
        description="Stoktaki ürünlerin satışı"
        name="cash-outline"
        id="Market"
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#eaeaea",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: wp(20),
  },
});
