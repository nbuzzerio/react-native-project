import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "./AppButton";
import AppTab from "./AppTab";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
import ErrorMessage from "./ErrorMessage";

const signupSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
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
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              placeholder="Username"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            {signup && (
              <>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  onBlur={() => setFieldTouched("passwordConfirm")}
                  onChangeText={handleChange("passwordConfirm")}
                  placeholder="Confirm Password"
                  secureTextEntry
                  textContentType="password"
                />
                <ErrorMessage
                  error={errors.passwordConfirm}
                  visible={touched.passwordConfirm}
                />
              </>
            )}
            <AppButton onPress={handleSubmit} title="Submit" />
            {!signup && (
              <TouchableOpacity>
                <Text style={{ color: colors.accent }}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            )}
          </>
        )}
      </Formik>
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
