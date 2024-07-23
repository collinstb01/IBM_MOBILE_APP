import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import SignUp from "../../screens/SignUp";

const _SignUp = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default _SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
  },
});
