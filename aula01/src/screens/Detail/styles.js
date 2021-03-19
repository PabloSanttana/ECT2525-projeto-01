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
    height: height * 0.5,
  },

  image_container: {
    width: height * 0.5 * 0.5,
    height: height * 0.5 * 0.5,
    marginTop: (height * 0.5 * 0.5) / 3,
  },
  goBackContainer: {
    right: 50,
    top: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderColor: "#fff",
    borderWidth: 5,
    borderRadius: (height * 0.5 * 0.5) / 2,
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
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  statusButton: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "green",
    width: width * 0.3,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textPrice: {
    color: "green",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 30,
  },
  textName: {
    color: "#222455",
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
  comments: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
    color: "#009245",
    fontWeight: "bold",
  },
  notFoundContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleNotFound: {
    color: "#222455",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
