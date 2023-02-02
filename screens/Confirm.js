import { StatusBar } from "expo-status-bar";
import { Text, Modal } from "react-native";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import { commonStyles } from "../components/commonStyles ";
import LinearGradientBackground from "../components/LinearGradientBackground";

export default function Confirm({
  email,
  phone,
  isVisible,
  goBackPressed,
  confirmPressed,
  finishLaterPressed,
}) {
  return (
    <Modal visible={isVisible}>
      <StatusBar style="auto" />
      <LinearGradientBackground>
        <Card>
          <Text style={commonStyles.content}>You have entered: </Text>
          <Text style={commonStyles.content}>
            {email} and {phone}
          </Text>
          <Text style={commonStyles.content}>
            Please confirm they are correct.
          </Text>
          <Buttons buttonName="Go Back" action={goBackPressed} />
          <Buttons buttonName="Confirm" action={confirmPressed} />
          <Buttons buttonName="Finish Later" action={finishLaterPressed} />
        </Card>
      </LinearGradientBackground>
    </Modal>
  );
}
