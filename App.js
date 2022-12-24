import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import fonts from "./src/utils/fonts";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
