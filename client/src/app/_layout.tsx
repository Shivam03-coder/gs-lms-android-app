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
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ToastProvider } from "react-native-toast-notifications";

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
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Provider store={store}>
      <ToastProvider placement="top">
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
          <Stack.Screen name="(routes)/(root)/course/index" />
        </Stack>
      </ToastProvider>
    </Provider>
  );
}
