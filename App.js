import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { s } from "./App.style";

export default function App() {
  return (
    <View
      style={{
        ...s.container,
      }}
    >
      <View style={s.boxYellow} />
      <View style={s.boxRed} />
      <View style={s.boxBlue} />
      {/*
      <View style={s.boxYellow} />
      <View style={s.boxRed} />
      <View style={s.boxBlue} />
      <View style={s.boxYellow} />
      <View style={s.boxRed} />
      <View style={s.boxBlue} />
      <View style={s.boxYellow} />
      <View style={s.boxRed} />
      <View style={s.boxBlue} />
      <View style={s.boxYellow} />
      <View style={s.boxRed} />
      <View style={s.boxBlue} />
    */}
    </View>
  );
}
