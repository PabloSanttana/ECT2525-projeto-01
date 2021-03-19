import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
  },
  image_container: {
    width: height * 0.5 * 0.5,
    height: height * 0.5 * 0.5,
    marginTop: (height * 0.5 * 0.5) / 3,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: (height * 0.5 * 0.5) / 2,
  },
  button_imageEdit: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
  },
  back: {
    position: "absolute",
    left: 0,
    marginTop: 30,
    marginLeft: 15,
  },
  status: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "green",
    paddingVertical: 3,
  },
  textPrice: {
    color: "green",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
  },
  textName: {
    color: "#3e3c3e",
    fontWeight: "bold",
    fontSize: 27,
    marginTop: 5,
  },
  textDetail: {
    color: "gray",
    marginTop: 5,
    paddingRight: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 100,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
