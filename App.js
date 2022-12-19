import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Child } from "./components/Child/Child";

export default function App() {
  const [age, setAge] = useState(0);

  function hello(name) {
    setAge(age + 1);
  }

  console.log(age);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Child onPress={hello} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
