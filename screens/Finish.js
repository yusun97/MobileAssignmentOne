import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import FinishCard from "../components/FinishCard";
import Card from "../components/Card";
import Buttons from "../components/Buttons";



export default function Finish({ type }) {
  if (type === "yes") {
    return (
      <View style={styles.container}>
        <Card>
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
        </Card>
        <Buttons buttonName={"Start Again"} />
      </View>
    );
  }
  if (type === "no") {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.content}>Sorry to see you go.</Text>
          <Image source={require("../emoji.png")} style={styles.picture} />
        </Card>
        <Buttons buttonName={"Start Again"} />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
  },
  content: {
    color: "darkslateblue",
    fontSize: 20,
  },
  picture: {
    height: 50,
    width: 50,
  },
});
