import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React from "react";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        gap: 20,
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <Text>Home Screen</Text>
      <TextInput label="Email" />
      <Button onPress={() => navigation.navigate("Details")} mode="contained">
        Button Paper
      </Button>
    </View>
  );
}

export default HomeScreen;
