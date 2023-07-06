import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { fp, hp, wp } from "../utils/responsive";
import axios from "axios";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import Input from "../components/TextInput";
import { useAtomValue } from "jotai";
import { userAtom } from "../utils/atoms";
import { useToast } from "react-native-toast-notifications";

const LessonScreen = () => {
  const [students, setStudents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [number, setNumber] = useState("");
  const user = useAtomValue(userAtom);
  const toast = useToast();

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
        <Ionicons
          name="person"
          size={wp(10)}
          color={"white"}
          style={{ margin: wp(3) }}
        />
        <Text style={styles.studentTitle}>
          {item.name.toUpperCase()} {item.surname.toUpperCase()}
        </Text>
      </View>
    );
  };

  const saveStudent = async () => {
    if (!number) return;
    await axios.post("http://192.168.1.34:3000/membertolesson", {
      number,
      code: item.code,
    });
    setModalVisible(false);
    toast.show(`Öğrenci Kaydedildi`, {
      type: "success",
      placement: "top",
    });
    await axios
      .post("http://192.168.1.34:3000/getstudentbylesson", { code: item.code })
      .then((res) => {
        setStudents(res.data.students);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{item.name.toUpperCase()}</Text>
          {user.status === "akademisyen" && (
            <TouchableOpacity onPress={addStudent} style={styles.addStudent}>
              <Text style={styles.ogrenciekle}>Öğrenci Ekle</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.flatlistTitle}> Kayıtlı Öğrenciler</Text>
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

          <Button text="Kaydet" style={styles.button} onPress={saveStudent} />
          <Button
            text="Kapat"
            style={styles.button}
            onPress={() => setModalVisible(false)}
          />
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
    marginLeft: fp(2),
    marginTop: fp(3),
    fontSize: fp(4),
    fontWeight: "600",
    flex: 1,
  },
  addStudent: {
    marginTop: hp(4),
    marginRight: wp(7),
  },
  studentTitle: {
    fontSize: fp(2.4),
    fontWeight: "500",
    marginBottom: 5,
    color: "white",
    left: fp(10),
    bottom: fp(6.5),
  },
  studentContainer: {
    backgroundColor: "#009900",
    marginTop: hp(2),
    borderRadius: wp(5),
    padding: wp(3),
    height: hp(100),
    marginLeft: fp(1),
    marginRight: fp(1),
  },
  line: {
    bottom: hp(2),
    height: hp(0.3),
    width: wp(100),
    backgroundColor: "white",
    opacity: 0.6,
    marginBottom: hp(1),
    alignSelf: "center",
  },
  input: {
    width: wp(70),
    height: hp(5),
    borderRadius: wp(2),
    borderColor: "#0000b2",
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
  flatlistTitle: {
    fontSize: fp(3),
    fontWeight: "600",
    marginHorizontal: hp(25),
    marginVertical: hp(1),
    marginLeft: hp(1),
    borderWidth: hp(0.1),
    borderRadius: hp(1),
    backgroundColor: "green",
    color: "white",
    top: fp(1.5),
  },
  button: {
    width: wp(50),
    height: wp(11),
    marginBottom: hp(2),
  },
  ogrenciekle: {
    fontSize: fp(2.6),
    fontWeight: "600",
  },
});
