import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
const MarketScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MarketScreen</Text>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
