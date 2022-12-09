import { Image, Text } from "react-native";

import { Greetings } from "./components/Greetings/Greetings";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <Text>Bienvenue</Text>
      <Greetings
        name={"Codiku"}
        age={101}
        likeDog={true}
        likeCat={true}
        superFonction={function () {
          console.log("Yo !");
        }}
        isHappy={true}
        dog={{ name: "Bobun", color: "blanc" }}
      >
        <Text>J'espère que ce cours va te plaire !</Text>
      </Greetings>
    </SafeAreaView>
  );
}
