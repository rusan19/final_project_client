import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { fp, hp, wp } from "../utils/responsive";
import { productsAtom } from "../utils/atoms";
import { useAtom, useAtomValue } from "jotai";
import wave from "../assets/img/wave.png";
import Text from "../components/Text";
import Button from "../components/Button";
import navigationRef from "../utils/navigationRef";
import { useMutation } from "react-query";
import * as Requests from "../utils/requests";
import Modal from "react-native-modal";
import { useToast } from "react-native-toast-notifications";

const StockScreen = () => {
  const [search, setSearch] = useState("");
  const [resultProduct, setResult] = useState(null);
  const [visible, setVisible] = useState(false);
  const [deletedSku, setDeleteSku] = useState(false);

  const [products, setProducts] = useAtom(productsAtom);

  const toast = useToast();

  const mutation = useMutation(Requests.deleteProduct, {
    onSuccess: (res) => {
      return toast.show("Başarılı", {
        type: "success",
        placement: "top",
      });
    },
    onError: (e) => {
      return toast.show(`Hata meydana geldi ${e}`, {
        type: "danger",
        placement: "top",
      });
    },
  });

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
        setDeleteSku={setDeleteSku}
        setVisible={setVisible}
      />
    );
  };

  const addNewProduct = () => {
    navigationRef?.current.navigate("AddProduct");
  };

  const onDeletePress = () => {
    setVisible(true);
    mutation.mutate({ deletedSku });
    setProducts(products.filter((item) => item.sku !== deletedSku));
    setDeleteSku("");
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
      <Modal
        isVisible={deletedSku}
        onBackdropPress={() => setDeleteSku(false)}
        onBackButtonPress={() => setDeleteSku(false)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text
            style={{
              fontSize: fp(3.5),
              alignText: "center",
              marginBottom: hp(2),
            }}
          >
            Ürünü silmek istediğinize emin misiniz?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              style={{ width: wp(40), marginRight: wp(2) }}
              text={"Evet"}
              onPress={onDeletePress}
            />
            <Button
              style={{ width: wp(40) }}
              text={"Hayır"}
              onPress={() => setDeleteSku(false)}
            />
          </View>
        </View>
      </Modal>
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
  modal: {
    margin: 0,
    width: wp(90),
    height: hp(50),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  modalContainer: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: wp(5),
    overflow: "hidden",
    padding: wp(4),
  },
});
