import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import Confirm from "./Confirm";
import Finish from "./Finish";

export default function Starting() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [finishVisible, setFinishVisible] = useState(false);
  const [finishType, setFinishType] = useState("");

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
    setFinishVisible(true);
    setFinishType("yes");
  }

  function onFinishLater() {
    // console.log("finish later pressed");
    setConfirmVisible(false);
    setFinishVisible(true);
    setFinishType("no");
  }

  function onStartAgain() {
    setFinishVisible(false);
    // setEnteredEmail("");
    // setEnteredPhone("");
  }

  function resetHandle(){
    
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

      <Finish
        phone={enteredPhone}
        type={finishType}
        isVisible={finishVisible}
        startAgainPressed={onStartAgain}
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
