import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={s.title}>Hello !</Text>
        <View style={s.square}>
          <Text style={s.innerTxt}>Super!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
