import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { hp, wp } from "../utils/responsive";
import Button from "../components/Button";
import { productsAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { useToast } from "react-native-toast-notifications";

const EditProductScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState(route.params.title || "");
  const [price, setPrice] = useState(String(route.params.price) || "");
  const [remained, setRemained] = useState(String(route.params.remained) || "");
  const [sku, setSku] = useState(route.params.sku || "");

  const toast = useToast();

  const [products, setProducts] = useAtom(productsAtom);

  const updateHandler = () => {
    if (!title || !price || !remained || !sku) {
      return toast.show("Tüm alanları eksiksiz doldurun lütfen", {
        type: "danger",
        placement: "top",
      });
    }

    const items = products.filter((item) => item.sku !== route.params.sku);
    items.push({ title, price, remained, sku });
    setProducts(items);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeHolder="Ürün ismi"
        value={title}
        setText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeHolder="Fiyat"
        value={price}
        setText={setPrice}
        type="number"
      />
      <TextInput
        style={styles.input}
        placeHolder="Stok"
        value={remained}
        setText={setRemained}
        type="number"
      />
      <TextInput
        style={styles.input}
        placeHolder="SKU kodu"
        value={sku}
        setText={setSku}
      />
      <Button style={styles.button} text="Güncelle" onPress={updateHandler} />
    </View>
  );
};

export default EditProductScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaeaea",
    flex: 1,
    padding: wp(4),
  },
  input: {
    marginVertical: hp(1),
  },
  button: {
    marginTop: hp(3),
  },
});
