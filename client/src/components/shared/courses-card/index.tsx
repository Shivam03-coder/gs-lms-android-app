import { View } from "react-native";
import React from "react";
import CourseCardHeader from "./card-header";
import CardMain from "./card-main";

const CourseCards = () => {
  return (
    <View>
      <CourseCardHeader />
      <CardMain />
    </View>
  );
};

export default CourseCards;
