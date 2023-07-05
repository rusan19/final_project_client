import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../../utils/responsive";
import { useAtomValue } from "jotai";
import { userAtom } from "../../utils/atoms";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import { useToast } from "react-native-toast-notifications";

// const LessonsComponent = () => {
//   const [lessons, setLessons] = useState([]);

//   const user = useAtomValue(userAtom);

//   const addLessonHandler = () => {
//     console.log("pressed");
//   };

//   useEffect(() => {
//     axios
//       .post("http://192.168.1.34:3000/getlesson", { userId: user._id })
//       .then((res) => {
//         setLessons(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const renderHandler = ({ item, index }) => {
//     return (
//       <View style={styles.lessonContainer}>
//         <Ionicons
//           name="book"
//           size={wp(10)}
//           color="white"
//           style={{ marginLeft: wp(3) }}
//         />
//         <Text style={styles.lessonTitle}>{item.name}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {user.status === "akademisyen" && (
//         <Ionicons
//           style={styles.addIcom}
//           name="add-circle"
//           size={wp(13)}
//           onPress={addLessonHandler}
//           color="white"
//         />
//       )}
//       <View style={styles.titleContaine}>
//         {user.status === "akademisyen" ? (
//           <Text style={styles.title}>Verilen Dersler</Text>
//         ) : (
//           <Text style={styles.title}>Alınan Dersler</Text>
//         )}
//       </View>
//       <FlatList data={lessons} renderItem={renderHandler} />
//     </View>
//   );
// };

// export default LessonsComponent;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//   },
//   addIcom: {
//     position: "absolute",
//     right: wp(2),
//     top: hp(0.5),
//     zIndex: 2,
//   },
//   title: {
//     top: fp(1.5),
//     fontSize: fp(3.5),
//     fontWeight: "600",
//   },
//   titleContaine: {
//     backgroundColor: "gray",
//     width: wp(100),
//     height: hp(8),
//     alignItems: "center",
//     borderBottomLeftRadius: wp(10),
//     borderBottomRightRadius: wp(10),
//   },
//   lessonContainer: {
//     backgroundColor: "gray",
//     width: wp(95),
//     height: hp(10),
//     borderRadius: wp(3),
//     marginVertical: hp(2),
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   lessonTitle: {
//     fontSize: fp(3.5),
//     color: "white",
//     marginLeft: wp(5),
//   },
// });
const LessonsComponent = () => {
  const [lessons, setLessons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [lessonCode, setLessonCode] = useState("");

  const user = useAtomValue(userAtom);

  const addLessonHandler = () => {
    setModalVisible(true);
  };
  const fetchLessons = () => {
    axios
      .post("http://192.168.1.34:3000/getlesson", { userId: user._id })
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => console.log(err));
  };

  const saveLesson = () => {
    const lessonData = {
      name: lessonName,
      code: lessonCode,
      userId: user._id,
    };

    axios
      .post("http://192.168.1.34:3000/addlesson", lessonData)
      .then((res) => {
        setLessons([...lessons, res.data]);
        fetchLessons();
        setModalVisible(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchLessons();
  }, []);

  const renderHandler = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.lessonContainer}>
          <Ionicons
            name="book"
            size={wp(10)}
            color="white"
            style={{ marginLeft: wp(3) }}
          />
          <Text style={styles.lessonTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
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
          <Text style={styles.title}>Verilen Dersler</Text>
        ) : (
          <Text style={styles.title}>Alınan Dersler</Text>
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
          <Button title="Kaydet" onPress={saveLesson} />
          <Button title="Kapat" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
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
    top: hp(0.5),
    zIndex: 2,
  },
  title: {
    top: fp(1.5),
    fontSize: fp(3.5),
    fontWeight: "600",
  },
  titleContaine: {
    backgroundColor: "gray",
    width: wp(100),
    height: hp(8),
    alignItems: "center",
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10),
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
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: hp(2),
    paddingHorizontal: wp(2),
  },
});
