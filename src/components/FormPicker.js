import React from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
import { textColor } from "../../Constants";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const FormPicker = (props) => {
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
        <Picker
          selectedValue={props.value}
          onValueChange={props.onValueChange}
          style={{ flex: 1 }}
          itemStyle={{ color: textColor, fontSize: 16 }}
        >
          {props.data.map((category, index) => (
            <Picker.Item
              key={index}
              label={category}
              value={props.values[index]}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
