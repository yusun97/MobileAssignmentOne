import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import Buttons from "./Buttons";
import PhoneErrorNotice from "./PhoneErrorNoice";

export default function Input({
  sendChangedEmail,
  sendChangedPhone,
  sendConfirmVisible,
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function changeEmailHandle(changedEmail) {
    setEmail(changedEmail);
  }

  function changePhoneHandle(changedPhone) {
    setPhone(changedPhone);
  }

  function resetHandle() {
    setEmail("");
    setPhone("");
  }

  function validation() {
    sendChangedEmail(email);
    sendChangedPhone(phone);
    sendConfirmVisible(true);
  }

  return (
    <View>
      <Text style={styles.contentTitle}>Email Address</Text>
      <TextInput
        value={email}
        textAlign={"center"}
        style={styles.input}
        onChangeText={changeEmailHandle}
      />
      <Text style={styles.error}>emailError</Text>

      <Text style={styles.contentTitle}>Phone Number</Text>
      <TextInput
        value={phone}
        textAlign={"center"}
        style={styles.input}
        onChangeText={changePhoneHandle}
      />

      {/* <Text style={styles.error}>phoneError</Text> */}
      <PhoneErrorNotice enteredPhone={phone} />

      <View style={styles.buttonContain}>
        <Buttons buttonName={"Reset"} action={resetHandle} />
        <Buttons buttonName={"Sign Up"} action={validation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentTitle: {
    color: "darkslateblue",
    width: 200,
    fontSize: 20,
  },
  input: {
    fontWeight: "bold",
    color: "darkslateblue",
    width: 200,
    borderBottomWidth: 2,
    fontSize: 15,
    justifyContent: "center",
    borderBottomColor: "darkslateblue",
    padding: 10,
  },
  error: {
    fontSize: 10,
    padding: 10,
  },
  buttonContain: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
