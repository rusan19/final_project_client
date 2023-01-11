import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: {
    color: "#909090",
    fontFamily: "Gilroy-Bold",
    fontSize: fp(4),
  },
});
