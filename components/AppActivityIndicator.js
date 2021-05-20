import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

import colors from "../config/colors";

function AppActivityIndicator({ process }) {
  return (
    <View style={styles.indicator}>
      <View style={styles.indicatorBox}>
        <ActivityIndicator size="large" color={colors.white} />
        <Text style={{ color: colors.white }}>{process}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    height: "80%",
    marginBottom: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  indicatorBox: {
    backgroundColor: colors.black,
    borderRadius: 10,
    height: "25%",
    opacity: 0.8,
    width: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppActivityIndicator;
