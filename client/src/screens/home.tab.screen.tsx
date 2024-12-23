import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import TopBar from "@/components/shared/topbar";
import { Heading1 } from "@/components/ui/texts";
import colors from "@/constants/colors";
import React from "react";
import { View } from "react-native";

const HomeTabScreen = () => {
  return (
    <ScreenTopBarWrapper>
      <Heading1 title="SHIVAM ANAND" textstyle={{ color: colors.paleblue }} />
    </ScreenTopBarWrapper>
  );
};

export default HomeTabScreen;
