import React from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Tiles({ content, columns }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/map.jpg")}
        style={styles.backgroundImage}
      >
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
          data={content}
          keyExtractor={(element, index) => index.toString()}
          numColumns={columns}
          renderItem={({ item }) => {
            const tile = item.icon ? (
              <MaterialCommunityIcons
                name={item.icon}
                size={45}
                color={colors.primary}
                style={{ marginBottom: 12 }}
              />
            ) : (
              <Text style={{ color: colors.primary, fontSize: 50 }}>
                {item.value}
              </Text>
            );

            return (
              <View style={styles.tile}>
                {tile}
                <Text style={styles.textStyle}>{item.title}</Text>
              </View>
            );
          }}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    height: "100%",
    justifyContent: "space-evenly",
    width: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  tile: {
    alignItems: "center",
    backgroundColor: "#ccccffaa",
    borderColor: colors.black,
    borderRadius: 2,
    borderWidth: 1,
    height: 125,
    justifyContent: "center",
    marginTop: 60,
    width: "40%",
  },
  textStyle: {
    color: colors.black,
  },
});

export default Tiles;
