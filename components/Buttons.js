import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";

export default function Buttons({ buttonName, action }) {
  let colorEnter = "blue";
  if (buttonName === "Reset" || buttonName === "Go Back") {
    colorEnter = "red";
  }

  return (
    <View>
      <Button color={colorEnter} title={buttonName} onPress={action} />
    </View>
  );
}
