import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import GlobalStyles from "../style/GlobalStyles";

const CustomSafeArea = ({ children }) => {
  return (
    <SafeAreaView style={GlobalStyles.safeAreaStyles}>{children}</SafeAreaView>
  );
};

export default CustomSafeArea;
