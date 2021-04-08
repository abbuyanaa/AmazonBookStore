import React, { useState, useLayoutEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";
import Search from "../components/Search";

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("Hi");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Цэс"
            iconName="ios-menu"
            onPress={() => alert("search")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

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
