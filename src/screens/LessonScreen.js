import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { fp, hp, wp } from "../utils/responsive";
import axios from "axios";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";
import Button from "../components/Button";
import Input from "../components/TextInput";
const LessonScreen = () => {
  const [students, setStudents] = useState([
    {
      v: 0,
      _id: "64a592f5068e0fb90ea365ea",
      email: "ozkan",
      name: "Özkan",
      number: "1191602072",
      password: "1234",
      status: "öğrenci",
      surname: "Ruşan",
    },
    {
      v: 0,
      _id: "64a59d15068e0fb90ea36615",
      email: "mehmet@trakya.edu.tr",
      name: "mehmet",
      number: "1191602035",
      password: "1234",
      status: "öğrenci",
      surname: "atay",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState("");

  const {
    params: { item },
  } = useRoute();

  useEffect(() => {
    axios
      .post("http://192.168.1.34:3000/getstudentbylesson", { code: item.code })
      .then((res) => {
        setStudents(res.data.students);
      });
  }, []);

  const addStudent = () => {
    setModalVisible(true);
  };

  const renderHandler = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.studentTitle}>
          {item.name} {item.surname} {item.number}
        </Text>
      </View>
    );
  };

  const saveStudent = () => {
    if (!number) return;
    axios.post("", { number, code: item.code });

    axios
      .post("http://192.168.1.34:3000/getstudentbylesson", { code: item.code })
      .then((res) => {
        setStudents(res.data.students);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Ders Adı</Text>
          <TouchableOpacity onPress={addStudent} style={styles.addStudent}>
            <Text>Öğrenci Ekle</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={students}
          renderItem={renderHandler}
          style={styles.studentContainer}
          ItemSeparatorComponent={<View style={styles.line}></View>}
        />
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Derse Öğrenci Ekle</Text>
          <Input
            style={styles.input}
            placeHolder="Öğrenci Numarası"
            setText={setNumber}
            type="number"
          />

          <Button text="Kaydet" onPress={saveStudent} />
          <Button text="Kapat" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(6),
  },
  title: {
    fontSize: fp(4),
    fontWeight: "600",
    flex: 1,
  },
  addStudent: {
    marginTop: hp(2),
    marginRight: wp(5),
  },
  studentTitle: {
    fontSize: fp(2),
    fontWeight: "500",
    marginBottom: 5,
    color: "white",
  },
  studentContainer: {
    backgroundColor: "gray",
    marginTop: hp(1),
    borderRadius: wp(1),
    padding: wp(2),
    height: hp(100),
  },
  line: {
    height: hp(0.1),
    width: wp(95),
    backgroundColor: "white",
    opacity: 0.6,
    marginBottom: hp(0.5),
    alignSelf: "center",
  },
  input: {
    width: wp(70),
    height: hp(5),
    borderRadius: wp(2),
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp(20),
  },
  modalTitle: {
    fontSize: fp(3.5),
    marginBottom: hp(2),
    fontWeight: "600",
  },
});
