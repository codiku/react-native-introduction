import { Text, TouchableOpacity } from "react-native";

import { Greetings } from "./components/Greetings/Greetings";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./components/Greetings/Greetings.style";
import { useState } from "react";

export default function App() {
  const [age, setAge] = useState(0);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={increaseAge} style={s.btn}>
        <Text style={{ fontSize: 30 }}>Augmenter age</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 30 }}>Mon age {age}</Text>
      {/*<Greetings name={"Codiku"} age={age} />*/}
    </SafeAreaView>
  );
}
