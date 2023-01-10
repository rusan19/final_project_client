import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import { productsAtom, sellRecordAtom } from "../utils/atoms";
import * as Request from "../utils/requests";
import LoadingScreen from "./LoadingScreen";

const Loader = ({ navigation }) => {
  const setProducts = useSetAtom(productsAtom);
  const setSellRecord = useSetAtom(sellRecordAtom);

  const init = async () => {
    const products = await Request.getAllProduct();
    const sellRecord = await Request.getAllRecord();

    setProducts(products);
    setSellRecord(sellRecord);
    navigation.navigate("Welcome");
  };

  useEffect(() => {
    init();
  }, []);
  return <LoadingScreen />;
};

export default Loader;

const styles = StyleSheet.create({});
