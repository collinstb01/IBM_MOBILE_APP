import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../../screens/Onboarding";

const index = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: "red",
    flex: 1,
  },
});
