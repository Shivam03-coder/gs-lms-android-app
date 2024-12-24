import Lottie from "@/components/shared/lotties";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import useAuth from "@/hooks/useAuth";
import { Styles } from "@/styles/global";
import { Redirect } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

const Index = () => {
  const { isAuth, Loading } = useAuth();
  if (Loading) {
    return (
      <ScreenWrapper>
        <View style={Styles.container}>
          <Lottie src={require("@/assets/lottie-json/loading.json")} />
        </View>
      </ScreenWrapper>
    );
  }
  if (isAuth) {
    // @ts-ignore
    return <Redirect href="/(tabs)" />;
  }

  // Redirect to login page if not authenticated
  return <Redirect href="/(routes)/(home)/appstart" />;
};

export default Index;
