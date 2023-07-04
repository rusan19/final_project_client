import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileComponent from "./components/ProfileComponent";

const Drawer = createDrawerNavigator();

const HomePage = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Ana Sayfa</Text>
  </View>
);
const ProfilScreen = () => <ProfileComponent />;

const BildirimlerScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Bildirimler</Text>
  </View>
);

const DerslerScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Dersler</Text>
  </View>
);

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

const GununYemegiScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Günün Yemeği</Text>
  </View>
);
const CikisYapScreen = () => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Çıkış Yap</Text>
  </View>
);

const HomeScreen = () => (
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

const styles = StyleSheet.create({});

export default HomeScreen;
