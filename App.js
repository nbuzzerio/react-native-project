import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";

import AppActivityIndicator from "./components/AppActivityIndicator";
import AppBanner from "./components/AppBanner";
import AppDrawerNav from "./components/AppDrawerNav";
import AppLogin from "./components/AppLogin";
import Screen from "./components/Screen";
import Tiles from "./components/Tiles";
import colors from "./config/colors";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticating(false);
      setUserData([
        { title: "Open Orders", value: 1924, icon: null, navIcon: "tools" },
        { title: "Routine Services", value: 676, icon: null, navIcon: "clock" },
        { title: "Completed", value: 37, icon: null, navIcon: "check" },
        { title: "Messages", value: 0, icon: null, navIcon: "comments" },
        { title: "Properties", value: 0, icon: "map", navIcon: "map-marked" },
        { title: "Favorites", value: 12, icon: null, navIcon: "star" },
        { title: "Tasks", value: 0, icon: null, navIcon: "tasks" },
        { title: "Network Queue", value: 0, icon: null, navIcon: "paper-plane" },
        { title: "Photos", value: 0, icon: "camera", navIcon: "camera" },
        { title: "Settings", value: 0, icon: "cog", navIcon: "cog" },
      ]);
    }, 1000);
  }, [loggedIn]);



  function HomeScreen({ navigation }) {
    return (
      <Screen>
        {authenticating && <AppActivityIndicator process={"Authenticating"} />}
        <AppBanner
          onNavPress={() => {
            navigation.openDrawer();
          }}
        />
        <Tiles content={userData} columns={2}></Tiles>
      </Screen>
    );
  }

  const screen = loggedIn ? (
    <AppDrawerNav userData={userData} HomeScreen={HomeScreen}/>
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
