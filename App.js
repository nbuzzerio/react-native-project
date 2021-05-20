import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppActivityIndicator from "./components/AppActivityIndicator";
import AppBanner from "./components/AppBanner";

import AppLogin from "./components/AppLogin";
import Screen from "./components/Screen";
import colors from "./config/colors";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  useEffect(() => {
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticating(false);
    }, 1000);
  }, [loggedIn]);

  const screen = loggedIn ? (
    <Screen>
      {authenticating && <AppActivityIndicator process={"Authenticating"} />}
      <AppBanner />
      <Image style={styles.map} source={require("./assets/map.jpg")} />
    </Screen>
  ) : (
    <>
      <View style={styles.logoContainer}>
        <Image
          style={styles.map}
          blurRadius={3}
          source={require("./assets/map.jpg")}
        />
        <Image style={styles.logo} source={require("./assets/visneta.png")} />
      </View>
      <AppLogin setLoggedIn={setLoggedIn} />
    </>
  );

  return <View style={styles.container}>{screen}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
  },
  logo: {
    height: 70,
    position: "absolute",
    top: "40%",
    width: 280,
  },
  logoContainer: {
    alignItems: "center",
    height: "55%",
    width: "100%",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
