import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStackNavigator from "./MyStackNavigator";

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Нүүр" component={MyStackNavigator} />
    <Drawer.Screen name="Бүртгүүлэх" component={MyStackNavigator} />
    <Drawer.Screen name="Логин" component={MyStackNavigator} />
  </Drawer.Navigator>
);
