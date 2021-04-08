import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { textColor } from "../../Constants";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Switch, TouchableRipple } from "react-native-paper";

const FormSwitch = (props) => {
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            paddingLeft: 10,
          }}
        >
          <TouchableRipple onPress={props.onValueChange}>
            <Text style={{ color: textColor, marginTop: 3 }}>
              {props.value}
            </Text>
          </TouchableRipple>
          <Switch
            value={props.value === props.data[0] ? true : false}
            onValueChange={props.onValueChange}
          />
        </View>
      </View>
    </View>
  );
};

export default FormSwitch;

const styles = StyleSheet.create({});
