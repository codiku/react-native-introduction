import { Text, TouchableOpacity, View } from "react-native";

import { s } from "./Greetings.style";

export function Greetings({ onClick }) {
  function onClickMe() {
    onClick("Merci pour le click !");
  }
  return (
    <View>
      <TouchableOpacity onPress={onClickMe} style={s.btn}>
        <Text>Ici c'est {"<Greetings/>"}</Text>
      </TouchableOpacity>
    </View>
  );
}
