import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";

const Button = ({ text, textStyle, style, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabledContainer]}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    height: hp(5),
    backgroundColor: "#0000b2",
    borderRadius: wp(4),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#0000ff",
  },
  text: {
    fontSize: fp(2.5),
    textAlign: "center",
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
  disabledContainer: {
    opacity: 0.5,
  },
});
