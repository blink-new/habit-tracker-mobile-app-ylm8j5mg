
import { Stack } from "expo-router";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { useEffect } from "react";
import { useFrameworkReady } from "../useFrameworkReady";

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  useEffect(() => {
    // Optionally, you can add a splash screen here
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}