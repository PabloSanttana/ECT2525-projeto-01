import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import image from "../../../assets/header_detail.png";
import Input from "../../components/Input";

export default function index() {
  const navigation = useNavigation();
  const [name, setName] = useState("Rebeca Santos Silva");
  const [Email, setEmail] = useState("rebeca@gmail.com");
  const [fone, setFone] = useState("00 0000-0000");

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        source={image}
        style={styles.imageBackground}
      >
        <View style={styles.image_container}>
          <Image
            source={require("../../../assets/avatar3.png")}
            style={styles.image}
          />
          <View style={styles.button_imageEdit}>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={30} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <ScrollView>
          <View style={styles.status}>
            <Text style={{ color: "green" }}>Profile</Text>
          </View>
          <Input
            label="Name"
            keyboardType="default"
            value={name}
            setVaule={setName}
          />
          <Input
            label="Email"
            keyboardType="email-address"
            value={Email}
            setVaule={setEmail}
          />
          <Input
            label="Fone"
            keyboardType="phone-pad"
            value={fone}
            setVaule={setFone}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={["#009245", "#8cc631"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.textButton}>Sair</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
