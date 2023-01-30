// import { useState } from "react";
// import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";

// export default function PhoneInput({ sendChangedPhone }) {
//   const [text, setText] = useState();

//   function changeTextHandle(changedText) {
//     sendChangedPhone(changedText);
//     setText(changedText);
//   }

//   return (
//     <View>
//       <Text style={styles.contentTitle}>Phone Number</Text>
//       <TextInput
//         value={text}
//         style={styles.input}
//         onChangeText={changeTextHandle}
//       />
//       <Text>{text}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   contentTitle: {
//     color: "darkslateblue",
//     width: 200,
//     fontSize: 20,
//   },
//   input: {
//     borderColor: "#777",
//     width: 200,
//     borderBottomWidth: 2,
//     fontSize: 20,
//     borderBottomColor: "darkslateblue",
//     padding: 10,
//   },
//   notice: {
//     fontSize: 30,
//     padding: 10,
//   },
// });
