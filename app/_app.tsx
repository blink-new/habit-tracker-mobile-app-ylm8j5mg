
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HabitsProvider } from "../components/HabitsContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <HabitsProvider>
        <StatusBar style="dark" />
        <Slot />
      </HabitsProvider>
    </SafeAreaProvider>
  );
}