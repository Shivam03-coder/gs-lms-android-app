import React, { Children } from "react";
import { View } from "react-native";
import TopBar from "../topbar";
import ScreenWrapper from "./screen-wrapper";

const ScreenTopBarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <ScreenWrapper>{children}</ScreenWrapper>
    </View>
  );
};

export default ScreenTopBarWrapper;
