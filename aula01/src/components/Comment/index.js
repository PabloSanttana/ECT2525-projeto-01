import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function index({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerComments}>
        <Image
          resizeMode="cover"
          source={{ uri: data.image }}
          style={styles.image}
        />
        <Text style={styles.comment}>
          <Text style={{ fontWeight: "bold" }}>{data.name} </Text>
          {data.comentario}
        </Text>
      </View>
    </View>
  );
}
