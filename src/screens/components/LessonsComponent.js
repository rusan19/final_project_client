import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../../utils/responsive";
import { useAtomValue } from "jotai";
import { userAtom } from "../../utils/atoms";
import axios from "axios";

const LessonsComponent = () => {
  const [lessons, setLessons] = useState([]);

  const user = useAtomValue(userAtom);

  const addLessonHandler = () => {
    console.log("pressed");
  };

  useEffect(() => {
    axios
      .post("", { userId: user._id })
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderHandler = ({ item, index }) => {
    return (
      <View style={styles.lessonContainer}>
        <Ionicons
          name="book"
          size={wp(10)}
          color="white"
          style={{ marginLeft: wp(3) }}
        />
        <Text style={styles.lessonTitle}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {user.status === "akademisyen" && (
        <Ionicons
          style={styles.addIcom}
          name="add-circle"
          size={wp(10)}
          onPress={addLessonHandler}
          color="white"
        />
      )}
      <View style={styles.titleContaine}>
        {user.status === "akademisyen" ? (
          <Text style={styles.title}>Verilen Dersler</Text>
        ) : (
          <Text style={styles.title}>Alınan Dersler</Text>
        )}
      </View>

      <FlatList data={lessons} renderItem={renderHandler} />
    </View>
  );
};

export default LessonsComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  addIcom: {
    position: "absolute",
    right: wp(2),
    top: hp(0),
    zIndex: 2,
  },
  title: {
    fontSize: fp(3.5),
    fontWeight: "600",
  },
  titleContaine: {
    backgroundColor: "gray",
    width: wp(100),
    height: hp(5),
    alignItems: "center",
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
  },
  lessonContainer: {
    backgroundColor: "gray",
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
});
