import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const SignupScreen = ({ route, navigation }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = () => {
    navigation.push("Login", {
      phone,
      password,
      garchig: "Таны нууц үг дээр байна",
    });
  };

  const phone1 = route.params ? route.params.phone : "no";
  const password1 = route.params ? route.params.phone : "no";
  const name = route.params ? route.params.phone : "no";

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

      <MyInput
        secureTextEntry={true}
        placeholder="Нууц үгээ давтан оруулна уу"
        onChangeText={setPassword}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <MyButton title="Бүртгүүлэх" onPress={signupHandler} />
        <MyButton title="Буцах" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
