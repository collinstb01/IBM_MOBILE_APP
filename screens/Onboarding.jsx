import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import { router } from "expo-router";

const Onboarding = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const handleLogin = () => {
    // Your login logic goes here
    console.log("clicked");
  };

  const handleGetStarted = () => {
    console.log("clicked");
    if (activeScreen == 2) {
      router.push("/Onboarding/SignUp");
      return;
    }
    setActiveScreen((e) => e + 1);
    // Your login logic goes here
  };

  const arraydata = [
    {
      text1: "Build your",
      text2: "Crypto Porfolio",
      desc: "Buy, sell and manage your cryptocurrencies with ease, all in one place",
      image: "./assets/some.png",
    },
    {
      text1: "Earn up to 8% interest",
      text2: "per annum on ibit",
      desc: "Enjoy daily and annual returns on ibit you deposit with us",
      image: "./assets/some.png",
    },
    {
      text1: "Spend your crypto",
      text2: "your way",
      desc: "Buy shopping vouchers,airtime,data,and enjoy cashback rewards",
      image: "./assets/some.png",
    },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#e00000" }}>
      <View style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={require("../assets/some.png")} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title1}>Build your</Text>
          <Text style={styles.title2}>{arraydata[activeScreen].text2}</Text>
          <Text style={styles.desc}>{arraydata[activeScreen].desc}</Text>
        </View>
        <View style={styles.activeboxes}>
          <Pressable onPress={() => setActiveScreen(0)}>
            <View
              style={[
                activeScreen == 0 ? styles.activebox : styles.inactivebox,
              ]}
            ></View>
          </Pressable>
          <Pressable onPress={() => setActiveScreen(1)}>
            <View
              style={[
                activeScreen == 1 ? styles.activebox : styles.inactivebox,
              ]}
            ></View>
          </Pressable>
          <Pressable onPress={() => setActiveScreen(2)}>
            <View
              style={[
                activeScreen == 2 ? styles.activebox : styles.inactivebox,
              ]}
            ></View>
          </Pressable>
        </View>
      </View>
      <View style={[{}, styles.buttons]}>
        <View tyle={{}}>
          <Button text={"Get started"} func={handleGetStarted} />
        </View>
        <View style={{ marginTop: 25 }}>
          <Button2 text={"Login"} func={handleLogin} />
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // flex: 1,
    height: Dimensions.get("window").height - 250,
    borderBottomEndRadius: 170,
    borderBottomStartRadius: 210,
  },
  activebox: {
    backgroundColor: "grey",
    height: 12,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 15,
    padding: 5,
    width: 12,
  },
  inactivebox: {
    backgroundColor: "#aeacac",
    height: 1,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 15,
    padding: 4,
    width: 1,
  },
  activeboxes: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    // marginTop: 50,
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    zIndex: 20,
  },
  desc: {
    width: Dimensions.get("window").width - 100,
    textAlign: "center",
    marginTop: 10,
  },
  title1: {
    fontSize: 26,
    fontWeight: "700",
  },
  title2: {
    fontSize: 26,
    fontWeight: "700",
  },
  imagecontainer: {
    alignItems: "center",
    paddingTop: 80,
  },
  image: {
    width: 300,
    height: 300,
  },
});
