import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import { commonStyles } from "../components/commonStyles ";

export default function Finish({ type, phone, startAgainPressed }) {
  let num = phone.charAt(phone.length - 1);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {type === "yes" && (
        <Card>
          <Text style={commonStyles.content}>
            Your phone number is {phone}. The last digit of you phone number is{" "}
            {num}.
          </Text>
          <Text style={commonStyles.content}>
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
      )}

      {type === "no" && (
        <Card>
          <Text style={styles.content}>Sorry to see you go.</Text>
          <Image source={require("../emoji.png")} style={styles.picture} />
        </Card>
      )}

      <Buttons buttonName={"Start Again"} action={startAgainPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
    // borderWidth: 0,
  },
  picture: {
    height: 50,
    width: 50,
  },
});
