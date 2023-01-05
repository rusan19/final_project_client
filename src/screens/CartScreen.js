import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import CartItem from "../components/CartItem";
import { productsAtom, totalPriceAtom } from "../utils/atoms";
import { useAtom } from "jotai";

const CartScreen = ({ route, navigation }) => {
  const [products, setProducts] = useAtom(productsAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const renderItem = ({ item, index }) => {
    return (
      <CartItem title={item.title} amount={item.amount} price={item.price} />
    );
  };
  console.log(route.params.cart);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        <FlatList
          data={route.params.cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.sku}
          nestedScrollEnabled
        />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  desc: {
    flexDirection: "row",
  },
});
