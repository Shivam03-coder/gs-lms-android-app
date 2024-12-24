import React, { Children } from "react";
import { View, StyleProp, ViewStyle, ScrollView } from "react-native";
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
      <ScreenWrapper>
        {" "}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {children}
        </ScrollView>
      </ScreenWrapper>
    </View>
  );
};

export default ScreenTopBarWrapper;
