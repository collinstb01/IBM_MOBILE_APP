import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Cryptos = () => {
  return (
    <View style={styles.cryptos}>
      {[1, 2, 3, 4, , 5, 5].map((val, i) => (
        <View style={styles.crypto} key={i}>
          <View style={styles.cryptonameandimage}>
            <FontAwesome5 name="user-circle" size={34} color="#ef1900" />
            <Text style={styles.cryptoname}>IBC</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              1,500,925.56 IBC
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Cryptos;

const styles = StyleSheet.create({
  cryptoname: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
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
});
