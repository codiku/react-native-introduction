import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AgeDisplay } from "../AgeDisplay/AgeDisplay";

export function AgeCounter() {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  console.log("RENDER !", age);
  return (
    <>
      <TouchableOpacity onPress={increaseAge}>
        <Text style={{ fontSize: 40 }}>Augmenter</Text>
      </TouchableOpacity>
      <AgeDisplay age={age} />
    </>
  );
}
