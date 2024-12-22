import { View, Text } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import Slider from "@/components/shared/slider";

const WelcomeScreen = () => {
  return (
    <ScreenWrapper>
      <Slider />
    </ScreenWrapper>
  );
};

export default WelcomeScreen;
