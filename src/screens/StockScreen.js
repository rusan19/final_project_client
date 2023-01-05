import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { fp, hp, wp } from "../utils/responsive";
import { productsAtom } from "../utils/atoms";
import { useAtomValue } from "jotai";
import wave from "../assets/img/wave.png";
import Text from "../components/Text";
import Button from "../components/Button";
import navigationRef from "../utils/navigationRef";

const StockScreen = () => {
  const products = useAtomValue(productsAtom);
  const [search, setSearch] = useState("");
  const [resultProduct, setResult] = useState(null);

  const searchHandler = () => {
    if (!search) return setResult(products);

    const result = products.filter(
      (item) => item.title.toUpperCase() === search.toUpperCase()
    );
    if (result.length > 0) {
      setResult(result);
      return;
    }
    setResult(products);
  };

  const renderItem = ({ item, index }) => {
    return (
      <ProductCard
        type="Stock"
        title={item.title}
        price={item.price}
        remained={item.remained}
        sku={item.sku}
      />
    );
  };

  const addNewProduct = () => {
    navigationRef?.current.navigate("AddProduct");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.wave} source={wave} />
      <Text style={styles.title}>Stok Denetim</Text>
      <SearchBar
        style={styles.searchBar}
        setSearch={setSearch}
        search={search}
        onPress={searchHandler}
      />
      <ScrollView
        style={{ marginBottom: hp(8) }}
        showsVerticalScrollIndicator={false}
        horizontal
      >
        <FlatList
          style={{ marginTop: hp(2) }}
          data={resultProduct || products}
          renderItem={renderItem}
          keyExtractor={(item) => item.sku}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        />
      </ScrollView>
      <Button
        style={styles.button}
        text={"Ürün Ekle"}
        onPress={addNewProduct}
      />
    </View>
  );
};

export default StockScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  searchBar: {
    alignSelf: "center",
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
  button: {
    position: "absolute",
    bottom: hp(2),
    backgroundColor: "#007fff",
    borderColor: "#198bff",
  },
});
