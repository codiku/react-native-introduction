import { Text } from 'react-native';

export function Greetings({ name, age, superFonction, isHappy, dog, children }) {
    superFonction()
    console.log(" Content ? ", isHappy)

    return <>
        <Text>Mon cher {name} tu as {age} ans </Text>
        <Text>Ton chien c'est {dog.name} il est {dog.color} </Text>
        {children}
    </>
}