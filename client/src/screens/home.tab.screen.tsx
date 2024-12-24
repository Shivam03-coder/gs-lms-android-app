import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import SearchBar from "@/components/shared/searchbar";
import SwiperComponent from "@/components/shared/swiper";
import TopBar from "@/components/shared/topbar";
import { Heading1 } from "@/components/ui/texts";
import colors from "@/constants/colors";
import React from "react";
import { View } from "react-native";

const HomeTabScreen = () => {
  return (
    <ScreenTopBarWrapper>
      <SearchBar />
      <SwiperComponent />
    </ScreenTopBarWrapper>
  );
};

export default HomeTabScreen;
