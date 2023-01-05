import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";
import { Ionicons } from "@expo/vector-icons";
const TextInputCustom = ({
  style,
  placeHolder,
  value,
  setText,
  iconName = null,
  onPress = () => {},
  iconStyle = null,
  onChange = () => {},
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        style={[styles.input, style]}
        value={value}
        onChangeText={setText}
        onChange={onChange}
      />
      {iconName && (
        <Ionicons
          name="search-outline"
          size={wp(6)}
          style={[styles.icon, iconStyle]}
          color="#191919"
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    width: wp(80),
    height: hp(5),
    borderRadius: wp(5),
    paddingHorizontal: wp(3),
    borderColor: "#9999ff",
    borderWidth: 2,
  },
  title: {
    fontSize: fp(3),
  },
  icon: {
    top: hp(3.5),
    right: wp(2),
    position: "absolute",
  },
  container: {
    height: hp(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
