import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { fp, hp, wp } from "../utils/responsive";
import wave from "../assets/img/wave3.png";
import moment from "moment";

const DetailedRecordModal = ({ modal, selectedItem, setModal }) => {
  return (
    <Modal
      style={{ margin: 0 }}
      isVisible={modal}
      onBackdropPress={() => setModal(false)}
      onBackButtonPress={() => setModal(false)}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={wave} />
        <Text style={styles.modalTitle}>Ayrıntılı Rapor</Text>
        <Text style={styles.date}>
          Satış Tarihi :{" "}
          {moment(selectedItem.createdDate).format("DD-MM-YYYY HH:mm:ss")}
        </Text>
        <Text style={styles.date}>Satılan Ürünler</Text>
        {selectedItem &&
          selectedItem?.items.map((item) => {
            return (
              <View style={{ flexDirection: "row" }} key={item.sku}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemTitle}>{item.amount} adet</Text>
                <Text style={styles.itemTitle}>{item.price} TL</Text>
              </View>
            );
          })}
        <Text style={[styles.date, styles.price]}>
          Toplam Tutar : {selectedItem.price} TL
        </Text>
      </View>
    </Modal>
  );
};

export default DetailedRecordModal;

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    minHeight: hp(60),
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: wp(3),
    padding: wp(2),
    overflow: "hidden",
  },
  modalTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: fp(3),
  },
  date: {
    fontFamily: "Gilroy-Medium",
    fontSize: fp(2),
    textAlign: "left",
    marginTop: hp(3.2),
  },
  itemTitle: {
    fontFamily: "Gilroy-Medium",
    fontSize: fp(2),
    marginHorizontal: wp(2),
  },
  price: {
    position: "absolute",
    bottom: hp(1),
    fontSize: fp(2.6),
    fontFamily: "Gilroy-Bold",
  },
  img: {
    width: wp(90),
    height: hp(25),
    position: "absolute",
    bottom: hp(0),
    opacity: 0.3,
  },
});
