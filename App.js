import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { FlexDemo } from "./components/FlexDemo/FlexDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "grey", flex: 1 }}>
        <FlexDemo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
