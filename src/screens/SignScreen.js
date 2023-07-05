import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Input from "../components/TextInput";
import Button from "../components/Button";
import { hp } from "../utils/responsive";
import { useToast } from "react-native-toast-notifications";

const SignScreen = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();

  const handleNumberChange = (text) => {
    setNumber(text);
  };
  const handleNameChange = (text) => {
    setName(text);
  };
  const handleSurnameChange = (text) => {
    setSurname(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const saveDataToDatabase = async () => {
    if (!number || !name || !surname || !email || !password)
      return toast.show(`Tüm alanları eksiksiz doldurunuz`, {
        type: "Danger",
        placement: "bottom",
      });

    const userData = {
      number,
      name,
      surname,
      email,
      password,
    };

    try {
      const response = await fetch("http://192.168.1.34:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Veriler başarıyla kaydedildi.");

        navigation.navigate("Login");

        return toast.show(`Kayıt Başarılı`, {
          type: "success",
          placement: "top",
        });
      } else {
        console.log("Veriler kaydedilirken bir hata oluştu.");
        return toast.show(`Mail adresi veya okul numarası sistemde kayıtlı`, {
          type: "Danger",
          placement: "bottom",
        });
      }
    } catch (error) {
      console.log("Veriler kaydedilirken bir hata oluştu:", error);
      return toast.show(`Kayıt Sırasında Hata Meydana Geldi`, {
        type: "Danger",
        placement: "bottom",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/t1.png")}
        style={{ width: 250, height: 100, left: 70 }}
      />
      <Input
        placeHolder="Okul Numarası"
        value={number}
        setText={handleNumberChange}
        type="number"
      />
      <Input value={name} setText={handleNameChange} placeHolder="Ad" />
      <Input
        placeHolder="Soyad"
        value={surname}
        setText={handleSurnameChange}
      />
      <Input placeHolder="E-posta" value={email} setText={handleEmailChange} />
      <Input
        placeHolder="Şifre"
        value={password}
        setText={handlePasswordChange}
        secureTextEntry={true}
      />
      <Button
        text="Kayıt Ol"
        onPress={saveDataToDatabase}
        style={styles.button}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(10),
  },
  button: {
    marginTop: hp(2),
  },
});

export default SignScreen;
