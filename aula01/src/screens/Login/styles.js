import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 0.8,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#ffff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ffff",
  },
  footer: {
    flex: 1.1,
    paddingHorizontal: 20,
  },
  footerLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  containerInput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "#f2f2f2",
  },
  input: {
    flex: 1,
    marginVertical: 3,
    color: "gray",
    fontSize: 16,
  },
  container_button: {
    width: "100%",
    alignItems: "center",
    marginTop: height * 0.2,
  },
  login: {
    width: "80%",
    height: 50,
    borderRadius: 10,
  },
  login_gradient: {
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
