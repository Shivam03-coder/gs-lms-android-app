import React, { Children } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import TopBar from "../topbar";
import ScreenWrapper from "./screen-wrapper";

type ScreenTopBarWrapperprop = {
  ScreenStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

const ScreenTopBarWrapper: React.FC<ScreenTopBarWrapperprop> = ({
  children,
  ScreenStyle,
}) => {
  return (
    <View style={[{ flex: 1 }, ScreenStyle]}>
      <TopBar />
      <ScreenWrapper>{children}</ScreenWrapper>
    </View>
  );
};

export default ScreenTopBarWrapper;
