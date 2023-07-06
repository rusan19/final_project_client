import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

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
      <Text style={styles.title}>Günün Yemeği</Text>
      <View style={styles.menuContainer}>
        <Text style={styles.date}>{selectedMenu.date}</Text>
        <Text style={styles.text}>{selectedMenu.soup}</Text>
        <Text style={styles.text}>{selectedMenu.mainDish}</Text>
        <Text style={styles.text}>{selectedMenu.sideDish}</Text>
        <Text style={styles.text}>{selectedMenu.dessert}</Text>
        <Text style={styles.calories}>{selectedMenu.calories}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
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
