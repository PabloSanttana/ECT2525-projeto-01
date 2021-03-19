import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  containerFilter: {
    backgroundColor: "#ffff",
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
  },
  inputSearch: {
    marginLeft: 20,
    paddingVertical: 5,
    color: "green",
    fontSize: 16,
  },
  Clear: {
    position: "absolute",
    right: 10,
    top: 7,
  },
});
