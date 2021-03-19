import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function index({ label, value, setVaule, keyboardType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={setVaule}
        style={styles.input}
      />
      <TouchableOpacity style={styles.edit}>
        <Feather name="edit" size={25} color="green" />
      </TouchableOpacity>
    </View>
  );
}
