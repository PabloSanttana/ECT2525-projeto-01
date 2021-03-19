import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import CardFull from "../../components/CardFull";

import styles from "./styles";
import api from "../../services/api";

export default function index() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get("/produtos/types")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardFull data={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
