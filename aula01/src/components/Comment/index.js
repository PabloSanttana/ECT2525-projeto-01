import React from "react";
import { View, Text, Image, Button } from "react-native";

import styles from "./styles";

export default function index({ data, handleDelete }) {
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
      {data.userId === 1 && (
        <View style={{ width: 100, alignSelf: "flex-end" }}>
          <Button
            color="red"
            onPress={() => handleDelete(data.id)}
            title="delete"
          />
        </View>
      )}
    </View>
  );
}
