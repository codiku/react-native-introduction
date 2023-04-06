import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Platform, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {Platform.OS === "android" && <Text>Hi on Android</Text>}
        {Platform.OS === "ios" && <Text>Hi on IOS</Text>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
