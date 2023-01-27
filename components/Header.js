import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header({ headerEntered }) {
  return (
    <View>
      <Text style={styles.header}>{headerEntered}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    color: "purple",
    borderWidth: 2,
    borderColor: "purple",
    fontSize: 15,
    fontWeight: "600",
  },
});
