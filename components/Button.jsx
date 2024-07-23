import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ text, width, func }) => {
  return (
    <Pressable onPress={func}>
      <View style={[styles.button, { width: width ? width : 150 }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#b6f12a",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
