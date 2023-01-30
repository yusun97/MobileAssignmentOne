import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import Buttons from "./Buttons";

export default function PhoneErrorNoice({ enteredPhone }) {
  //   console.log(enteredPhone);
  //   console.log(enteredPhone.length);
  if (enteredPhone.length >= 10 || enteredPhone.length === 0) {
    return null;
  }
  return <Text style={styles.error}>Please enter a valid phone number</Text>;
}

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    padding: 10,
  },
});
