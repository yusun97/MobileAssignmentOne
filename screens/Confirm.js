import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import Card from "../components/Card";
import { useState } from "react";
import Finish from "./Finish";
import { LinearGradient } from "expo-linear-gradient";
import Buttons from "../components/Buttons";

export default function Confirm({
  email,
  phone,
  isVisible,
  goBackPressed,
  confirmPressed,
}) {
  // const [confirmVisible, setConfirmVisible] = useState(false);

  // function confirmVisibleHandle(changedConfirmVisible) {
  //   setConfirmVisible(changedConfirmVisible);
  // }

  return (
    <Modal visible={isVisible}>
      <StatusBar style="auto" />
      <LinearGradient
        style={styles.container}
        colors={["lightskyblue", "darkslateblue"]}
      >
        <Card>
          <Text style={styles.content}>You have entered: </Text>
          <Text style={styles.content}>
            {email} and {phone}
          </Text>
          <Text style={styles.content}>Please confirm they are correct.</Text>
          <Buttons buttonName="Go Back" actionNeeded={goBackPressed} />
          <Buttons buttonName="Confirm" actionNeeded={confirmPressed} />
          <Buttons buttonName="Finish Later" />
        </Card>
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
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
