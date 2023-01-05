import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useCallback, useState } from "react";
import Constants from "expo-constants";
import wave from "../assets/img/wave2.png";
import { fp, hp, wp } from "../utils/responsive";
import Text from "../components/Text";
import { productsAtom, totalPriceAtom } from "../utils/atoms";
import { useAtom, useAtomValue } from "jotai";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

const MarketScreen = ({ navigation }) => {
  const [products, setProducts] = useAtom(productsAtom);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);

  const onAddPress = (item) => {
    const index = products.findIndex((prod) => prod.sku === item.sku);
    if (products[index].remained <= 0) return console.log("out of");
    if (cart.find((prod) => prod.sku === item.sku)) {
      const index = cart.findIndex((prod) => prod.sku === item.sku);
      cart[index].amount += 1;
      setCart(cart);
    } else setCart([...cart, { ...item, amount: 1 }]);

    products[index].remained -= 1;
    setProducts(products);
    setTotalPrice((prev) => (prev += parseInt(item.price)));
  };

  const renderItem = ({ item, index }) => {
    return (
      <ProductCard
        type="Market"
        title={item.title}
        price={item.price}
        remained={item.remained}
        sku={item.sku}
        onAddPress={onAddPress}
      />
    );
  };

  const onCartPress = () => {
    navigation.navigate("Cart", { cart });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.wave} source={wave} />
      <Text style={styles.title}>Satış</Text>
      <ScrollView
        style={{ marginBottom: hp(8) }}
        showsVerticalScrollIndicator={false}
        horizontal
      >
        <FlatList
          style={{ marginTop: hp(2) }}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.sku}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, { backgroundColor: "#ff681f" }]}
          text="Raporlama"
        />
        <Button
          style={[styles.button, { backgroundColor: "#ff681f" }]}
          text={totalPrice > 0 ? `${totalPrice} TL` : "Sepet"}
          onPress={onCartPress}
        />
      </View>
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  wave: {
    position: "absolute",
    top: 0,
    width: wp(100),
    height: hp(30),
  },
  title: {
    color: "white",
    fontSize: fp(4),
    fontFamily: "Gilroy-Bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: hp(1),
    flexDirection: "row",
  },
  button: {
    width: wp(45),
    marginHorizontal: wp(2),
    borderColor: "#ff9562",
  },
});
