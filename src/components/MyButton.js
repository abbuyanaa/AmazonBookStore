import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function ({ title, onPress, style }) {
  return (
    <View style={[styles.button, style]}>
      <Button title={title} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
});
