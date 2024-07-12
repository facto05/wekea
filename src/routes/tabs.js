import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/screen/home/HomeScreen";
import FavoriteScreen from "../views/screen/home/FavoriteScreen";

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Favorite" component={FavoriteScreen} />
    </Tabs.Navigator>
  );
}
