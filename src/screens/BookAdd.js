import React, { useState } from "react";
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
import { Switch } from "react-native-paper";
import FormSwitch from "../components/FormSwitch";

const BookAdd = () => {
  const [book, setBook] = useState({
    name: "Элон Маск",
    author: "Ашли Ванс",
    price: "20000",
    content:
      "Алон маскийн амьдрал, бизнесийн салбарын хэрхэн оргилд хүрсэн тухай гайхалтай түүхийг өөрийнх нь сэдэвлэн бичсэн гайхалтай ном.",
    bestseller: "Бестсэллэр мөн",
  });

  const [error, setError] = useState({
    name: false,
    author: false,
    price: false,
    content: false,
  });

  const checkName = (text) => {
    setError({
      ...error,
      name: text.length < 5 || text.length > 20,
    });
    setBook({ ...book, name: text });
  };

  const checkAuthor = (text) => {
    setBook({ ...book, author: text });
  };

  const checkPrice = (text) => {
    setError({
      ...error,
      price: text < 1000,
    });
    setBook({ ...book, price: text });
  };

  const checkContent = (text) => {
    setBook({ ...book, content: text });
  };

  const toggleBestseller = () => {
    setBook({
      ...book,
      bestseller:
        book.bestseller === "Бестсэллэр мөн"
          ? "Бестсэллэр биш"
          : "Бестсэллэр мөн",
    });
  };

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
            icon="book-open"
            value={book.name}
            onChangeText={checkName}
            errorText="Номын нэрийн урд тор хаяж 4 үсгээс тогтоно."
            errorShow={error.name}
          />
          <FormText
            label="Номын зохиогчийг оруулна уу"
            placeholder="Зохиогчийн нэр"
            icon="user"
            value={book.author}
            onChangeText={checkAuthor}
            errorText="Зохиогчийн нэрийн урт 5-15 үсгээс тогтоно."
            errorShow={error.author}
          />
          <FormText
            label="Номын үнийг оруулна уу"
            placeholder="Номын үнэ"
            icon="dollar-sign"
            value={book.price}
            onChangeText={checkPrice}
            errorText="Номын үнэ 1000 төгрөгөөс дээш байна."
            errorShow={error.price}
          />
          <FormText
            label="Номын тайлбарыг оруулна уу"
            placeholder="Номын тайлбар"
            style={{ fontSize: 10 }}
            icon="edit"
            multiline
            numberOfLines={5}
            value={book.content}
            onChangeText={checkContent}
            errorText="Номын тайлбар 10-1000 тэмдэгтээс тогтоно."
            errorShow={error.content}
          />
          <FormSwitch
            label="Бестсэллэр мөн эсэх"
            icon="trending-up"
            data={["Бестсэллэр мөн", "Бестсэллэр биш"]}
            value={book.bestseller}
            onValueChange={toggleBestseller}
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default BookAdd;

const styles = StyleSheet.create({});
