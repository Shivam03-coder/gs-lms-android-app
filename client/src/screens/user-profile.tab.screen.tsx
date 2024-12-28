import Pie from "@/components/shared/charts/pie-chart";
import ProfileCard from "@/components/shared/profile";
import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import { Heading1 } from "@/components/ui/texts";
import colors from "@/constants/colors";
import React from "react";
import { ScrollView } from "react-native";

const UserProfileTabScreen = () => {
  return (
    <ScreenTopBarWrapper>
      <ScrollView
        style={{
          flexGrow: 1,
          gap: 12,
        }}
      >
        <ProfileCard />
        {/* <Pie/> */}
      </ScrollView>
    </ScreenTopBarWrapper>
  );
};

export default UserProfileTabScreen;
