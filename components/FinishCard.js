import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text, Image } from "react-native";
import Input from "./Input";
import Buttons from "./Buttons";

export default function FinishCard({cardType}) {
  if (cardType === "yes") {
    return (
      <View style={styles.card}>
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
      </View>
    );
  } else if (cardType === "no") {
    return (
      <View style={styles.card}>
        <Text style={styles.content}>Sorry to see you go.</Text>
        <Image source={require("../emoji.png")} style={styles.picture} />
      </View>
    );
  }
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
  picture: {
    height: 50,
    width: 50,
  },
});
