import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
// import { styles } from "./commonStyles ";

export default function PhoneErrorNoice({ enteredPhone }) {
  if (enteredPhone.length < 10 || isNaN(enteredPhone)) {
    return (
      <Text style={styles.content}>Please enter a valid phone number</Text>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    padding: 10,
  },
});
