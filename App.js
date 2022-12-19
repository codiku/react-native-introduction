import { Image, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { Human } from "./components/Human/Human";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Human
          firstName={"Peter"}
          lastName={"Parker"}
          age={60}
          car={{ brand: "Renault", maxSpeed: 180 }}
          isHappy={true}
          doSomething={function () {
            console.log("Hello !");
          }}
        >
          <Text style={{ fontSize: 50 }}>COUCOU</Text>
        </Human>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
