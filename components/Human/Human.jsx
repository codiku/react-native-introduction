import { Image, Text } from "react-native";
import { s } from "./Human.style";

export function Human({
  firstName,
  lastName,
  age,
  car,
  children,
  isHappy,
  doSomething,
}) {
  return (
    <>
      <Text style={{ fontSize: 40 }}>
        {age > 100 ? "Tu n'es pas tout jeune" : "Salut la jeunesse"}
      </Text>
      {isHappy ? <DisplayHappy /> : <DisplayNotHappy />}
    </>
  );
}

function DisplayHappy() {
  return <Text style={{ fontSize: 40 }}>Je suis heureux</Text>;
}

function DisplayNotHappy() {
  return <Text style={{ fontSize: 40 }}>Je suis malheureux</Text>;
}
