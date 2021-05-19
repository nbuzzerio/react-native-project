import React, { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import AppButton from "./AppButton";
import AppTab from "./AppTab";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";

function AppLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState(0);
  const tabs = ["Login", "Signup"];
  const signup = (selected) ? true : false;

  return (
    <View style={styles.loginContainer}>
      <AppTab tabs={tabs} selected={selected} setSelected={setSelected}/>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => {
          setUsername(text);
        }}
        placeholder="Username"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      {signup && <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="Confirm Password"
        secureTextEntry
        textContentType="password"
      />}
      <AppButton
        onPress={() => {
          console.log("username:", username, "password:", password);
        }}
        title="Submit"
      />
      {!signup && <TouchableOpacity>
        <Text style={{ color: colors.accent }}>Forgot your password?</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    width: "100%"
  },
});

export default AppLogin;
