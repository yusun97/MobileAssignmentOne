import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  Modal,
  Image,
} from "react-native";
import Input from "./EmailInput";
import Buttons from "./Buttons";

export default function Card({ cardType }) {
  const [enteredText, setEnteredText] = useState();
  const [notice, setNotice] = useState();
  const [confirmVisible, setConfirmVisible] = useState();

  //   function confirmVisibleHandle() {
  //     setConfirmVisible(true);
  //   }

  if (cardType === "starting") {
    return (
      <View style={styles.card}>
        <Input signContent={"Email Address"} />
        <Input signContent={"Phone Number"} />

        <View style={styles.buttonContain}>
          <Buttons buttonName={"Reset"} />
          <Buttons buttonName={"Sign Up"} />
        </View>
      </View>
    );
  } else if (cardType === "confirm") {
    return (
      <Modal visible={false} style={styles.card}>
        <View style={styles.card}>
          <Text style={styles.content}>You have entered: </Text>
          <Text style={styles.content}>xxxEmail and xxxxNumber</Text>
          <Text style={styles.content}>Please confirm they are correct.</Text>
          <Buttons buttonName={"Go Back"} />
          <Buttons buttonName={"Confirm"} />
          <Buttons buttonName={"Finish Later"} />
        </View>
      </Modal>
    );
  } else if (cardType === "finishYes") {
    return (
      <View style={styles.card}>
        <Text style={styles.content}>
          Thank you for signing up. Here's a picture for you(based on you last
          digit of your phone number)
        </Text>
        <Image
          source={{
            uri: "https://picsum.photos/id/4/100/100",
          }}
          style={styles.picture}
        />
      </View>
    );
  } else if (cardType === "finishNo") {
    return (
      <View style={styles.card}>
        <Text style={styles.content}>Sorry to see you go.</Text>
        <Image source={require("../emoji.png")} style={styles.picture} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    padding: 20,
    margin: 10,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContain: {
    flexDirection: "row",
    justifyContent: "center",
  },
  picture: {
    height: 50,
    width: 50,
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
});
