import React from "react";
import { View, Text, FlatList } from "react-native";

import data_popular from "../../constants/data_popular";
import styles from "./styles";
import People from "../../components/People";

export default function index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data_popular}
        renderItem={({ item }) => <People data={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      />
    </View>
  );
}
