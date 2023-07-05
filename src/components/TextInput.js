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
  type = "",
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        style={[styles.input, style]}
        value={value}
        onChangeText={(text) => {
          type === "number"
            ? setText(text.replace(/[^0-9.]/g, ""))
            : setText(text);
        }}
        onChange={onChange}
        secureTextEntry={secureTextEntry}
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
    height: hp(6.2),
    borderRadius: wp(5),
    paddingHorizontal: wp(3),
    borderColor: "#9999ff",
    borderWidth: 2,
    fontSize: fp(2),
  },
  title: {
    fontSize: fp(3),
  },
  icon: {
    top: hp(2.8),
    right: wp(2),
    position: "absolute",
  },
  container: {
    height: hp(8),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
