import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, alignItems: "flex-end" }}>
        <View style={s.box1} />
        <View style={s.box2} />
        <View style={s.box3} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
