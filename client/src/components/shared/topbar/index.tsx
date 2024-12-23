import { View, Text } from "react-native";
import React from "react";
import { hp } from "@/utils/common";
import colors from "@/constants/colors";
// import UserAvatar from 'react-native-user-avatar';

const TopBar = () => {
  return (
    <View
      style={{
        height: hp(8),
        backgroundColor: colors.secondary,
        position: "relative",
        top: 0,
        width :"100%"
      }}
    >
    {/* <UserAvatar size={100} name="Avishay Bar" /> */}
    </View>
  );
};

export default TopBar;
