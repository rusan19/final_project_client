import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Text from "../components/Text";
import Card from "../components/Card";
import { fp, hp, wp } from "../utils/responsive";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={["#6666ff", "white"]}>
      {/* <StatusBar hidden /> */}
      <Text style={styles.title}>Hosgeldiniz</Text>
      <Card
        title="Stok Denetim"
        description="Stok ekleme, silme, güncelleme işlemleri
        yapılır"
        name="clipboard-outline"
        id="Stock"
      />
      <Card
        title="Satış"
        description="Stoktaki ürünlerin satışı, raporlama"
        name="cash-outline"
        id="Market"
      />
      <Text style={styles.footerText}>Retail system ver1.0</Text>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: wp(20),
    fontFamily: "Gilroy-Bold",
    fontSize: fp(7),
    color: "white",
  },
  footerText: {
    fontSize: fp(1.5),
    fontFamily: "Gilroy-Regular",
  },
});
