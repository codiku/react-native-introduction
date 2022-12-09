import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  boxYellow: {
    height: 50,
    width: 50,
    backgroundColor: "#FEC354",
  },
  boxRed: {
    width: 70,
    height: 80,
    backgroundColor: "#EE2C38",
    zIndex: 10,
    // alignSelf: "flex-end",
  },
  boxBlue: {
    position: "absolute",
    marginTop: 100,
    width: 100,
    height: 100,
    backgroundColor: "#3878F4",
  },
});
