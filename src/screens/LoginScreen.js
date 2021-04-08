import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const LoginScreen = ({ route, navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    navigation.push("Login", {
      phone,
      password,
      garchig: "Таны нууц үг дээр байна",
    });
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../../assets/images/shop.png")}
      />

      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 10 }}>
        Шинээр хэрэглэгч үүсгэх
      </Text>

      <MyInput
        askeyboardType="number-pad"
        placeholder="та имэйл хаягаа оруулна уу"
        onChangeText={setPhone}
      />

      <MyInput
        secureTextEntry={true}
        placeholder="Нууц үгээ оруулна уу"
        onChangeText={setPassword}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyButton title="Буцах" onPress={() => navigation.goBack()} />
        <MyButton title="Нэвтрэх" onPress={loginHandler} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
