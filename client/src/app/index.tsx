import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import useAuth from "@/hooks/useAuth";
import { Styles } from "@/styles/global";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Index = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return (
      <ScreenWrapper>
        <View style={Styles.container}>
          <ActivityIndicator size={"large"} color={"#000"} />
        </View>
      </ScreenWrapper>
    );
  }

  if (isAuth) {
    // Redirect to main page if authenticated
    // @ts-ignore
    return <Redirect href="/(tabs)/index" />;
  }

  // Redirect to login page if not authenticated
  return <Redirect href="/(routes)/(home)/appstart" />;
};

export default Index;
