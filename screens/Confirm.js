import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ConfirmCard from "../components/ConfirmCard";

export default function Starting() {
  return (
    <View style={styles.container}>
      <ConfirmCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
  },
});
