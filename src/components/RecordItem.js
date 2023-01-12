import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { fp, hp, wp } from "../utils/responsive";
import Text from "./Text";
import { sellRecordAtom } from "../utils/atoms";
import { useAtomValue } from "jotai";
import moment from "moment";

const RecordItem = ({
  item,
  setSelectedItem,
  setModal,
  type = "daily",
  index = 0,
}) => {
  const record = useAtomValue(sellRecordAtom);

  const numberToMonth = {
    0: "Ocak",
    1: "Şubat",
    2: "Mart",
    3: "Nisan",
    4: "Mayıs",
    5: "Haziran",
    6: "Temmuz",
    7: "Ağustos",
    8: "Eylül",
    9: "Ekim",
    10: "Kasım",
    11: "Aralık",
  };

  const onPress = () => {
    setSelectedItem(item);
    setModal(true);
  };

  const onPressMonthly = () => {
    console.log(record.groups[index]);
    // setSelectedItem(record.groups[index].items);
    // setModal(true);
  };

  if (type === "monthly") {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={onPressMonthly}
        activeOpacity={0.7}
      >
        <Text style={styles.date}>{numberToMonth[index]} </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Toplam Tutar : </Text>
          <Text style={[styles.price, { fontFamily: "Gilroy-Bold" }]}>
            {record.allPrices[index]} TL
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.date}>
        {moment(item.createdDate).format("DD-MM-YYYY HH:mm:ss")}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Toplam Tutar : </Text>
        <Text style={[styles.price, { fontFamily: "Gilroy-Bold" }]}>
          {item.price} TL
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecordItem;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(10),
    backgroundColor: "#8a4af3",
    marginVertical: hp(1),
    borderRadius: wp(2),
    padding: wp(1),
    borderColor: "#b892f7",
    borderWidth: 2,
  },
  price: {
    color: "white",
    fontSize: fp(3),
    fontFamily: "Gilroy-Medium",
  },
  date: {
    color: "white",
    fontSize: fp(2.5),
    fontFamily: "Gilroy-Bold",
  },
  priceContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: hp(1),
    left: wp(1),
  },
});
