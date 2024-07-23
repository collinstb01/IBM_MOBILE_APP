import { StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import SignupTwoScreen from "../../screens/SignupTwoScreen";

const SignupTwo = () => {
  return (
    <View style={styles.container}>
      <SignupTwoScreen />
    </View>
  );
};

export default SignupTwo;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
  },
});
