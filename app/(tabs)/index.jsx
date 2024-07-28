import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import Cryptos from "../../components/Cryptos";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Tab() {
  const [text, settext] = useState("");
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    async function d() {
      // await AsyncStorage.removeItem("user");
      const user = await AsyncStorage.getItem("user");

      console.log(user);
      const doesUserExist = JSON.parse(user);

      if (!doesUserExist.email && isMounted.current) {
        return router.push("/Onboarding");
      }
    }
    d();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containertwo}>
        {/* <StatusBar animated={true} backgroundColor="black" /> */}
        <View style={styles.header}>
          <View>
            <Link replace href={"/Onboarding"}>
              <Text>
                <FontAwesome5 name="user-circle" size={36} color="#ef1900" />
              </Text>
            </Link>
          </View>
          <View style={styles.inputtext}>
            <TextInput
              style={styles.input}
              value={text}
              placeholder="Search for assets"
              onChangeText={settext}
              editable={true}
            />
          </View>
          <View style={styles.icosnbarscanners}>
            <MaterialIcons name="qr-code-scanner" size={24} color="black" />
            <View style={{ marginLeft: 10 }}>
              <FontAwesome5 name="bell" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Text style={styles.text}>Available Balance</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.balance}> N1,500,925.56</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
          <Button text={"+    Add wallet"} />
        </View>
        <Cryptos />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#bde900",
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  text: {
    paddingTop: 30,
    fontWeight: "500",
  },
  balance: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "900",
  },

  containertwo: {
    paddingLeft: 17,
    paddingRight: 17,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 10,
    width: 200,
    borderRadius: 6,
    // flex: 1,
    borderWidth: 2,
    height: 40,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  icosnbarscanners: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
