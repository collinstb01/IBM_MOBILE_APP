import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { router } from "expo-router";

const SignUp = () => {
  const handlesignup = () => {
    // Your signup logic here
    router.push("/Onboarding/SignupTwo");
  };
  return (
    <View style={styles.container}>
      <View style={styles.signupcontent}>
        <Text style={styles.text1}>SignUp</Text>
        <Text style={styles.text2}>What's your email address ?</Text>
        <Text style={styles.text3}>wWe'll need this to kickstart your</Text>
        <Text style={styles.text4}>signup process</Text>
      </View>
      <View style={styles.Input}>
        <Input text={"Email address"} placeholder={"Enter Email"} />
        <View>
          {/* <CheckBoxComponent value={true} /> */}
          <Text style={styles.text2}>I have a referral code</Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button
            text={"Continue"}
            width={Dimensions.get("window").width - 80}
            func={handlesignup}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Input: {
    padding: 40,
  },
  text2: {
    marginTop: 13,
    fontSize: 14,
    marginBottom: 3,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  text2: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
    fontWeight: "700",
  },
  text3: {
    fontSize: 14,
    color: "white",
    marginTop: 3,
  },
  text4: {
    fontSize: 14,
    color: "white",
  },
  container: {},
  signupcontent: {
    padding: 40,
    paddingTop: 120,
    height: 400,
    backgroundColor: "#e00000",
  },
});
