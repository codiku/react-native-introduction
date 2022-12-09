import { Text, TouchableOpacity } from "react-native";

import { Greetings } from "./components/Greetings/Greetings";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  function diplayGreetingClickMessage(message) {
    alert(message);
  }

  return (
    <SafeAreaView>
      <Text>Ici c'est {"<App/>"}</Text>
      <Greetings onClick={diplayGreetingClickMessage} />
    </SafeAreaView>
  );
}
