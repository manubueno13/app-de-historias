import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./bottomTab"
import StoryScreen from "../pages/StoryScreen"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tela Inicial" component={BottomTabNavigator} />
      <Stack.Screen name="Tela de Histórias" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;