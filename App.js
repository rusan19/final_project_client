import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import fonts from "./src/utils/fonts";
import { ToastProvider } from "react-native-toast-notifications";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
        useErrorBoundary: true,
      },
    },
  });

  const [fontsLoaded] = useFonts(fonts);
  if (!fontsLoaded) return null;
  return (
    <ToastProvider duration={2000}>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
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
