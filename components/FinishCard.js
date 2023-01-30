import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text, Image } from "react-native";
import Card from "../components/Card";

export default function FinishCard({ cardType, enteredPhone }) {
  let num = enteredPhone.charAt(enteredPhone.length - 1);
  // console.log(num);
  if (cardType === "yes") {
    return (
      <Card>
        <Text style={styles.content}>
          Thank you for signing up. Here's a picture for you(based on you last
          digit of your phone number)
        </Text>
        <Image
          source={{
            uri: "https://picsum.photos/id/4/100/100",
          }}
          style={styles.picture}
        />
      </Card>
    );
  }
  if (cardType === "no") {
    return (
      <Card>
        <Text style={styles.content}>Sorry to see you go.</Text>
        <Image source={require("../emoji.png")} style={styles.picture} />
      </Card>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
  picture: {
    height: 50,
    width: 50,
  },
});
