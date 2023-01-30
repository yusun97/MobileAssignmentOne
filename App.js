import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [screenShown, setScreenShown] = useState("starting");
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [finishType, setFinishType] = useState("");

  function onEmailEntered(changedEmail) {
    setEnteredEmail(changedEmail);
  }

  function onPhoneEntered(changedPhone) {
    setEnteredPhone(changedPhone);
  }

  function screenShownHandle(changedScreen) {
    setScreenShown(changedScreen);
  }

  function confirmVisibleHandle(changedConfirmVisible) {
    setConfirmVisible(changedConfirmVisible);
  }

  function onGoBack() {
    setConfirmVisible(false);
    setScreenShown("starting");
  }

  function onConfirm() {
    setConfirmVisible(false);
    setScreenShown("finish");
    setFinishType("yes");
  }

  function onFinishLater() {
    setConfirmVisible(false);
    setScreenShown("finish");
    setFinishType("no");
  }

  function onStartAgain() {
    setScreenShown("starting");
    setEnteredEmail("");
    setEnteredPhone("");
    setFinishType("");
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["lightskyblue", "darkslateblue"]}
    >
      <StatusBar style="auto" />
      {screenShown === "starting" && (
        <Starting
          sendChangedEmailToApp={onEmailEntered}
          sendChangedPhoneToApp={onPhoneEntered}
          sendConfirmVisibleToApp={confirmVisibleHandle}
          sendScreenShownToApp={screenShownHandle}
        />
      )}

      <Confirm
        email={enteredEmail}
        phone={enteredPhone}
        isVisible={confirmVisible}
        goBackPressed={onGoBack}
        confirmPressed={onConfirm}
        finishLaterPressed={onFinishLater}
      />

      {screenShown === "finish" && (
        <Finish
          type={finishType}
          phone={enteredPhone}
          startAgainPressed={onStartAgain}
        />
      )}
      <Text>from app.js {enteredEmail}</Text>
      <Text>from app.js {enteredPhone}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
