import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </SafeAreaView>
  );
}
