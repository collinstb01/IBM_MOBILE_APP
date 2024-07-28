import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { router } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState({ email: "" });
  const [errormessage, setErrorMessage] = useState("");

  const handlesignup = () => {
    // Your signup logic here
    if (email.email == "") {
      setErrorMessage("Please enter your email");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
      return;
    }
    router.push({
      pathname: "/Onboarding/SignupTwo",
      params: { email: email.email },
    });
  };

  const handleChange = (name, value) => {
    setEmail((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <Input
          text={"Email address"}
          placeholder={"Enter Email"}
          onchangetext={handleChange}
          value={email}
          name="email"
        />
        <Text style={styles.error}>{errormessage}</Text>
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
  error: {
    color: "red",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
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
    height: 380,
    backgroundColor: "#e00000",
    borderBottomEndRadius: 330,
    borderBottomStartRadius: 250,
  },
});
