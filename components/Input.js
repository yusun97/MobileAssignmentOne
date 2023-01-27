import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";

export default function Input({ signContent }) {
  const [text, setText] = useState();

  function changeTextHandle(changedText) {
    setText(changedText);
  }

  return (
    <View>
      <Text style={styles.contentTitle}>{signContent}</Text>
      {/* Email address */}
      <TextInput
        value={text}
        style={styles.input}
        onChangeText={changeTextHandle}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentTitle: {
    color: "darkslateblue",
    width: 200,
    fontSize: 20,
  },
  input: {
    borderColor: "#777",
    width: 200,
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: "darkslateblue",
    padding:10,
  },
  notice: {
    fontSize: 30,
    padding:10,
  },
});

// export default function Input({
//   sendChangedText,
//   modalIsVisible,
//   cancelPressed,
// }) {
//   const [text, setText] = useState("default value");

//   function changeTextHandle(changedText) {
//     setText(changedText);
//     //   sendChangedText(changedText);
//   }

//   function buttonPress() {
//     sendChangedText(text);
//     setText("");
//   }

//   return (
//     <Modal visible={modalIsVisible}>
//       <View style={styles.container}>
//         <TextInput
//           value={text}
//           style={styles.input}
//           onChangeText={changeTextHandle}
//         />
//         <Button title="Confirm" onPress={buttonPress} />
//         <Button title="Cancel" onPress={cancelPressed} />
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     backgroundColor: "red",
//     borderWidth: 1,
//     borderColor: "#777",
//     padding: 8,
//     margin: 10,
//     width: 200,
//   },
// });
