import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfilCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard({
  firstName,
  lastName,
  age,
  onPressSocialMediaIcon,
}) {
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
          <Text style={s.name}>
            {firstName} {lastName}
          </Text>
          <Text>
            Hi I am React native developer, I am {age} years old, let's get in
            touch, and talk soon.
          </Text>
        </View>
      </View>

      <View style={s.social}>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon("twitter")}
          style={s.socialBtn}
        >
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon("linkdn")}
          style={s.socialBtn}
        >
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon("github")}
          style={s.socialBtn}
        >
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
