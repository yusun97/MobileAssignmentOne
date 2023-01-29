import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal } from "react-native";
import ConfirmCard from "../components/ConfirmCard";
import Card from "../components/StartingCard";
import { useState } from "react";
import Finish from "./Finish";
import { LinearGradient } from "expo-linear-gradient";

export default function Confirm({
  StartingSetconfirmVisible,
  enteredEmail,
  enteredPhone,
}) {
  const [confirmVisible, setConfirmVisible] = useState(false);

  function confirmDisappear() {
    setConfirmVisible(false);
  }

  function confirmShow() {
    setConfirmVisible(true);
  }

  return (
    <Modal visible={StartingSetconfirmVisible}>
      <StatusBar style="auto" />
      <LinearGradient
        style={styles.container}
        colors={["lightskyblue", "darkslateblue"]}
      >
        <ConfirmCard
          email={enteredEmail}
          phone={enteredPhone}
          confirmPressed={confirmDisappear}
        />
        {/* <Finish /> */}
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
});
