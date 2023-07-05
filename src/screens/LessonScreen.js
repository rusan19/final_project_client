import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { fp, hp, wp } from "../utils/responsive";
import axios from "axios";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const LessonScreen = () => {
  const [students, setStudents] = useState([]);

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
    console.log("added");
  };

  const renderHandler = ({ item, index }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Ders Adı</Text>
        <TouchableOpacity onPress={addStudent} style={styles.addStudent}>
          <Text>Öğrenci Ekle</Text>
        </TouchableOpacity>
      </View>

      <FlatList data={students} renderItem={renderHandler} />
    </View>
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
});
