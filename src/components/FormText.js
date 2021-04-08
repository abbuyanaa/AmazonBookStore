import React from "react";
import { Platform, StyleSheet, View, TextInput, Text } from "react-native";
import { textColor } from "../../Constants";
import { Feather } from "@expo/vector-icons";

const FormText = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 16, paddingTop: 35, color: textColor }}>
        {props.label}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          borderBottomColor: "#f2f2f2",
          borderBottomWidth: 1,
          paddingBottom: 5,
        }}
      >
        <Feather name={props.icon} size={20} color={textColor} />
        <TextInput
          {...props}
          style={{
            paddingLeft: 10,
            color: textColor,
            flex: 1,
            marginTop: Platform.OS === "ios" ? 0 : -3,
            ...props.style,
          }}
        />
      </View>
    </View>
  );
};

export default FormText;

const styles = StyleSheet.create({});
