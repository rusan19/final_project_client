import React from "react";
import Button from "../components/Button";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { fp, hp, wp } from "../utils/responsive";

const SecimScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        text="Öğrenci Kaydı"
        onPress={() => navigation.navigate("Sign")}
        style={styles.button1}
        textStyle={{ fontSize: fp(2) }}
      ></Button>
      <Button
        text="Akademisyen Kaydı"
        onPress={() => navigation.navigate("Aca")}
        style={styles.button2}
        textStyle={{ fontSize: fp(2) }}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  button1: {
    width: wp(50),
    height: wp(14),
    marginBottom: hp(3),
    marginTop: hp(3),
    top: 250,
  },
  button2: {
    width: wp(50),
    height: wp(14),
    marginBottom: hp(3),
    marginTop: hp(3),
    top: 250,
  },
});

export default SecimScreen;
