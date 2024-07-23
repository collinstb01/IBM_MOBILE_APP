import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button2 = ({ text, width, func }) => {
  return (
    <Pressable onPress={func}>
      <View style={[styles.button, { width: width ? width : 130 }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button2;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#bde900",
  },
  button: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});
