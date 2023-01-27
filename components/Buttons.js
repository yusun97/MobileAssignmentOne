import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import Input from "./Input";

export default function Buttons({ buttonName }) {
  let colorEnter = "blue";
  if (buttonName === "Reset" || buttonName === "Go Back") {
    colorEnter = "red";
  }

  return (
    <View>
      <Button color={colorEnter} title={buttonName} />
    </View>
  );
}
