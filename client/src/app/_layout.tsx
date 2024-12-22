import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-reanimated";
export { ErrorBoundary } from "expo-router";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { Stack } from "expo-router";
import React from "react";

SplashScreen.preventAutoHideAsync();

const Fonts = {
  Inter_500Medium,
  Roboto_500Medium,
  Poppins_500Medium,
  Nunito_400Regular,
};

export default function RootLayout() {
  const [fontLoaded] = useFonts(Fonts);

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null; // Show a placeholder like a loader if needed
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  return (
    <>
      {isUserLoggedIn ? (
        <View>{/* Your logged-in view goes here */}</View>
      ) : (
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/(home)/welcome/index" />
          <Stack.Screen name="(routes)/(auth)/login/index" />
          <Stack.Screen name="(routes)/(auth)/signup/index" />
          <Stack.Screen name="(routes)/(auth)/verify/index" />
        </Stack>
      )}
    </>
  );
}
