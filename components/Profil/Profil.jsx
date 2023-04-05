import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { s } from "./Profile.style";
export function ProfilCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/300" }} />
        <View style={{ flex: 1 }}>
          <Text style={s.name}>Codiku TheDev</Text>
          <Text>
            Hey that's me, I am a React Native dev, let's get in touch !
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.iconContainer}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.iconContainer}>
          <FontAwesome name="linkedin" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.iconContainer}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
