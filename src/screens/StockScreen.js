import { FlatList, Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { hp, wp } from "../utils/responsive";
import { productsAtom } from "../utils/atoms";
import { useAtomValue } from "jotai";
import wave from "../assets/img/wave.png";

const StockScreen = () => {
  const products = useAtomValue(productsAtom);
  const [search, setSearch] = useState("");
  const [resultProduct, setResult] = useState(null);

  const searchHandler = () => {
    if (!search) return;

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

  return (
    <View style={styles.container}>
      <Image style={styles.wave} source={wave} />
      <SearchBar
        style={styles.searchBar}
        setSearch={setSearch}
        search={search}
        onChange={searchHandler}
      />
      <FlatList
        style={{ marginTop: hp(2) }}
        data={resultProduct || products}
        renderItem={renderItem}
        keyExtractor={(item) => item.sku}
        numColumns={2}
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
    marginTop: hp(2),
  },
  wave: {
    position: "absolute",
    top: 0,
    width: wp(100),
    height: hp(30),
  },
});
