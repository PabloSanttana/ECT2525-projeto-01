import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";

import styles from "./styles";
import image from "../../../assets/header_detail.png";
import api from "../../services/api";
import Comment from "../../components/Comment";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function index() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [comments, setComments] = useState([]);
  const { id } = useRoute().params;
  useEffect(() => {
    getProduto();
    getComments();
  }, []);
  function getProduto() {
    api
      .get(`produtos/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getComments() {
    api
      .get(`/produtos/${id}/comentarios`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  if (!data) {
    return (
      <Spinner
        visible={true}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }

  const Header = () => {
    return (
      <>
        <ImageBackground
          resizeMode="stretch"
          source={image}
          style={styles.imageBackground}
        >
          <View style={styles.image_container}>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>
        </ImageBackground>
        <View style={styles.footer}>
          <ScrollView>
            <View style={[styles.status]}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.statusButton}
              >
                <Text style={{ color: "green" }}>Voltar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.statusButton}>
                <Text style={{ color: "green" }}>ACESSÍVEL</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textPrice}>{data.price}</Text>
            <Text numberOfLines={2} style={styles.textName}>
              {data.name.toUpperCase()}
            </Text>
            <Text style={styles.textDetail}>
              Food.com tem uma enorme coleção de receitas que são enviadas, e
              avaliado por pessoas que são apaixonadas por comida. A partir de
              cozinha internacional.
            </Text>
            <LinearGradient
              colors={["#009245", "#8cc631"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.button}
            >
              <Text style={styles.textButton}>ORDER NOW</Text>
            </LinearGradient>
          </ScrollView>
          <Text style={styles.comments}>Comentários</Text>
        </View>
      </>
    );
  };

  const NotFound = () => {
    return (
      <View style={[styles.container, styles.notFoundContainer]}>
        <Text style={styles.titleNotFound}>Não tem comentários</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        ListHeaderComponent={Header}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={NotFound}
        renderItem={({ item }) => <Comment data={item} />}
      />
    </View>
  );
}
