import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("Hi");

  const onSearch = () => {
    console.log("Search ehellee...");
  };

  return (
    <View>
      <Search
        value={searchValue}
        setSearchValue={setSearchValue}
        onFinishEnter={onSearch}
      />
      <Text style={{ top: 20, marginHorizontal: 20 }}>
        Хайсан утга: {searchValue}
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
