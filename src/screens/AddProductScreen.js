import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { hp, wp } from "../utils/responsive";
import Button from "../components/Button";
import { productsAtom } from "../utils/atoms";
import { useAtom } from "jotai";

const AddProductScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [remained, setRemained] = useState("");
  const [sku, setSku] = useState("");

  const [products, setProducts] = useAtom(productsAtom);

  const addHandler = () => {
    if (!title || !price || !remained || !sku) {
      console.log("error");
      return;
    }
    setProducts([...products, { title, price, remained, sku }]);
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
      />
      <TextInput
        style={styles.input}
        placeHolder="Stok"
        value={remained}
        setText={setRemained}
      />
      <TextInput
        style={styles.input}
        placeHolder="SKU kodu"
        value={sku}
        setText={setSku}
      />
      <Button style={styles.button} text="Ekle" onPress={addHandler} />
    </View>
  );
};

export default AddProductScreen;

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
