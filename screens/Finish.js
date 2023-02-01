import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import { commonStyles } from "../components/commonStyles ";

export default function Finish({ type, phone, startAgainPressed }) {
  let num = phone.charAt(phone.length - 1);
  let link = "https://picsum.photos/id/" + num + "/100/100";
  return (
    <View style={[commonStyles.genericContainer, styles.container]}>
      <StatusBar style="auto" />
      {type === "yes" && (
        <Card>
          <Text style={commonStyles.content}>
            Thank you for signing up. Here's a picture for you(based on you last
            digit of your phone number)
          </Text>
          <Image source={{ uri: link }} style={styles.picture} />
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
    marginTop: 60,
  },
  picture: {
    height: 50,
    width: 50,
  },
});
