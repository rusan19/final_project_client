import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import RecordItem from "../components/RecordItem";
import { useAtomValue } from "jotai";
import { sellRecordAtom } from "../utils/atoms";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../utils/responsive";
import DetailedRecordModal from "../components/DetailedRecordModal";
import DropDownPicker from "react-native-dropdown-picker";
import { recordSorter } from "../helpers/recordSorter";

const RecordScreen = () => {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("daily");
  const [items, setItems] = useState([
    { label: "Günlük", value: "daily" },
    { label: "Aylık", value: "monthly" },
  ]);

  const record = useAtomValue(sellRecordAtom);

  const renderItem = ({ item, index }) => {
    return (
      <RecordItem
        item={item}
        setSelectedItem={setSelectedItem}
        setModal={setModal}
      />
    );
  };

  const timePeriodChange = (value) => {
    recordSorter(value, record);
  };

  return (
    <View style={styles.container}>
      {record.length > 0 && (
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
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false} horizontal>
        <FlatList
          data={record}
          renderItem={renderItem}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
        />
        {record.length <= 0 && (
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
});
