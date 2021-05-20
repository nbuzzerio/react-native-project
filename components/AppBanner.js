import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function AppBanner() {
  return (
    <View style={styles.banner}>
      <FontAwesome5
        name={"bars"}
        size={30}
        color={colors.white}
        style={styles.icon}
      />
      <Image
        style={styles.logo}
        source={require("../assets/visneta-white.png")}
      />
      <AntDesign
        name={"search1"}
        size={30}
        color={colors.accent}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flexDirection: "row",
    height: "8%",
    justifyContent: "space-around",
    width: "100%",
  },
  logo: {
    height: "65%",
    marginBottom: 10,
    width: "39%",
    backgroundColor: colors.primary,
  },
  icon: {
    paddingTop: 5,
  },
});

export default AppBanner;
