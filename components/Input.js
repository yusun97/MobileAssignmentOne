import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import Buttons from "./Buttons";
import { commonStyles } from "./commonStyles ";

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

  const [emailErrorShown, setEmailErrorShown] = useState(false);
  const [phoneErrorShown, setPhoneErrorShown] = useState(false);
  function validate() {
    setEmailErrorShown(false);
    setPhoneErrorShown(false);

    let emailValid = true;
    let phoneValid = true;

    if (email.length < 3) {
      setEmailErrorShown(true);
      emailValid = false;
    }

    if (phone.length < 3) {
      setPhoneErrorShown(true);
      phoneValid = false;
    }

    if (phoneValid && emailValid) {
      sendChangedEmail(email);
      sendChangedPhone(phone);
      sendConfirmVisible(true);
    }
    // let regEmail =
    //   /^[a-zA-Z\d]+([-_\.][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,4}$/;
    // if (!regEmail.test(email)) {
    //   emailIsValid = false;
    // }
  }

  function resetHandle() {
    setEmail("");
    setPhone("");
    setEmailErrorShown(false);
    setPhoneErrorShown(false);
  }

  return (
    <View>
      <Text style={[commonStyles.content, styles.contentTitle]}>
        Email Address
      </Text>
      <TextInput
        value={email}
        textAlign={"center"}
        style={[
          commonStyles.borderBottomColorUsed,
          commonStyles.colorUsed,
          styles.input,
        ]}
        onChangeText={changeEmailHandle}
      />
      {emailErrorShown && (
        <Text style={styles.error}>Please enter a valid email</Text>
      )}

      <Text
        style={[
          commonStyles.content,
          commonStyles.colorUsed,
          styles.contentTitle,
        ]}
      >
        Phone Number
      </Text>
      <TextInput
        value={phone}
        textAlign={"center"}
        style={[
          commonStyles.borderBottomColorUsed,
          commonStyles.colorUsed,
          styles.input,
        ]}
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
    width: 200,
    padding: 10,
  },
  input: {
    fontWeight: "bold",
    width: 200,
    borderBottomWidth: 2,
    fontSize: 15,
    justifyContent: "center",
    padding: 10,
    marginBottom: 25,
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
