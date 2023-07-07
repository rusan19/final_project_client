import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Duyurular = () => {
  const images = [
    "https://www.trakya.edu.tr/files/anasayfa_kayan_resimler/184/1.webp",
    "https://www.trakya.edu.tr/files/anasayfa_kayan_resimler/189/1.webp",
    "https://www.trakya.edu.tr/files/anasayfa_kayan_resimler/170/1.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const announcements = [
    {
      title:
        "2022-2023 Eğitim Öğretim Yılı Bahar Dönemi Bütünleme Sınav Programı",
      date: "23.06.2023",
    },
    {
      title:
        "Boğaziçi Üniversitesi 1. Ulusal Çeviri Teknolojileri Kongresi Duyurusu",
      date: "13.06.2023",
    },
    {
      title:
        "Uluslararası Bilgisayar Bilimleri ve Mühendisliği Konferansı Duyurusu",
      date: "09.06.2023",
    },
    {
      title:
        "2022-2023 Eğitim Öğretim Yılı Bahar Dönemi Final Sınav Programı (Taslak)",
      date: "30.05.2023",
    },
    {
      title: "2022-2023 Eğitim Öğretim Yılı Bahar Dönemi Mazeret Sınavları",
      date: "27.04.2023",
    },
    {
      title:
        "2022-2023 Eğitim Öğretim Yılı Bahar Dönemi Ara Sınav Programı ile ilgili duyuru",
      date: "06.04.2023",
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(202, 152, 49, .7)", "white"]}
        style={StyleSheet.absoluteFill}
      />
      <Text style={styles.title}>Duyurular</Text>
      <Image
        source={{ uri: images[currentImageIndex] }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.announcementContainer}>
        {announcements
          .slice(currentImageIndex * 2, currentImageIndex * 2 + 2)
          .map((announcement, index) => (
            <View key={index} style={styles.announcement}>
              <Text style={styles.announcementTitle}>{announcement.title}</Text>
              <Text style={styles.announcementDate}>{announcement.date}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    bottom: 150,
    width: "100%",
    height: "30%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    bottom: 170,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  announcementContainer: {
    position: "absolute",
    bottom: 180,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 8,
  },
  announcement: {
    marginBottom: 4,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  announcementDate: {
    fontSize: 14,
    color: "#fff",
  },
});
export default Duyurular;
