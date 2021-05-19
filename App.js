import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import AppLogin from "./components/AppLogin";
import colors from "./config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.map}
          blurRadius={3}
          source={require("./assets/map.jpg")}
        />
        <Image style={styles.banner} source={require("./assets/visneta.png")} />
      </View>
      <AppLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 70,
    position: "absolute",
    top: "40%",
    width: 280,
  },
  bannerContainer: {
    alignItems: "center",
    height: "55%",
    width: "100%",
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
