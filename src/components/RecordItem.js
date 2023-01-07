import { StyleSheet, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";

const RecordItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.price}>Toplam Tutar : {item.price} TL</Text>
    </View>
  );
};

export default RecordItem;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(10),
    backgroundColor: "#8a4af3",
    marginVertical: hp(1),
    borderRadius: wp(2),
    padding: wp(1),
  },
  price: {
    color: "white",
    fontSize: fp(2.5),
    fontFamily: "Gilroy-Medium",
  },
  date: {
    color: "white",
    fontSize: fp(2),
    fontFamily: "Gilroy-Bold",
  },
});
