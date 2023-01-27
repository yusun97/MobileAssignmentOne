import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FinishCard from "../components/FinishCard";

export default function Finish() {
  return (
    <View style={styles.container}>
      <FinishCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
