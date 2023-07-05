import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const LessonScreen = ({}) => {
  const {
    params: { lesson },
  } = useRoute();

  console.log(lesson);

  return (
    <View>
      <Text>LessonScreen</Text>
    </View>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({});
