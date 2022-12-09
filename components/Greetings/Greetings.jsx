import { Text } from 'react-native';

export function Greetings({ name, age, superFonction, isHappy = true, dog, children, likeDog, likeCat }) {

    if (isHappy) {
        return <>
            <Text>Tu as l'air super content et plutôt {age > 100 ? "vieux" : "jeune"}</Text>
            <Text> Et tes gouts d'animaux ? </Text>
            {likeDog && <DogLover />}
            {likeCat && <CatLover />}
        </>
    } else {
        return <Text>Pas d'humeur ?</Text>
    }

}


function CatLover() {
    return <Text>"Les minous c'est ma vie"</Text>;
}

function DogLover() {
    return <Text>"J'adore les toutous"</Text>;
}