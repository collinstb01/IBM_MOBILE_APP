import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { router } from "expo-router";

const SignupTwoScreen = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const handlesignup = () => {
    // Your signup logic here
    if (activeScreen == 0) {
      setActiveScreen((e) => e + 1);
      return;
    }
    router.push("/");
  };

  const arraydata = [
    {
      text1: "Let's get to know you",
      text2: "Please provide only correct details to verify your identity",
    },
    {
      text1: "Create password",
      text2: "Please ensure to use a strong and secure password",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.text1}>{arraydata[activeScreen].text1}</Text>
        <Text style={styles.text2}>{arraydata[activeScreen].text2}</Text>
      </View>
      <View style={styles.Input}>
        {activeScreen == 0 ? (
          <View>
            <Input text={"First name"} placeholder={"Enter first name"} />
            <Input text={"Last name"} placeholder={"Enter last name"} />
            <Input text={"Date of birth"} placeholder={"DD/MM/YY"} />
            <Input text={"Username"} placeholder={"Enter preferred username"} />
            <Input text={"Country of residence"} placeholder={"Enter Email"} />
          </View>
        ) : (
          <View>
            <Input text={"Password"} placeholder={"Enter password"} />
            <Input
              text={"Confirm password"}
              placeholder={"Enter confirm password"}
            />
          </View>
        )}
        <View style={{ marginTop: 80 }}>
          <Button
            text={activeScreen == 0 ? "Continue" : `Create account`}
            width={Dimensions.get("window").width - 80}
            func={handlesignup}
          />
        </View>
      </View>
    </View>
  );
};

export default SignupTwoScreen;

const styles = StyleSheet.create({
  Input: {
    justifyContent: "space-between",
    flex: 1,
  },
  text2: {
    fontWeight: "700",
    fontSize: 16,
    marginTop: 10,
  },
  text1: {
    fontWeight: "900",
    fontSize: 30,
  },
  texts: {
    marginBottom: 30,
  },
  container: {
    padding: 40,
    flex: 1,
  },
});
