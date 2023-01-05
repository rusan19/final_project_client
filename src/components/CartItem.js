import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ title, price, amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.totalItemPrice}>{price * amount} TL</Text>
      <View style={styles.amountControl}>
        <Ionicons
          name="ios-remove-circle"
          size={wp(7)}
          style={styles.icon}
          color="white"
          onPress={() => console.log("incrament")}
        />
        <Text style={styles.amount}>{amount}</Text>
        <Ionicons
          name="ios-add-circle"
          size={wp(7)}
          style={styles.icon}
          color="white"
          onPress={() => console.log("decrament")}
        />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(7),
    backgroundColor: "tomato",
    borderRadius: wp(3),
    padding: wp(2),
    alignItems: "center",
    marginVertical: hp(0.5),
    flexDirection: "row",
  },
  amountControl: {
    position: "absolute",
    right: wp(1),
    flexDirection: "row",
    height: hp(5),
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontSize: fp(3),
    marginHorizontal: wp(1),
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
  title: {
    fontSize: fp(3),
    marginHorizontal: wp(1),
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
  price: {
    fontSize: fp(3),
    marginHorizontal: wp(1),
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
  totalItemPrice: {
    fontSize: fp(3),
    marginHorizontal: wp(1),
    color: "white",
    fontFamily: "Gilroy-Bold",
  },
});
