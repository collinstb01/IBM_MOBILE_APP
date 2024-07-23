import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarStyle: {
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIconStyle: { position: "relative", bottom: 10, left: 10 },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={32} color="#d2402f" />
          ),
        }}
      />
      <Tabs.Screen
        name="Porfolio"
        options={{
          title: "Porfolio",
          tabBarIconStyle: { position: "relative", bottom: 10 },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="wallet" size={32} color="#d2402f" />
          ),
        }}
      />
      <Tabs.Screen
        name="Swap"
        options={{
          title: "Swap",
          tabBarIconStyle: { position: "relative", bottom: 10, right: 10 },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="percent" size={28} color="#d2402f" />
          ),
        }}
      />
      <Tabs.Screen
        name="Spread"
        options={{
          title: "Spread",
          tabBarIconStyle: { position: "relative", bottom: 10, right: 10 },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-spreadsheet"
              size={32}
              color="#d2402f"
            />
          ),
        }}
      />
    </Tabs>
  );
}
