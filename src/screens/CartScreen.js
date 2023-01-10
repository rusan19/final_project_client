import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Constants from "expo-constants";
import CartItem from "../components/CartItem";
import {
  cartAtom,
  productsAtom,
  sellRecordAtom,
  totalPriceAtom,
} from "../utils/atoms";
import { useAtom, useSetAtom } from "jotai";
import Button from "../components/Button";
import { fp, hp, wp } from "../utils/responsive";
import moment, { now } from "moment/moment";
import { Ionicons } from "@expo/vector-icons";
import { useToast } from "react-native-toast-notifications";
import * as Request from "../utils/requests";
import { useMutation } from "react-query";

const CartScreen = ({ route, navigation }) => {
  const [products, setProducts] = useAtom(productsAtom);
  const [totalPrice, setTotalPrice] = useAtom(totalPriceAtom);
  const [cart, setCart] = useAtom(cartAtom);

  const toast = useToast();

  const setSellRecord = useSetAtom(sellRecordAtom);

  const decramentItemAmount = (item) => {
    const index = cart.findIndex((x) => x.sku === item.sku);
    cart[index].amount -= 1;

    setCart(cart);
    const prodIndex = products.findIndex((prod) => prod.sku === item.sku);
    products[prodIndex].remained += 1;
    setProducts(products);
    setTotalPrice(totalPrice - item.price);

    if (cart[index].amount === 0)
      return setCart(cart.filter((x) => x.sku !== item.sku));
  };

  const incramentItemAmount = (item) => {
    const prodIndex = products.findIndex((prod) => prod.sku === item.sku);

    if (products[prodIndex].remained === 0) {
      return toast.show("Ürün stoğu bitmiştir", {
        type: "danger",
        placement: "top",
      });
    }

    products[prodIndex].remained -= 1;
    setProducts(products);

    const index = cart.findIndex((x) => x.sku === item.sku);
    cart[index].amount += 1;
    setCart(cart);
    setTotalPrice(totalPrice + item.price);
  };

  const addRecordMutation = useMutation(Request.addRecord, {
    onSuccess: (response) => {
      console.log("successed");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const renderItem = ({ item, index }) => {
    return (
      <CartItem
        title={item.title}
        amount={item.amount}
        price={item.price}
        onIncrament={() => incramentItemAmount(item)}
        onDecrament={() => decramentItemAmount(item)}
      />
    );
  };

  const sellHandler = async () => {
    const recordBody = {
      items: cart,
      price: totalPrice,
      date: moment().format("DD-MM-YYYY HH:mm:ss"),
    };

    addRecordMutation.mutate(recordBody);

    setSellRecord((prev) => [recordBody, ...prev]);
    setCart([]);
    setTotalPrice(0);
    navigation.navigate("Market");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.sku}
          nestedScrollEnabled
        />
        {cart.length <= 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons name="cart" size={wp(20)} color="#808080" />
            <Text style={styles.empty}>Sepete Ürün ekleyin</Text>
          </View>
        )}
      </ScrollView>
      <Button
        style={styles.button}
        text={`Satışı Tamamla\n${totalPrice}TL`}
        onPress={sellHandler}
        disabled={cart.length <= 0}
      />
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
  button: {
    position: "absolute",
    bottom: hp(2),
    backgroundColor: "#00cc66",
    borderColor: "#006633",
    height: hp(7),
  },
  emptyContainer: {
    opacity: 0.2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  empty: {
    fontFamily: "Gilroy-Bold",
    fontSize: fp(3),
    marginLeft: wp(2),
  },
});
