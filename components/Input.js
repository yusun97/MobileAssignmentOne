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

  // function validation() {
  // let regEmail =
  //   /^[a-zA-Z\d]+([-_\.][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,4}$/;
  // if (regEmail.test(email) && phone.length === 10 && !isNaN(phone)) {
  // sendChangedEmail(email);
  // sendChangedPhone(phone);
  // sendConfirmVisible(true);
  // } else {
  //   console.log("The information is not valid");
  // }
  // }

  // let emailIsValid = true;
  // let phoneIsValid = true;
  let emailErrorShown;
  let phoneErrorShown;
  function validate() {
    emailErrorShown = false;
    phoneErrorShown = false;

    if (email.length < 3) {
      emailErrorShown = true;
    }

    if (phone.length < 3) {
      phoneErrorShown = true;
    }

    console.log("emailErrorShown: " + emailErrorShown);
    console.log("phoneErrorShown: " + phoneErrorShown);

    if (phoneErrorShown == false && emailErrorShown == false) {
      sendChangedEmail(email);
      sendChangedPhone(phone);
      sendConfirmVisible(true);
    }
    // let regEmail =
    //   /^[a-zA-Z\d]+([-_\.][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,4}$/;
    // if (!regEmail.test(email)) {
    //   emailIsValid = false;
    // }
    // if (email.length < 3) {
    //   emailIsValid = false;
    // }
    // if (phone.length < 3 || isNaN(phone)) {
    //   phoneIsValid = false;
    // }
    // console.log("emailIsValid " + emailIsValid);
    // console.log("phoneIsValid " + phoneIsValid);
    // if (phoneIsValid && emailIsValid) {
    //   sendChangedEmail(email);
    //   sendChangedPhone(phone);
    //   sendConfirmVisible(true);
    // }
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
      {emailErrorShown && (
        <Text style={styles.error}>Please enter a valid email</Text>
      )}

      <Text style={styles.contentTitle}>Phone Number</Text>
      <TextInput
        value={phone}
        textAlign={"center"}
        style={styles.input}
        onChangeText={changePhoneHandle}
      />
      {phoneErrorShown && (
        <Text style={styles.error}>Please enter a valid phone number</Text>
      )}

      <View style={styles.buttonContain}>
        <Buttons buttonName={"Reset"} action={resetHandle} />
        <Buttons buttonName={"Sign Up"} action={validate} />
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
