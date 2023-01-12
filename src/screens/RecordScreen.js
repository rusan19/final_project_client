import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import RecordItem from "../components/RecordItem";
import { useAtomValue, useSetAtom } from "jotai";
import { sellRecordAtom } from "../utils/atoms";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../utils/responsive";
import DetailedRecordModal from "../components/DetailedRecordModal";
import DropDownPicker from "react-native-dropdown-picker";

import { useMutation } from "react-query";
import * as Requests from "../utils/requests";
import LoadingIndicator from "../components/LoadingIndicator";

const RecordScreen = () => {
  const sellRecord = useSetAtom(sellRecordAtom);

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");
  const [items, setItems] = useState([
    { label: "Tekil Satış", value: "all" },
    { label: "Günlük", value: "daily" },
    { label: "Aylık", value: "monthly" },
  ]);

  const record = useAtomValue(sellRecordAtom);

  const getRecord = async () => {
    const response = await Requests.sortRecord({ value: "all" });
    sellRecord(response);
  };

  useEffect(() => {
    getRecord();
  }, []);

  const mutation = useMutation(Requests.sortRecord, {
    onSuccess: (response) => {
      sellRecord(response);
    },
  });

  const renderItem = ({ item, index }) => {
    return (
      <RecordItem
        type="all"
        item={item}
        setSelectedItem={setSelectedItem}
        setModal={setModal}
      />
    );
  };

  const renderItemMonthly = ({ item, index }) => {
    return (
      <RecordItem
        type="monthly"
        item={item}
        setSelectedItem={setSelectedItem}
        setModal={setModal}
        index={index}
      />
    );
  };

  const renderItemDaily = ({ item, index }) => {
    return (
      <RecordItem
        type="daily"
        item={item}
        setSelectedItem={setSelectedItem}
        setModal={setModal}
        index={index}
      />
    );
  };

  const timePeriodChange = (value) => {
    mutation.mutate({ value });
  };

  return (
    <View style={styles.container}>
      {
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropDown}
          onChangeValue={timePeriodChange}
          containerStyle={styles.dropDown}
          textStyle={styles.dropDownText}
        />
      }
      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        {value === "all" && (
          <FlatList
            data={record}
            renderItem={renderItem}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          />
        )}
        {value === "daily" && (
          <FlatList
            data={record.groups}
            renderItem={renderItemDaily}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          />
        )}
        {value === "monthly" && (
          <FlatList
            data={record.groups}
            renderItem={renderItemMonthly}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
          />
        )}
        {value === "monthly"
          ? record.groups?.length <= 0
          : record.length <= 0 && (
              <View style={styles.emptyContainer}>
                <Ionicons name="albums" size={wp(20)} color="#808080" />
                <Text style={styles.empty}>Hiç Kayıt Bulunamadı</Text>
              </View>
            )}
      </ScrollView>
      <DetailedRecordModal
        modal={modal}
        selectedItem={selectedItem}
        setModal={setModal}
      />
      {mutation.isLoading && <LoadingIndicator />}
    </View>
  );
};

export default RecordScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
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
  dropDown: {
    width: wp(80),
    alignSelf: "center",
  },
  dropDownText: {
    fontSize: fp(2.7),
  },
});
