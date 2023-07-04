import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../components/Text";
import { useAtomValue } from "jotai";
import { userAtom } from "../../utils/atoms";
import { Ionicons } from "@expo/vector-icons";
import { fp, hp, wp } from "../../utils/responsive";

const ProfileComponent = () => {
  const user = useAtomValue(userAtom);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={wp(30)} color={"white"} />
        <View>
          <Text style={styles.title}>
            {user.name.toUpperCase()} {user.surname.toUpperCase()}
          </Text>
          <Text style={[styles.title, { fontSize: fp(2) }]}>
            {user.status.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Ionicons
          name="school"
          size={wp(15)}
          color={"white"}
          style={{ margin: wp(3) }}
        />

        <View style={{ marginLeft: wp(3) }}>
          <Text style={styles.cardTitle}>Okulu</Text>
          <Text style={styles.cardSubTitle}>Trakya Üniversitesi</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Ionicons
          name="document"
          size={wp(15)}
          color={"white"}
          style={{ margin: wp(3) }}
        />
        <View style={{ marginLeft: wp(3) }}>
          <Text style={styles.cardTitle}>Bölüm</Text>
          <Text style={styles.cardSubTitle}>Bilgisayar</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Ionicons
          name="person"
          size={wp(15)}
          color={"white"}
          style={{ margin: wp(3) }}
        />
        <View style={{ marginLeft: wp(3) }}>
          <Text style={styles.cardTitle}>Okul Numarası</Text>
          <Text style={styles.cardSubTitle}>{user.number}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    backgroundColor: "red",
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3a60a0",
    width: wp(100),
    marginBottom: hp(2),
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
  card: {
    borderRadius: wp(5),
    width: wp(90),
    height: hp(13),
    backgroundColor: "red",
    marginBottom: hp(3),
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: fp(4),
    marginBottom: hp(1),
  },
  cardSubTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: fp(2.7),
  },
});
