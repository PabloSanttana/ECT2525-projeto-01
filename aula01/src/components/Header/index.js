import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import imageHeader from "../../../assets/header.png";

export default function index() {
  const navigation = useNavigation();

  function handleNavigateToProfile() {
    navigation.navigate("Profile");
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={imageHeader}
          style={styles.ImageBackground}
        >
          <Text style={styles.headerTitle}>Home</Text>
        </ImageBackground>

        <TouchableOpacity
          onPress={handleNavigateToProfile}
          style={styles.headerProfile}
        >
          <FontAwesome name="user-circle-o" size={40} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
