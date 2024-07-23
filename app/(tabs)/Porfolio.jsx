import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/Button";
import Cryptos from "../../components/Cryptos";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containertwo}>
          <View style={styles.assestsdetails}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.totalBalance}>Total balance</Text>
                <Feather name="eye-off" size={24} color="white" />
              </View>
              <View>
                <Entypo name="dots-three-horizontal" size={24} color="white" />
              </View>
            </View>
            <Text style={styles.amount}>N 1,500.56</Text>
            <View style={styles.chat}>
              <AntDesign name="linechart" size={24} color="white" />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 20 }}>
                <Button text={"Buy"} />
              </View>
              <Button text={"Sell"} />
            </View>
          </View>
          <View style={styles.cryptoratings}>
            <Text style={styles.textrate}>Today's rates</Text>
            <View>
              <Cryptos />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textrate: {
    fontSize: 24,
    fontWeight: "700",
  },
  cryptoratings: {
    marginTop: 40,
  },
  chat: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  amount: {
    fontSize: 40,
    color: "white",
    fontWeight: "800",
  },
  totalBalance: {
    paddingRight: 10,
    color: "white",
  },
  assestsdetails: {
    backgroundColor: "#a40706",
    height: 300,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  containertwo: {
    paddingLeft: 17,
    paddingRight: 17,
  },
  container: {
    backgroundColor: "#fff",
  },
});
