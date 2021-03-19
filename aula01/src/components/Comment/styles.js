import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  containerComments: {
    flexDirection: "row",
  },
  comment: {
    width: "83%",
    color: "#222455",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderColor: "#222455",
    borderWidth: 2,
    marginHorizontal: 10,
  },
});
