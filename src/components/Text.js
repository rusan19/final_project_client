import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { fp } from "../utils/responsive";
const TextCustom = ({ style, children }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

export default TextCustom;

const styles = StyleSheet.create({
  text: {
    fontSize: fp(5),
  },
});
