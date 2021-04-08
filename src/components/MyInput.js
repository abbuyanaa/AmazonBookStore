import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={[styles.inputField, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
  },
});
