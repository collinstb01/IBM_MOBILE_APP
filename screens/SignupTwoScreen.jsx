import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { createPost } from "../sanity";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ethers } from "ethers";
import CryptoJS from "react-native-crypto-js";
import "@ethersproject/shims";

const SignupTwoScreen = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setloading] = useState(false);
  const { email } = useLocalSearchParams();
  const [user, setUUser] = useState({
    email: email,
    firstName: "",
    lastName: "",
    dob: "",
    username: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handlesignup = async () => {
    // Your signup logic here
    if (activeScreen == 0) {
      if (
        !user.firstName ||
        !user.lastName ||
        !user.username ||
        !user.dob ||
        !user.country
      ) {
        setErrorMessage("Please all fields are required");
        setTimeout(() => {
          setErrorMessage("");
        }, 7000);
        return;
      }
      setActiveScreen((e) => e + 1);
      return;
    }

    if (!user.confirmPassword || !user.password) {
      setErrorMessage("Please enter password and confirm password");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
      return;
    }

    if (user.password.length <= 5) {
      setErrorMessage("Please Password must be more than 5 characters");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
      return;
    }

    if (user.confirmPassword != user.password) {
      setErrorMessage("Please Password and Confirm Password doesnt match");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
      return;
    }

    try {
      setloading(true);
      const walletData = ethers.Wallet.createRandom();

      // create details
      let phrase = walletData.mnemonic.phrase;
      let privateKey = walletData.privateKey;
      let walletAddress = new ethers.Wallet(privateKey).address;

      // encrypt phrase
      const encryptedPhrase = CryptoJS.AES.encrypt(
        phrase,
        encryptionKey
      ).toString();

      const encryptPassword = CryptoJS.AES.encrypt(
        phrase,
        encryptionKey
      ).toString();

      let newUser = {
        email: email,
        password: encryptPassword,
        seedPrase: encryptedPhrase,
        walletAddress: walletAddress,
      };

      await AsyncStorage.setItem("user", JSON.stringify(newUser));

      await createPost({ ...user, email: email, password: encryptPassword });
      await AsyncStorage.setItem("user", email);

      setloading(false);
      return router.push("/");
    } catch (error) {
      console.log(error);
      setloading(false);
      setErrorMessage("Something went wrong");
      setTimeout(() => {
        setErrorMessage("");
      }, 7000);
    }
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

  const handleChange = (name, value) => {
    setUUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.text1}>{arraydata[activeScreen].text1}</Text>
        <Text style={styles.text2}>{arraydata[activeScreen].text2}</Text>
      </View>
      <View style={styles.Input}>
        {activeScreen == 0 ? (
          <View>
            <Input
              text={"First name"}
              placeholder={"Enter first name"}
              value={user.firstName}
              onchangetext={handleChange}
              name={"firstName"}
            />
            <Input
              text={"Last name"}
              placeholder={"Enter last name"}
              value={user.lastName}
              onchangetext={handleChange}
              name={"lastName"}
            />
            <Input
              text={"Date of birth"}
              placeholder={"DD/MM/YY"}
              value={user.dob}
              onchangetext={handleChange}
              name={"dob"}
            />
            <Input
              text={"Username"}
              placeholder={"Enter preferred username"}
              value={user.username}
              onchangetext={handleChange}
              name={"username"}
            />
            <Input
              text={"Country of residence"}
              placeholder={"Enter Country of residence"}
              value={user.country}
              onchangetext={handleChange}
              name={"country"}
            />
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        ) : (
          <View>
            <Input
              text={"Password"}
              placeholder={"Enter password"}
              value={user.password}
              onchangetext={handleChange}
              name={"password"}
            />
            <Input
              text={"Confirm password"}
              placeholder={"Enter confirm password"}
              value={user.confirmPassword}
              onchangetext={handleChange}
              name={"confirmPassword"}
            />
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        )}
        <View style={{ marginTop: 80 }}>
          <Button
            text={
              activeScreen == 0
                ? "Continue"
                : !loading
                ? "Create account"
                : "Loading..."
            }
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
  error: {
    color: "red",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
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
