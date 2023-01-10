import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import loading from "../assets/img/loading.png";
import { hp, wp } from "../utils/responsive";
const LoadingScreen = () => {
  return (
    <View>
      <Image source={loading.png} style={styles.image} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(100),
  },
});
