import { Text, View } from "react-native";

export function Greetings({ name, age }) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        Bienvenue {name} tu as {age} ans
      </Text>
    </View>
  );
}
