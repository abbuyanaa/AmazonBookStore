import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStackNavigator from "./src/navigation/MyStackNavigator";

function App() {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
}

export default App;
