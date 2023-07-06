import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileComponent from "./components/ProfileComponent";
import LessonsComponent from "./components/LessonsComponent";
import { useNavigation } from "@react-navigation/native";
import Duyurular from "./components/Duyurular";
import Yemek from "./components/Yemek";

const HomeScreen = () => {
  const navigation = useNavigation();

  const Drawer = createDrawerNavigator();

  const HomePage = () => <Duyurular />;

  const ProfilScreen = () => <ProfileComponent />;

  const BildirimlerScreen = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Bildirimler</Text>
    </View>
  );

  const DerslerScreen = () => <LessonsComponent />;

  const OdevlerScreen = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ödevler</Text>
    </View>
  );

  const DersProgramiScreen = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ders Programı</Text>
    </View>
  );

  const GununYemegiScreen = () => <Yemek />;

  const CikisYapScreen = () => navigation.navigate("Login");

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Ana Sayfa" component={HomePage} />
      <Drawer.Screen name="Profil" component={ProfilScreen} />
      <Drawer.Screen name="Bildirimler" component={BildirimlerScreen} />
      <Drawer.Screen name="Dersler" component={DerslerScreen} />
      <Drawer.Screen name="Ödevler" component={OdevlerScreen} />
      <Drawer.Screen name="Ders Programı" component={DersProgramiScreen} />
      <Drawer.Screen name="Günün Yemeği" component={GununYemegiScreen} />
      <Drawer.Screen name="Çıkış Yap" component={CikisYapScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
