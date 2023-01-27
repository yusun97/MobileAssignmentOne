import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import Input from "./Input";
import Buttons from "./Buttons";

export default function ConfirmCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>You have entered: </Text>
      <Text style={styles.content}>xxxEmail and xxxxNumber</Text>
      <Text style={styles.content}>Please confirm they are correct.</Text>
      <Buttons buttonName={"Go Back"} />
      <Buttons buttonName={"Confirm"} />
      <Buttons buttonName={"Finish Later"} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "darkgray",
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
