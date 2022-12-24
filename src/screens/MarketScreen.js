import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import wave from "../assets/img/wave2.png";
import { hp, wp } from "../utils/responsive";

const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.wave} source={wave} />
      <Text>MarketScreen</Text>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  wave: {
    position: "absolute",
    top: 0,
    width: wp(100),
    height: hp(30),
  },
});
