import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, Button } from "react-native";
import Card from "../components/Card";
import { useState } from "react";
import Finish from "./Finish";
import { LinearGradient } from "expo-linear-gradient";
import Buttons from "../components/Buttons";
import { commonStyles } from "../components/commonStyles ";

export default function Confirm({
  email,
  phone,
  isVisible,
  goBackPressed,
  confirmPressed,
  finishLaterPressed,
}) {
  return (
    <Modal visible={isVisible}>
      <StatusBar style="auto" />
      <LinearGradient
        style={commonStyles.centerContainer}
        colors={["lightskyblue", "darkslateblue"]}
      >
        <Card>
          <Text style={commonStyles.content}>You have entered: </Text>
          <Text style={commonStyles.content}>
            {email} and {phone}
          </Text>
          <Text style={commonStyles.content}>
            Please confirm they are correct.
          </Text>
          <Buttons buttonName="Go Back" action={goBackPressed} />
          <Buttons buttonName="Confirm" action={confirmPressed} />
          <Buttons buttonName="Finish Later" action={finishLaterPressed} />
        </Card>
      </LinearGradient>
    </Modal>
  );
}
