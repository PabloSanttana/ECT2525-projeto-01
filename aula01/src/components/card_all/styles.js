import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    marginBottom: 15,
    position: "relative",
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 5,
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerRating: {
    flexDirection: "row",
    marginTop: 5,
  },
  containerPrice: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: 60,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  price: {
    color: "#049344",
    fontWeight: "bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#fff",
    position: "absolute",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    right: 15,
    top: 11,
  },
});
