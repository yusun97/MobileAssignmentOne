import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import Input from "./Input";
import Buttons from "./Buttons";
import ComfirmCard from "../components/ConfirmCard";

export default function Card() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  // const [confirmVisible, setConfirmVisible] = useState();

  // function confirmVisibleHandle() {
  //   setConfirmVisible(true);
  // }

  function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
  }

  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
  }

  return (
    <View style={styles.card}>
      <Input
        sendChangedEmail={onEmailEntered}
        sendChangedPhone={onPhoneEntered}
      />
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
});
