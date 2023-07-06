import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { hp, wp } from "../../utils/responsive";
import { Ionicons } from "@expo/vector-icons";

const Yemek = () => {
  const menus = [
    {
      date: "03.07.2023",
      soup: "SÜZME MERCİMEK ÇORBA",
      mainDish: "KURU FASULYE",
      sideDish: "ŞEH.PİRİNÇ PİLAVI",
      dessert: "YOĞURT",
      calories: "950 Kal",
    },
    {
      date: "04.07.2023",
      soup: "SOĞUK AYRAN AŞI ÇORBA",
      mainDish: "ŞEHRİYELİ GÜVEÇ",
      sideDish: "ZYT.TÜRLÜ",
      dessert: "SUPANGLE",
      calories: "1080 Kal",
    },
    {
      date: "05.07.2023",
      soup: "DOMATES ÇORBA",
      mainDish: "TAVUK KAVURMA",
      sideDish: "BULGUR PİLAVI",
      dessert: "MEVSİM SALATA",
      calories: "985 Kal",
    },
    {
      date: "BUGÜN",
      soup: "TAVUK SUYU ÇORBA",
      mainDish: "KIYMALI SEBZE GRATEN",
      sideDish: "SALÇALI MAKARNA",
      dessert: "MEYVE",
      calories: "990 Kal",
    },
    {
      date: "07.07.2023",
      soup: "MERCİMEK ÇORBA",
      mainDish: "HASANPAŞA KÖFTE",
      sideDish: "ŞEH.PİRİNÇ PİLAVI",
      dessert: "HAVUÇ TARATOR",
      calories: "1130 Kal",
    },
  ];

  // Günün yemeği seçimi
  const selectedMenuIndex = 3; // BUGÜN

  const selectedMenu = menus[selectedMenuIndex];

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(202, 152, 49, .7)", "white"]}
        style={StyleSheet.absoluteFill}
      />
      <Text style={styles.title}>Günün Yemeği</Text>
      <View style={styles.menuContainer}>
        <Text style={styles.date}>{selectedMenu.date}</Text>
        <Text style={styles.text}>{selectedMenu.soup}</Text>
        <Text style={styles.text}>{selectedMenu.mainDish}</Text>
        <Text style={styles.text}>{selectedMenu.sideDish}</Text>
        <Text style={styles.text}>{selectedMenu.dessert}</Text>
        <Text style={styles.calories}>{selectedMenu.calories}</Text>
      </View>
      <Ionicons
        name="restaurant-outline"
        size={wp(100)}
        style={{
          position: "absolute",
          right: -wp(20),
          bottom: hp(5),
          opacity: 0.6,
          transform: [{ rotate: "330deg" }],
          color: "black",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
    height: hp(100),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuContainer: {
    borderWidth: hp(0.3),
    borderColor: "black",
    borderRadius: 8,
    padding: 16,
    borderStyle: "dotted",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
  },
  calories: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
export default Yemek;
