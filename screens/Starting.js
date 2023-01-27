import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingCard from "../components/StartingCard";
import Header from "../components/Header";
import Input from "../components/Input";

// two Texts, two TextInputs and two Buttons (Reset and Sign up).

export default function Starting() {
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
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
});
