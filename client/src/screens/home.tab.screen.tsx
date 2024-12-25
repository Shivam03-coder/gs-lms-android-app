import CourseCards from "@/components/shared/courses-card";
import ScreenTopBarWrapper from "@/components/shared/providers/screen-top-bar-wrapper";
import SearchBar from "@/components/shared/searchbar";
import SwiperComponent from "@/components/shared/swiper";
import React from "react";

const HomeTabScreen = () => {
  return (
    <ScreenTopBarWrapper>
      <CourseCards />
    </ScreenTopBarWrapper>
  );
};

export default HomeTabScreen;
