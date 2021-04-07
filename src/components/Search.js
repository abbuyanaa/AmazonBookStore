import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = ({ value, setSearchValue, onFinishEnter }) => {
  return (
    <View style={styles.searchPanel}>
      <Feather style={styles.searchIcon} name="search" color="#535C68" />
      <TextInput
        style={styles.searchText}
        placeholder="Xайх"
        placeholderTextColor="#DAE0E2"
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={setSearchValue}
        onEndEditing={onFinishEnter}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchPanel: {
    top: 15,
    height: 50,
    backgroundColor: "#99AAAB",
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: "row",
  },
  searchText: {
    color: "white",
    fontSize: 18,
    borderColor: "black",
    flex: 1,
  },
  searchIcon: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
