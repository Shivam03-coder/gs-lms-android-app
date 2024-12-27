import { View, Text } from "react-native";
import React from "react";
import { hp, wp } from "@/utils/common";

const Reviews = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        minHeight: hp(12),
        borderRadius: wp(3),
        elevation: 12,
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text>Reviews</Text>
      </View>
      <View>
        <Text>Reviews</Text>
      </View>
    </View>
  );
};

export default Reviews;
