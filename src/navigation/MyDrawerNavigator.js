import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import BookAdd from "../screens/BookAdd";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Нүүр" component={MyStackNavigator} />
    <Drawer.Screen name="Шинэ ном нэмэх" component={BookAdd} />
    <Drawer.Screen name="Бүртгүүлэх" component={SignupScreen} />
    <Drawer.Screen name="Логин" component={LoginScreen} />
  </Drawer.Navigator>
);
