import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import AppTextInput from "./AppTextInput";

function AppBanner({ onNavPress }) {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <View style={styles.banner}>
      <TouchableWithoutFeedback onPress={onNavPress}>
        <FontAwesome5
          name={"bars"}
          size={30}
          color={colors.white}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      {isSearching && (
        <View style={styles.search}>
          <AppTextInput
            icon="magnify"
            placeholder="Case # / Addr / City / ZIP"
            onChangeText={(query) => {
              setQuery(query);
            }}
            onEndEditing={() => {
              setQuery("");
            }}
            returnKeyType="search"
            value={query}
            style={{ fontSize: 14, color: colors.dark }}
          />
          <Text style={{ color: colors.white, paddingHorizontal: 15 }}>
            Filter
          </Text>
        </View>
      )}
      {!isSearching && (
        <>
          <Image
            style={styles.logo}
            source={require("../assets/visneta-white.png")}
          />
          <TouchableWithoutFeedback onPress={() => setIsSearching(true)}>
            <MaterialCommunityIcons
              name={"magnify"}
              size={40}
              color={colors.accent}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        </>
      )}
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
    marginLeft: 10,
    width: "39%",
    backgroundColor: colors.primary,
  },
  icon: {
    paddingTop: 5,
  },
  search: {
    width: "70%",
    height: "1000%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppBanner;
