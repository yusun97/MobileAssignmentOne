import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";

export default function Starting({
  sendChangedEmailToApp,
  sendChangedPhoneToApp,
  sendConfirmVisibleToApp,
  sendScreenShownToApp,
}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header headerEntered={"Sign Up"} />
      <Card>
        <Input
          sendChangedEmail={sendChangedEmailToApp}
          sendChangedPhone={sendChangedPhoneToApp}
          sendConfirmVisible={sendConfirmVisibleToApp}
          sendScreenShown={sendScreenShownToApp}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
