import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "./commonStyles ";

export default function Header({ headerEntered }) {
  return (
    <View>
      <Text
        style={[
          styles.header,
          commonStyles.colorUsed,
          commonStyles.borderColorUsed,
        ]}
      >
        {headerEntered}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    borderWidth: 2,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 40,
    marginBottom: 10,
  },
});
