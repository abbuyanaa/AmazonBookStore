import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { mainColor } from "../../Constants";
import HomeScreen from "./../screens/HomeScreen";

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: mainColor },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 22 },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Амазон номын дэлгүүр" }}
      />
    </Stack.Navigator>
  );
};
