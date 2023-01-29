import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import Input from "./EmailInput";

export default function Buttons({ buttonName, actionNeeded }) {
  let colorEnter = "blue";
  if (buttonName === "Reset" || buttonName === "Go Back") {
    colorEnter = "red";
  }

  return (
    <View>
      <Button color={colorEnter} title={buttonName} onPress={actionNeeded} />
    </View>
  );
}
