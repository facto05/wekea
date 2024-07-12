import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate("Details", {
            itemId: "41",
          })
        }
        title="Go To Details"
      />
    </View>
  );
}
function DetailScreen({ route, navigation }) {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen {itemId}</Text>
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
