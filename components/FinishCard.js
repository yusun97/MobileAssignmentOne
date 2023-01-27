import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text, Image } from "react-native";
import Input from "./Input";
import Buttons from "./Buttons";

export default function FinishCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>
        Thank you for signing up. Here's a picture for you(based on you last
        digit of your phone number)
      </Text>
      <Image source={require("../emoji.png")} style={styles.emoji} />
      <Text style={styles.content}>Sorry to see you go.</Text>
      <Buttons buttonName={"Start Again"} />
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
  emoji: {
    height: 50,
    width: 50,
  },
});
