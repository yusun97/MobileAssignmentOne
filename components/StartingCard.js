import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import Input from "./Input";
import Buttons from "./Buttons";

export default function Card() {
  return (
    <View style={styles.card}>
      <Input signContent={"Email Address"} />
      <Input signContent={"Phone Number"} />

      <View style={styles.buttonContain}>
        <Buttons buttonName={"Reset"} />
        <Buttons buttonName={"Sign Up"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "darkgray",
  },
  buttonContain: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
