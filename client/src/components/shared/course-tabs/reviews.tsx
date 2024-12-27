import { View, Text } from "react-native";
import React from "react";
import ReviewCards from "./review/review-card";
import { hp } from "@/utils/common";
import WriteReview from "./review/write-review";

const reviews = () => {
  return (
    <View style={{
      gap:hp(2)
    }}>
      <WriteReview/>
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
      <ReviewCards />
    </View>
  );
};

export default reviews;
