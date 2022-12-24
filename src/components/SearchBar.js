import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextInput from "./TextInput";

import { wp } from "../utils/responsive";

const SearchBar = ({ style, onPress, setSearch, search, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.bar, style]}
        placeHolder="Arama"
        value={search}
        setText={setSearch}
        iconName="search-outline"
        onPress={onPress}
        onChange={onChange}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
