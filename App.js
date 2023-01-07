import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import fonts from "./src/utils/fonts";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;
  return (
    <ToastProvider duration={2000}>
      <Navigation />
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
