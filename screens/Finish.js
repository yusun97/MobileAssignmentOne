import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FinishCard from "../components/FinishCard";
import Card from "../components/Card";
import Buttons from "../components/Buttons";

export default function Finish() {
  return (
    <View style={styles.container}>
      {/* <Card cardType={"finishNo"} /> */}
      <FinishCard cardType={"yes"} />
      <Buttons buttonName={"Start Again"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0,
  },
});
