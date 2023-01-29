import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";

export default function Input({
  sendChangedEmail,
  sendChangedPhone,
  sendConfirmIsVisible,
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  //   const [confirmVisible, setConfirmVisible] = useState(false);
  //   let emailValidTest = false;
  //   let phoneValidTest = false;
  //   let emailErrorTest = "original";
  //   let phoneErrorTest = "";

  function changeEmailHandle(changedEmail) {
    setEmail(changedEmail);
  }

  function changePhoneHandle(changedPhone) {
    setPhone(changedPhone);
  }

  function emailValidHandle() {
    if (email.includes("@") && email.includes(".")) {
      setEmailValid(true);
      setEmailError("");
      //   emailValidTest = true;
    } else {
      setEmailValid(false);
      setEmailError("Please enter a valid email address");
      //   emailValidTest = false;
      //   emailErrorTest = "Please enter a valid email address";
    }
  }

  function phoneValidHandle() {
    if (phone.length === 10 && !isNaN(phone)) {
      setPhoneValid(true);
      setPhoneError("");
      //   phoneValidTest = true;
    } else {
      setPhoneValid(false);
      setPhoneError("Please enter a valid phone number");
    }
  }

  function validation() {
    // emailValidHandle(); //valid the email
    // phoneValidHandle(); //valid the phone number
    // console.log("email:" + emailValid);
    // console.log("phone:" + phoneValid);
    // when both valid
    // if (emailValid && phoneValid) {
    //   sendInformation();
    //     setConfirmVisible(true);
    //   sendConfirmIsVisible(true);
    // }
    sendInformation();
    sendConfirmIsVisible(true);
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
        textAlign={"center"}
        style={styles.input}
        onChangeText={changeEmailHandle}
      />
      <Text style={styles.error}>{emailError}</Text>
      {/* {console.log("return console log:" + emailErrorTest)} */}

      <Text style={styles.contentTitle}>Phone Number</Text>
      <TextInput
        value={phone}
        textAlign={"center"}
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
