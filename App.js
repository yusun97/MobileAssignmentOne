import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Starting from "./screens/Starting";
import Confirm from "./screens/Confirm";
import Finish from "./screens/Finish";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./components/Card";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["lightskyblue", "darkslateblue"]}
    >
      <StatusBar style="auto" />

      <Starting />
      {/* <Confirm /> */}
      {/* <Finish type="no" /> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
