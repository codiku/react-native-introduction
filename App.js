import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { Alert, Linking, Text } from "react-native";
import { useState } from "react";

export default function App() {
  function goToSocialMedia(sociaMedia) {
    let url;
    switch (sociaMedia) {
      case "linkdn":
        url = "http://github.com/codiku";
        break;
      case "twitter":
        url = "http://github.com/codiku";
        break;
      case "github":
        url = "http://github.com/codiku";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressSocialMediaIcon={goToSocialMedia}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
