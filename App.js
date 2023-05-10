import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { Alert, Linking, Text } from "react-native";
import { useState } from "react";

export default function App() {
  function hello(name) {
    Alert.alert("Hello " + name);
    setCountClick(countClick + 1);
  }
  function goToSocial(socialMedia) {
    let url;
    switch (socialMedia) {
      case "github":
        url = "https://github.com/codiku";
        break;
      case "twitter":
        url = "https://github.com/codiku";
        break;
      case "linkdn":
        url = "https://github.com/codiku";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressSocialIcon={goToSocial}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
