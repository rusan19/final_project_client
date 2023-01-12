import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";
import { Ionicons } from "@expo/vector-icons";
import navigationRef from "../utils/navigationRef";

const ProductCard = ({
  type,
  title,
  price,
  remained,
  sku,
  onAddPress = () => {},
  setDeleteSku = () => {},
}) => {
  const onEditPress = () => {
    navigationRef?.current?.navigate("EditProduct", {
      title,
      price,
      remained,
      sku,
    });
  };

  if (type === "Stock")
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.subTitle}>
          <Text style={styles.attributesText}>{`Fiyat : ${price}₺`}</Text>
          <Text style={styles.attributesText}>{`Stok  : ${remained}`}</Text>
          <Text style={styles.attributesText}>{`SKU   : ${sku}`}</Text>
        </View>
        <Ionicons
          name="create-outline"
          size={wp(7)}
          style={styles.icon}
          color="#191919"
          onPress={onEditPress}
        />
        <Ionicons
          name="close-outline"
          size={wp(8)}
          style={[styles.icon, { left: wp(0), width: wp(8) }]}
          color="#ff4c4c"
          onPress={() => setDeleteSku(sku)}
        />
      </View>
    );

  if (type === "Market")
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: "#ffdfcf" },
          remained === 0 && { backgroundColor: "#ff7f7f", opacity: 0.3 },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        {remained === 0 && <Text style={styles.outOfStock}>Stok Bitti</Text>}
        <View style={styles.subTitle}>
          <Text style={styles.attributesText}>{`Fiyat : ${price}₺`}</Text>
          <Text style={styles.attributesText}>{`Stok : ${remained}`}</Text>
          <Text style={styles.attributesText}>{`SKU : ${sku}`}</Text>
        </View>
        <Ionicons
          name="ios-add-circle-outline"
          size={wp(7)}
          style={styles.icon}
          color="#260f04"
          onPress={() => onAddPress({ title, price, remained, sku })}
        />
      </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    height: wp(45),
    backgroundColor: "#e5e5ff",
    borderRadius: wp(5),
    padding: wp(1),
    margin: wp(2),
    borderWidth: 10,
    borderColor: "white",
  },
  title: {
    fontSize: fp(3),
    marginTop: hp(2),
    textAlign: "center",
    fontFamily: "Gilroy-SemiBold",
    color: "#404040",
  },
  subTitle: {
    position: "absolute",
    left: wp(1),
    bottom: hp(1),
  },
  attributesText: {
    fontSize: fp(2.6),
    fontFamily: "Gilroy-SemiBold",
    textAlign: "left",
    color: "#404040",
  },
  icon: {
    position: "absolute",
    right: wp(0),
    top: hp(0),
  },
  outOfStock: {
    color: "red",
    position: "absolute",
    fontFamily: "Gilroy-Bold",
  },
});
