import { View, StyleSheet } from "react-native";

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 10,
    shadowColor: "rgba(96,96,96,1)",
    padding: 20,
    margin: 10,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
