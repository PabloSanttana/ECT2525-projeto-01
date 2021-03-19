import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function index({ data }) {
  const navigation = useNavigation();

  function handleNavigateToDetail(id) {
    navigation.navigate("Detail", { id });
  }

  function Item({ data }) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => handleNavigateToDetail(data.id)}>
          <Image style={styles.item_image} source={{ uri: data.image }} />
        </TouchableOpacity>
        <Text style={styles.item_title}>{data.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: data.color }]}> {data.type} </Text>
      <View style={[styles.containerItem, { backgroundColor: data.color }]}>
        <FlatList
          data={data.data}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
