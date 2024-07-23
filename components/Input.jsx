import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CheckBox, { CheckBoxComponent } from "@react-native-community/checkbox";

const Input = ({ text, placeholder }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ marginBottom: 25 }}>
      <Text style={styles.text}>{text}</Text>
      <TextInput placeholder={placeholder} style={styles.Inputbox} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 3,
  },

  Inputbox: {
    height: 40,
    borderColor: "#281e1e",
    borderWidth: 2.3,
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  checkbox: {
    alignSelf: "center",
  },
});
