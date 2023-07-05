import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Input from "../components/TextInput";
import { fp, hp, wp } from "../utils/responsive";
import Button from "../components/Button";
import { useToast } from "react-native-toast-notifications";
import { useSetAtom } from "jotai";
import { userAtom } from "../utils/atoms";

const LoginScreen = ({ navigation }) => {
  const setUser = useSetAtom(userAtom);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async () => {
    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://192.168.1.34:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        setUser(data.user);

        navigation.navigate("Home");
        return toast.show(`Giriş Başarılı`, {
          type: "success",
          placement: "top",
        });
      } else {
        console.log("Giriş yapılamadı:", response.status);
        return toast.show(`Hatalı mail veya şifre`, {
          type: "Danger",
          placement: "top",
        });
      }
    } catch (error) {
      console.log("Giriş yapılamadı (Bağlantı Hatası):", error);
      // return toast.show(`Hatalı mail veya şifre`, {
      //   type: "Danger",
      //   placement: "top",
      // });
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/t.png")} style={styles.image} />
      <Input placeHolder="E-posta" value={email} setText={handleEmailChange} />
      <Input
        placeHolder="Şifre"
        value={password}
        setText={handlePasswordChange}
        secureTextEntry={true}
      />

      <Button
        text="Giriş Yap"
        onPress={handleLogin}
        style={styles.button}
        textStyle={{ fontSize: fp(2) }}
      ></Button>

      <View style={{ flexDirection: "row" }}>
        <Text>Kayıt Olmak İçin Tıklayınız</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Secim")}>
          <Text
            style={{ marginLeft: wp(2), color: "tomato", fontWeight: "bold" }}
          >
            Kayıt Ol
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: hp(5),
  },
  image: {
    width: wp(50),
    height: wp(50),
  },
  button: {
    width: wp(60),
    marginBottom: hp(3),
    marginTop: hp(3),
  },
});

export default LoginScreen;
