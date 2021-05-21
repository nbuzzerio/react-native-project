import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../config/colors";

function AppDrawerNav({ userData, HomeScreen }) {
  const Drawer = createDrawerNavigator();

  const navList = userData.map(({ title, navIcon }, index) => {
    return (
      <Drawer.Screen
        key={index}
        name={title}
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              size={23}
              name={navIcon}
              color={colors.accent}
            ></FontAwesome5>
          ),
        }}
      />
    );
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={styles.drawer}
        drawerContentOptions={{
          activeTintColor: colors.primary,
          activeBackgroundColor: "grey",
          inactiveTintColor: colors.white,
          labelStyle: {
            marginLeft: 5,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                size={23}
                name={"map-signs"}
                color={colors.accent}
              ></FontAwesome5>
            ),
          }}
        />
        <Drawer.Screen
          name="Search"
          component={HomeScreen}
          options={{
            drawerIcon: () => (
              <FontAwesome5
                size={23}
                name={"search"}
                color={colors.accent}
              ></FontAwesome5>
            ),
          }}
        />
        {navList}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#2e2e2e",
    color: colors.white,
  },
});

export default AppDrawerNav;
