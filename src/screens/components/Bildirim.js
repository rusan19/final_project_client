import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Bildirim = () => {
  const [notifications, setNotifications] = useState([
    "Proje Dersine eklendiniz",
    "Assembly Dersinden yeni mesaj",
  ]);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateNotifications();
  }, []);

  const animateNotifications = () => {
    Animated.stagger(200, [
      ...notifications.map((_, index) =>
        Animated.timing(slideAnim, {
          toValue: index + 1,
          duration: 500,
          useNativeDriver: true,
        })
      ),
    ]).start();
  };

  const renderNotification = (text, index) => {
    return (
      <Animated.View
        key={index}
        style={[
          styles.notification,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [index, index + 1],
                  outputRange: [100, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.notificationText}>{text}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(202, 152, 49, .7)", "white"]}
        style={StyleSheet.absoluteFill}
      />
      <Text style={styles.title}></Text>
      {notifications.map((notification, index) =>
        renderNotification(notification, index)
      )}
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
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notification: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 18,
    color: "white",
  },
});

export default Bildirim;
