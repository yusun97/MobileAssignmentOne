import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text, Modal } from "react-native";
import Input from "./EmailInput";
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
    borderWidth: 0,
    padding: 20,
    margin: 10,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
