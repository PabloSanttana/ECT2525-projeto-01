import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function index(data) {
  const navigate = useNavigation();

  function handleNavigateToDetail(id) {
    navigate.navigate("Detail", { id });
  }

  function _rating(value) {
    let rating = [];
    for (let index = 0; index < value; index++) {
      rating.push(
        <Image
          key={index}
          resizeMode="cover"
          source={require("../../../assets/star.png")}
          style={{ width: 15, height: 15 }}
        />
      );
    }
    return rating;
  }

  return (
    <LinearGradient
      colors={["#049344", "#7dc033"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          /*  resizeMode="contain" */
          source={{ uri: data.data.image }}
        />
      </View>
      <View>
        <Text style={styles.cardTitle}>{data.data.name}</Text>
        <View style={styles.containerRating}>{_rating(data.data.rating)}</View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>{data.data.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleNavigateToDetail(data.data.id)}
        style={styles.button}
      >
        <AntDesign name="arrowright" size={20} color="green" />
      </TouchableOpacity>
    </LinearGradient>
  );
}
