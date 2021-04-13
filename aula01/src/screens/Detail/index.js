import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
import Modal from "react-native-modal";

import styles from "./styles";
import image from "../../../assets/header_detail.png";
import api from "../../services/api";
import Comment from "../../components/Comment";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default function index() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [spinnerVisible, setSpinnerlVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
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
  function handleComment() {
    setSpinnerlVisible(true);
    const data = {
      image:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png",
      name,
      comentario: comment,
      userId: 1,
    };
    api
      .post(`/produtos/${id}/comentarios`, data)
      .then((response) => {
        setModalVisible(false);
        getComments();
        alert("Comentário salvo com sucesso!");
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.log(error);
        alert("Error inesperado!, tente novamente");
      });
    setSpinnerlVisible(false);
  }
  function handleDelete(idcomentario) {
    setSpinnerlVisible(true);
    api
      .delete(`/produtos/${id}/comentario/${idcomentario}`)
      .then((response) => {
        getComments();
        alert("Delete com sucesso!");
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.log(error);
        alert("Error inesperado!, tente novamente");
      });
    setSpinnerlVisible(false);
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
  const Footer = () => {
    return (
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ marginHorizontal: 20, marginBottom: 20 }}
      >
        <LinearGradient
          colors={["#009245", "#8cc631"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.textButton}>Adicionar um comentário</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        ListHeaderComponent={Header}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={NotFound}
        renderItem={({ item }) => (
          <Comment data={item} handleDelete={handleDelete} />
        )}
        ListFooterComponent={Footer}
      />
      <Spinner
        visible={spinnerVisible}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />

      <Modal
        animationInTiming={500}
        animationOutTiming={900}
        onBackdropPress={() => setModalVisible(false)}
        isVisible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.titleModal}>Adicionar um comentário</Text>
          <Text style={[styles.titleModal, { alignSelf: "flex-start" }]}>
            Nome:
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputModal}
            maxLength={500}
            multiline={false}
            autoFocus={true}
          />
          <Text style={[styles.titleModal, { alignSelf: "flex-start" }]}>
            comentário:
          </Text>
          <TextInput
            value={comment}
            onChangeText={setComment}
            style={styles.inputModal}
            maxLength={500}
            multiline={true}
          />
          <View style={styles.buttonsContainerModal}>
            <Button
              title="Cancel"
              color="#222455"
              onPress={() => setModalVisible(false)}
            />
            <Button title="Salve" color="#222455" onPress={handleComment} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
