import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import index from "./screens/Onboarding";

export default function App() {
  const [text, settext] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={index} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 30,
    fontWeight: "500",
  },
  balance: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "700",
  },
  cryptoname: {
    marginLeft: 15,
    fontSize: 16,
  },
  cryptonameandimage: {
    flexDirection: "row",
    alignItems: "center",
  },
  crypto: {
    flexDirection: "row",
    paddingTop: 13,
    paddingBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  cryptos: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingRight: 30,
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
