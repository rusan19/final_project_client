import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";

const RecordItem = ({ item, setSelectedItem, setModal }) => {
  const onPress = () => {
    setSelectedItem(item);
    setModal(true);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.date}>{item.date}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.price}>Toplam Tutar : </Text>
        <Text style={[styles.price, { fontFamily: "Gilroy-Bold" }]}>
          {item.price} TL
        </Text>
      </View>
    </TouchableOpacity>
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
    borderColor: "#b892f7",
    borderWidth: 2,
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
