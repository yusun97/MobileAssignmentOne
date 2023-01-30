import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Confirm from "./Confirm";

export default function Starting() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [confirmVisible, setConfirmVisible] = useState(false);

  function confirmVisibleHandle(changedConfirmVisible) {
    setConfirmVisible(changedConfirmVisible);
  }

  function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
  }

  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
  }

  function onGoBack() {
    setConfirmVisible(false);
  }

  function onConfirm() {
    setConfirmVisible(false);
  }

  function onFinishLater() {
    setConfirmVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header headerEntered={"Sign Up"} />
      <Card>
        <Input
          sendChangedEmail={onEmailEntered}
          sendChangedPhone={onPhoneEntered}
          sendConfirmVisible={confirmVisibleHandle}
        />
        <Text>parentEmail: {enteredEmail}</Text>
        <Text>parentPhone:{enteredPhone}</Text>
        <Text>parentConfirm: {String(confirmVisible)}</Text>
      </Card>

      <Confirm
        email={enteredEmail}
        phone={enteredPhone}
        isVisible={confirmVisible}
        goBackPressed={onGoBack}
        confirmPressed={onConfirm}
        finishLaterPressed={onFinishLater}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: "center",
    borderWidth: 0,
  },
});
