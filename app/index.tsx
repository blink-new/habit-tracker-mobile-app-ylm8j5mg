
import { Tabs } from "expo-router";
import { Home, PlusCircle, BarChart } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#5E60CE",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size ?? 24} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, size }) => <PlusCircle color={color} size={size ?? 24} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => <BarChart color={color} size={size ?? 24} />,
        }}
      />
    </Tabs>
  );
}