import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { mainColor, lightColor, textColor } from "../../Constants";
import FormText from "../components/FormText";
import * as Animatable from "react-native-animatable";

const BookAdd = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: mainColor }}>
      <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: mainColor,
        }}
      >
        <Text style={{ fontSize: 30, color: lightColor }}>
          Шинээр ном нэмэх
        </Text>
        <Text style={{ fontSize: 16, color: lightColor }}>
          Та номын мэдээллээ оруулна уу
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        duration={1000}
        style={{
          flex: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <ScrollView>
          <FormText
            label="Номын нэрийг оруулна уу"
            placeholder="Номын нэр"
            icon="edit"
          />
          <FormText
            label="Номын зохиогчийг оруулна уу"
            placeholder="Зохиогчийн нэр"
            icon="user"
          />
          <FormText
            label="Номын үнийг оруулна уу"
            placeholder="Номын үнэ"
            icon="dollar-sign"
          />
          <FormText
            label="Номын тайлбарыг оруулна уу"
            placeholder="Номын тайлбар"
            style={{ fontSize: 12 }}
            icon="edit"
            multiline
            numberOfLines={10}
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default BookAdd;

const styles = StyleSheet.create({});
