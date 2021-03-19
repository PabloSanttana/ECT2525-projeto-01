import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function index({ data }) {
  function _rating(value) {
    let rating = [];
    for (let index = 0; index < value; index++) {
      rating.push(
        <Image
          key={index}
          resizeMode="cover"
          source={require("../../../assets/star2.png")}
          style={{ width: 20, height: 20 }}
        />
      );
    }
    return rating;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <Text style={styles.title}>{data.name}</Text>
      <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 10 }}>
        {_rating(data.rating)}
      </View>
      <Text style={{ textAlign: "center" }}>{data.comment}</Text>
    </View>
  );
}
