import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import FinishCard from "../components/FinishCard";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import { LinearGradient } from "expo-linear-gradient";

export default function Finish({ type, isVisible, phone, startAgainPressed }) {
  return (
    <Modal visible={isVisible}>
      <LinearGradient
        style={styles.container}
        colors={["lightskyblue", "darkslateblue"]}
      >
        <FinishCard cardType={type} enteredPhone={phone} />
        <Buttons buttonName={"Start Again"} action={startAgainPressed} />
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop: 60,
    justifyContent: "center",
    borderWidth: 0,
  },
});
