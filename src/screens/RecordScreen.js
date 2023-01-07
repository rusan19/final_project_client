import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import RecordItem from "../components/RecordItem";
import { useAtomValue } from "jotai";
import { sellRecordAtom } from "../utils/atoms";
import { Ionicons } from "@expo/vector-icons";
import { fp, wp } from "../utils/responsive";

const RecordScreen = () => {
  const record = useAtomValue(sellRecordAtom);

  const renderItem = ({ item, index }) => {
    return <RecordItem item={item} />;
  };

  return (
    <View style={styles.container}>
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
});
