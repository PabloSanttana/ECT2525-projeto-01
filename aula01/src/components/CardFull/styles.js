import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  containerItem: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  item: {
    width: width / 3,
    alignItems: "center",
  },
  item_image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#fff",
    borderWidth: 3,
  },
  item_title: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
    marginBottom: 10,
  },
});
