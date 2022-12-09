import { Greetings } from "./components/Greetings/Greetings";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Bienvenue</Text>
      <Greetings />
    </SafeAreaView>
  );
}
