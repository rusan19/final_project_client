import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../../utils/responsive";
import { useAtomValue } from "jotai";
import { userAtom } from "../../utils/atoms";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";
import Button from "../../components/Button";
import { LinearGradient } from "expo-linear-gradient";

const LessonsComponent = () => {
  const [lessons, setLessons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [lessonCode, setLessonCode] = useState("");

  const toast = useToast();

  const user = useAtomValue(userAtom);

  const navigation = useNavigation();

  const addLessonHandler = () => {
    setModalVisible(true);
  };

  const fetchLessons = async () => {
    await axios
      .post("http://192.168.1.34:3000/getlesson", { userId: user._id })
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => console.log(err));
  };

  const saveLesson = async () => {
    if (!lessonName || !lessonCode)
      return toast.show(`Tüm Alanların Eksiksiz Doldurulduğundan Emin Olun`, {
        type: "Danger",
        placement: "top",
      });

    const lessonData = {
      name: lessonName,
      code: lessonCode,
      userId: user._id,
    };

    await axios
      .post("http://192.168.1.34:3000/addlesson", lessonData)
      .then((res) => {
        // setLessons([...lessons, res.data]);
        return toast.show(`Ders Başarıyla Eklendi`, {
          type: "success",
          placement: "top",
        });
      })
      .catch((err) => {
        return toast.show(`Ders Ekleme Başarısız`, {
          type: "Danger",
          placement: "top",
        });
      });

    fetchLessons();
    setModalVisible(false);
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  const goLesson = (item) => {
    navigation.navigate("Lesson", { item });
  };

  const renderHandler = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => goLesson(item)} activeOpacity={0.7}>
        <View style={styles.lessonContainer}>
          <Ionicons
            name="book"
            size={wp(10)}
            color="white"
            style={{ marginLeft: wp(3) }}
          />
          <Text style={styles.lessonTitle}>
            {item.name.toUpperCase()} — BIL{item.code}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(202, 152, 49, .7)", "transparent"]}
        style={StyleSheet.absoluteFill}
      />
      {user.status === "akademisyen" && (
        <Ionicons
          style={styles.addIcom}
          name="add-circle"
          size={wp(13)}
          onPress={addLessonHandler}
          color="white"
        />
      )}
      <View style={styles.titleContaine}>
        {user.status === "akademisyen" ? (
          <Text style={styles.title}>Verdiğiniz Dersler</Text>
        ) : (
          <Text style={styles.title}>Aldığınız Dersler</Text>
        )}
      </View>
      <FlatList data={lessons} renderItem={renderHandler} />

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Yeni Ders Ekle</Text>
          <TextInput
            style={styles.input}
            placeholder="Ders Adı"
            onChangeText={(text) => setLessonName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Kodu"
            onChangeText={(text) => setLessonCode(text)}
          />
          <Button text="Kaydet" style={styles.button} onPress={saveLesson} />
          <Button
            text="Kapat"
            style={styles.button}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default LessonsComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: hp(100),
  },
  addIcom: {
    position: "absolute",
    right: wp(2),
    top: hp(0.5),
    zIndex: 2,
  },
  title: {
    color: "white",
    top: fp(1.5),
    fontSize: fp(3.5),
    fontWeight: "600",
  },
  titleContaine: {
    backgroundColor: "#906c23",
    width: wp(100),
    height: hp(8),
    alignItems: "center",
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
  },
  lessonContainer: {
    backgroundColor: "#112979",
    width: wp(95),
    height: hp(10),
    borderRadius: wp(3),
    marginVertical: hp(2),
    alignItems: "center",
    flexDirection: "row",
  },
  lessonTitle: {
    fontSize: fp(3.5),
    color: "white",
    marginLeft: wp(5),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: fp(3.5),
    marginBottom: hp(2),
    fontWeight: "600",
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
  button: {
    width: wp(40),
    height: wp(10),
    marginBottom: hp(2),
  },
});
