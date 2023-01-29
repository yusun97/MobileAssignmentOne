import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal } from "react-native";
import ConfirmCard from "../components/ConfirmCard";
import Card from "../components/StartingCard";

export default function Confirm() {
  return (
    <Modal visible={true} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ConfirmCard />
      </View>
    </Modal>
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <ConfirmCard />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    backgroundColor: "lightblue",
  },
});
