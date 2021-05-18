import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    flexDirection: "row",
    marginVertical: 10,
    padding: 3,
    width: "90%",
  },
  icon: {
    marginHorizontal: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 25,
    width: '100%',
  },
});

export default AppTextInput;
