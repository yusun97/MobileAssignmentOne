import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import Buttons from "./Buttons";

export default function PhoneErrorNoice({ phone }) {
  if (phone.length < 10 || isNaN(phone)) return null;
  return <Text style={styles.error}>Please enter a valid phone number</Text>;
}

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    padding: 10,
  },
});
