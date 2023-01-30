import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import FinishCard from "../components/FinishCard";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import FinishCard from "../components/FinishCard";

export default function Finish({ type }) {
  return (
    <View style={styles.container}>
      <FinishCard cardType={type} />
      <Buttons buttonName={"Start Again"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
});
