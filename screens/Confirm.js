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
          <Text style={commonStyles.content}>
            You have entered: {"\n"}
            {email + "\n"}
            {phone + "\n"}
            Please confirm they are correct.
          </Text>
          <Buttons buttonName="Go back" action={goBackPressed} />
          <Buttons buttonName="Confirm" action={confirmPressed} />
          <Buttons buttonName="Finish Later" action={finishLaterPressed} />
        </Card>
      </LinearGradientBackground>
    </Modal>
  );
}
