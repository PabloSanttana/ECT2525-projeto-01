import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { TypingAnimation } from "react-native-typing-animation";
import { Entypo } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import styles from "./styles";
import imagemBackground from "../../../assets/login/header.png";

export default function index() {
  const navigation = useNavigation();
  const [typin_email, setTypin_email] = useState(false);
  const [typin_password, setTypin_password] = useState(false);
  const [login_check, setlogin_check] = useState(false);

  // sempre e chamando quando a tela é chamada
  useFocusEffect(() => {
    setlogin_check(false);
  });

  function handleFocus(value) {
    if (value === "email") {
      setTypin_email(true);
      setTypin_password(false);
    } else {
      setTypin_email(false);
      setTypin_password(true);
    }
  }

  function handleNavigate_Detail() {
    time = setInterval(() => {
      setlogin_check(true);
      clearInterval(time);
      navigation.navigate("Home");
    }, 300);
  }
  const Typing = (
    <TypingAnimation
      dotColor="green"
      style={{ marginRight: 25, marginBottom: 10 }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={imagemBackground}
          style={styles.imageBackground}
        >
          <Text style={styles.title}>Bem vindo</Text>
          <Text style={styles.subtitle}>Aplicativo de alimentos</Text>
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        {/*  <Text style={styles.footerLabel}>E-mail</Text>
        <View style={styles.containerInput}>
          <TextInput
            autoCompleteType="email"
            autoCorrect={false}
            keyboardType="email-address"
            style={styles.input}
            placeholder="Your email.."
            onFocus={() => handleFocus("email")}
          />
          {typin_email && Typing}
        </View>
        <Text style={styles.footerLabel}>Password</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Your email.."
            onFocus={() => handleFocus("password")}
          />
          {typin_password && Typing}
        </View> */}
        <View style={styles.container_button}>
          <TouchableOpacity
            onPress={handleNavigate_Detail}
            style={styles.login}
          >
            <LinearGradient
              colors={["#016a37", "#259a43"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.login_gradient}
            >
              {login_check ? (
                <Entypo name="check" size={26} color="#fff" />
              ) : (
                <Text style={styles.textButton}>Entrar</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
