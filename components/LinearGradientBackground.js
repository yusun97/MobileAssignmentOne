import { commonStyles } from "./commonStyles ";
import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientBackground(props) {
  return (
    // <View style={[styles.card, commonStyles.cardColorUsed]}>
    //   {props.children}
    // </View>
    <LinearGradient
      style={commonStyles.centerContainer}
      colors={["lightskyblue", "darkslateblue"]}
    >
      {props.children}
    </LinearGradient>
  );
}
