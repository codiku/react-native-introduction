import { Image, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <AgeCounter />
        {/* <ProfilCard
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={200}
          isOpenToWork={true}
        /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
