import { View, Button } from "react-native";

export default function Buttons({ buttonName, action }) {
  let colorEnter = "blue";
  if (buttonName === "Reset" || buttonName === "Go back") {
    colorEnter = "red";
  }

  return (
    <View style={{ margin: 20 }}>
      <Button color={colorEnter} title={buttonName} onPress={action} />
    </View>
  );
}
