import { View, Text, Button } from "react-native";
import React from "react";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Details")}
        title="Go To Details"
      />
    </View>
  );
}

export default HomeScreen;
