import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppTab from "./AppTab";
import colors from "../config/colors";

const signupSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const loginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function AppLogin() {
  const [selected, setSelected] = useState(0);

  const tabs = ["Login", "Signup"];
  const signup = selected ? true : false;
  const initialValues = signup
    ? { email: "", password: "", passwordConfirm: "" }
    : { email: "", password: "" };
  const validationSchema = signup ? signupSchema : loginSchema;

  return (
    <View style={styles.loginContainer}>
      <AppTab tabs={tabs} selected={selected} setSelected={setSelected} />
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Username"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        {signup && (
          <>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="passwordConfirm"
              placeholder="Confirm Password"
              secureTextEntry
              textContentType="password"
            />
          </>
        )}
        <SubmitButton title="Submit" />
        {!signup && (
          <TouchableOpacity>
            <Text style={{ color: colors.accent }}>Forgot your password?</Text>
          </TouchableOpacity>
        )}
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
    width: "100%",
  },
});

export default AppLogin;
