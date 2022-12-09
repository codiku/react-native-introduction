import { Text } from 'react-native';
import { View } from 'react-native';
import { s } from "./Greetings.style"

export function Greetings({ name, age, superFonction, isHappy = true, dog, children, likeDog, likeCat }) {

    return <View style={{ backgroundColor: "green", height: "100%" }}>
        <Text style={{ color: 1 === 1 ? "white" : "black" }}>Bienvenu {name}</Text>
        <View style={s.box} />
    </View>
}