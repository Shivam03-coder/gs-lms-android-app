// @ts-ignore
import colors from "@/constants/colors";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({
  children,
  background = colors.primary,
}: {
  children: React.ReactNode;
  background?: string;
}) => {
  const { top } = useSafeAreaInsets();

  const paddingTop = top > 0 ? top + 5 : 15;

  return (
    <View
      style={{ flex: 1, paddingTop, padding: 14, backgroundColor: background }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
