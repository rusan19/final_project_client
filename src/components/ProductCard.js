import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";
import { Ionicons } from "@expo/vector-icons";
import navigationRef from "../utils/navigationRef";

const ProductCard = ({ type, title, price, remained, sku }) => {
  const onEditPress = () => {
    navigationRef?.current?.navigate("EditProduct", {
      title,
      price,
      remained,
      sku,
    });
  };
  const onAddPress = () => {};

  if (type === "Stock")
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.price}>{`Fiyat : ${price}₺`}</Text>
          <Text style={styles.remained}>{`Stok : ${remained}`}</Text>
        </View>
        <Text style={styles.remained}>{`SKU : ${sku}`}</Text>
        <Ionicons
          name="create-outline"
          size={wp(7)}
          style={styles.icon}
          color="#191919"
          onPress={onEditPress}
        />
      </View>
    );

  if (type === "Market")
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.price}>{`Fiyat : ${price}₺`}</Text>
          <Text style={styles.remained}>{`Stok : ${remained}`}</Text>
        </View>
        <Text style={styles.remained}>{`SKU : ${sku}`}</Text>
        <Ionicons
          name="ios-add-circle-outline"
          size={wp(7)}
          style={styles.icon}
          color="#191919"
          onPress={onAddPress}
        />
      </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: wp(40),
    height: wp(40),
    backgroundColor: "#eaeaea",
    borderRadius: wp(3),
    padding: wp(1),
    margin: wp(4),
  },
  title: {
    fontSize: fp(3),
    textAlign: "center",
  },
  subTitle: {
    position: "absolute",
    right: wp(1),
    bottom: hp(1),
  },

  price: {
    fontSize: fp(2.5),
  },
  remained: {
    fontSize: fp(2.5),
  },
  icon: {
    position: "absolute",
    right: wp(1),
    top: hp(1),
  },
});
