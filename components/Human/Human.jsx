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
        Mon prénom est {firstName} et mon nom est {lastName} j'ai {age}{" "}
        ans.
      </Text>
      <Text style={{ fontSize: 40 }}>
        Ma voiture est une {car.brand} et elle va au max à {car.maxSpeed}{" "}
        km/h
      </Text>
      {children}
    </>
  );
}
