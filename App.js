import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes />
    </SafeAreaView>
  );
}
