import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppActivityIndicator from "./components/AppActivityIndicator";
import AppBanner from "./components/AppBanner";

import AppLogin from "./components/AppLogin";
import Screen from "./components/Screen";
import Tiles from "./components/Tiles";
import colors from "./config/colors";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticating(false);
      setUserData([
        { title: "Open Orders", value: 1924, icon: null },
        { title: "Routine Services", value: 676, icon: null },
        { title: "Completed", value: 37, icon: null },
        { title: "Messages", value: 0, icon: null },
        { title: "Properties", value: 0, icon: "map" },
        { title: "Favorites", value: 12, icon: null },
        { title: "Tasks", value: 0, icon: null },
        { title: "Network Queue", value: 0, icon: null },
        { title: "Photos", value: 0, icon: "camera" },
        { title: "Settings", value: 0, icon: "cog" },
      ]);
    }, 1000);
  }, [loggedIn]);

  const screen = loggedIn ? (
    <Screen>
      {authenticating && <AppActivityIndicator process={"Authenticating"} />}
      <AppBanner />
      <Tiles content={userData} columns={2}></Tiles>
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
