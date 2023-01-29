import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import Input from "./Input";
import Buttons from "./Buttons";
import ComfirmCard from "../components/ConfirmCard";

export default function StartingCard({
  startingScreenSetConfirm,
  startingScreenSetEmail,
  startingScreenSetPhone,
}) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [confirmVisible, setConfirmVisible] = useState(false);

  function confirmVisibleHandle(changedConfirmVisible) {
    setConfirmVisible(changedConfirmVisible);
    startingScreenSetConfirm(changedConfirmVisible);
  }

  function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
    startingScreenSetEmail(changedEmail);
  }

  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
    startingScreenSetPhone(changedPhone);
  }

  return (
    <View style={styles.card}>
      <Input
        sendChangedEmail={onEmailEntered}
        sendChangedPhone={onPhoneEntered}
        sendConfirmIsVisible={confirmVisibleHandle}
      />
      <Text>parentEmail: {enteredEmail}</Text>
      <Text>parentPhone:{enteredPhone}</Text>
      <Text>parentConfirm: {String(confirmVisible)}</Text>
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
