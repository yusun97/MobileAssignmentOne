import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingCard from "../components/StartingCard";
import Header from "../components/Header";
import { useState } from "react";
import Input from "../components/EmailInput";
import Card from "../components/Card";

export default function Starting() {
  const [confirmVisible, confirmVisibleHandle] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header headerEntered={"Sign Up"} />
      <StartingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
    borderWidth: 0,
  },
});
