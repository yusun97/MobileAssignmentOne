import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";

export default function Input(sendChangedEmail, sendChangedPhone) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);

  function changeEmailHandle(changedEmail) {
    setEmail(changedEmail);
  }

  function changePhoneHandle(changedPhone) {
    setPhone(changedPhone);
  }

  function emailVaidHandle() {
    if (email.includes("@") && email.includes(".")) {
      setEmailValid(true);
      setEmailError("");
    } else {
      setEmailValid(false);
      setEmailError("Please enter a valid email address");
    }
  }

  function phoneVaidHandle() {
    if (phone.length >= 10 && !isNaN(phone)) {
      setPhoneValid(true);
      setPhoneError("");
    } else {
      setPhoneValid(false);
      setPhoneError("Please enter a valid phone number");
    }
  }

  function validation() {
    emailVaidHandle();
    phoneVaidHandle();
    if (emailValid && phoneValid) {
      sendInformation();
    }
  }

  function sendInformation() {
    sendChangedEmail(email);
    sendChangedPhone(phone);
  }

  function resetHandle() {
    setEmail("");
    setPhone("");
    setEmailError("");
    setPhoneError("");
  }

  return (
    <View>
      <Text style={styles.contentTitle}>Email Address</Text>
      <TextInput
        value={email}
        style={styles.input}
        onChangeText={changeEmailHandle}
      />
      <Text style={styles.error}>{emailError}</Text>

      <Text style={styles.contentTitle}>Phone Number</Text>
      <TextInput
        value={phone}
        style={styles.input}
        onChangeText={changePhoneHandle}
      />
      <Text style={styles.error}>{phoneError}</Text>
      <View style={styles.buttonContain}>
        <Button title="Reset" onPress={resetHandle} />
        <Button title="Sign Up" onPress={validation} />
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
    borderColor: "#777",
    width: 200,
    borderBottomWidth: 2,
    fontSize: 15,
    borderBottomColor: "darkslateblue",
    padding: 10,
  },
  error: {
    fontSize: 30,
    padding: 10,
  },
  buttonContain: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
