import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingBottom: 6,
    position: "relative",
  },
  label: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    color: "gray",
    fontSize: 16,
    marginLeft: 15,
  },
  edit: {
    position: "absolute",
    bottom: 10,
    right: 0,
  },
});
