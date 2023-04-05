import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  header: {
    flexDirection: "row",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  iconContainer: {
    backgroundColor: "#eee",
    borderRadius: 30,
    padding: 10,
  },
});
