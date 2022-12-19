import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={s.square}>
          <Text style={{ color: "red", backgroundColor: "black" }}>
            Hello World
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
