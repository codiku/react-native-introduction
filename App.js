import { Image, Text } from "react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Human } from "./components/Human/Human";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Human
          age={90}
          car={{ brand: "Renault" }}
          doSomething={function () {
            console.log("Hello !");
          }}
          firstName={"Peter"}
          lastName={"Parker"}
          isHappy
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
