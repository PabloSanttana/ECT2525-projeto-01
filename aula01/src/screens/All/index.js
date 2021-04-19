import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AdMobInterstitial } from "expo-ads-admob";

import Card from "../../components/card_all";
import styles from "./styles";
import api from "../../services/api";

export default function index() {
  const [data, setData] = useState([]);
  const [data_temp, setData_temp] = useState([]);
  const [searchFalid, setSearchFalid] = useState(false);
  const [search, setSearch] = useState("");
  const [searchClear, setSearchClear] = useState(false);

  function handleSearch(text) {
    setSearch(text);
    let data = [];
    data_temp.map((value) => {
      if (value.name.indexOf(text) > -1) data.push(value);
    });
    if (data.length === 0) {
      setSearchFalid(true);
    } else {
      setSearchFalid(false);
    }
    setData(data);
  }

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setData(response.data);
        setData_temp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    load();
  }, []);

  async function load() {
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-3940256099942544/1033173712"
    );
    startInsterstial();
  }

  async function startInsterstial() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerFilter}>
        <TextInput
          style={styles.inputSearch}
          value={search}
          onChangeText={handleSearch}
          placeholder="Buscar..."
          onFocus={() => setSearchClear(true)}
        />
        {searchClear && (
          <TouchableOpacity
            onPress={() => handleSearch("")}
            style={styles.Clear}
          >
            <AntDesign name="closecircle" color="green" size={25} />
          </TouchableOpacity>
        )}
      </View>
      {searchFalid && (
        <Text
          style={{
            textAlign: "center",
            color: "green",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Not found!
        </Text>
      )}
      <FlatList
        data={data}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
