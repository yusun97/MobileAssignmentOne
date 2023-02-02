import { StatusBar } from "expo-status-bar";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";
import { useState } from "react";
import LinearGradientBackground from "./components/LinearGradientBackground";

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
    <LinearGradientBackground>
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
    </LinearGradientBackground>
  );
}
