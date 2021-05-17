import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

import AppTextInput from "./components/AppTextInput";
import colors from './config/colors';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <View style={styles.loginContainer}>
        <AppTextInput
          onChangeText={(text) => {
            setUsername(text);
          }}
          icon="email"
          placeholder="Username"
        />
        <AppTextInput
          onChangeText={(text) => {
            setPassword(text);
          }}
          icon="lock"
          placeholder="Password"
          secureTextEntry
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 75,
    position: "absolute",
    top: "40%",
    width: 300,
  },
  bannerContainer: {
    alignItems: "center",
    height: "65%",
    width: "100%",
  },
  loginContainer: {
    alignItems: "center",
    height: "65%",
    paddingTop: 10,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
