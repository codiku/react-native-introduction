import { Text, View, Image } from "react-native";
import { s } from "./ProfilCard.style";
export function ProfilCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>Codiku TheDev</Text>
          <Text>
            Hi I am React native developper, let's get in touch, and soon
          </Text>
        </View>
      </View>
      <View style={s.social}></View>
    </View>
  );
}
