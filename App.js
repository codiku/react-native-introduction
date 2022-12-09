import { Greetings } from "./components/Greetings/Greetings";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <Greetings name={"Codiku"} />
    </SafeAreaView>
  );
}
