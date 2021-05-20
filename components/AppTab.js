import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import colors from "../config/colors";

function AppTab({ tabs, selected, setSelected }) {
  return (
    <View style={styles.row}>
      <FlatList
        data={tabs}
        keyExtractor={(tab, index) => index.toString()}
        numColumns={tabs.length}
        renderItem={(tab) => {
          const tabStyle =
            tab.index === selected ? styles.tabSelected : styles.tab;
          const textStyle =
            tab.index === selected ? styles.textSelected : styles.text;

          return (
            <View style={tabStyle}>
              <Text style={textStyle} onPress={() => setSelected(tab.index)}>
                {tab.item}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    marginBottom: 20,
  },
  tab: {
    alignItems: "center",
    backgroundColor: colors.light,
    justifyContent: "center",
    width: "50%",
    paddingVertical: 10,
  },
  tabSelected: {
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
    width: "50%",
    paddingVertical: 10,
  },
  text: {
    color: colors.faded,
    fontSize: 30,
    width: "100%",
    textAlign: "center",
  },
  textSelected: {
    color: colors.primary,
    fontSize: 30,
  },
});

export default AppTab;
