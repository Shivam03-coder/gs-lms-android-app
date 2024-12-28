import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { hp, wp } from "@/utils/common";
import colors from "@/constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { RelativePathString, router } from "expo-router";

const ReturnButton = ({ url }: { url?: RelativePathString }) => {
  return (
    <TouchableOpacity
      style={{
        width: wp(15),
        backgroundColor: colors.dark,
        padding: wp(3),
        marginVertical: wp(3),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp(1),
        borderWidth: 0.6,
        borderColor:colors.secondary
      }}
      onPress={() => router.push(url!)}
    >
      <AntDesign name="back" size={24} color={colors.secondary} />
    </TouchableOpacity>
  );
};

export default ReturnButton;
