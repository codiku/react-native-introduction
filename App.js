import { View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/Profil/Profil";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ padding: 10 }}>
          <ProfilCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
