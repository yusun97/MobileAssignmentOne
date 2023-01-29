import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingCard from "../components/StartingCard";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/EmailInput";
import Card from "../components/Card";
import Confirm from "./Confirm";

export default function Starting() {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function changeEmailHandle(changedEmail) {
    setEmail(changedEmail);
  }

  function changePhoneHandle(changedPhone) {
    setPhone(changedPhone);
  }

  function confirmVisibleHandle(changedConfirmVisible) {
    setConfirmVisible(changedConfirmVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header headerEntered={"Sign Up"} />
      <StartingCard
        startingScreenSetConfirm={confirmVisibleHandle}
        startingScreenSetEmail={changeEmailHandle}
        startingScreenSetPhone={changePhoneHandle}
      />
      <Confirm
        StartingSetconfirmVisible={confirmVisible}
        enteredEmail={email}
        enteredPhone={phone}
      />
      <Text>starting screen {String(confirmVisible)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    borderWidth: 0,
  },
});
