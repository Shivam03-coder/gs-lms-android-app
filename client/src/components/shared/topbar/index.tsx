import { View, Text } from "react-native";
import React from "react";
import { hp, wp } from "@/utils/common";
import colors from "@/constants/colors";
import { Heading3, Heading4 } from "@/components/ui/texts";
import Inputbox from "@/components/ui/input";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

const TopBar = () => {
  return (
    <View
      style={{
        height: hp(7),
        backgroundColor: colors.primary,
        position: "relative",
        top: 0,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(1),
        justifyContent: "space-between",
        columnGap: 3,
      }}
    >
      {/* Left Circle Icon */}
      <View
        style={{
          backgroundColor: colors.secondary,
          width: wp(13),
          height: wp(13),
          borderRadius: wp(13) / 2,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Heading4
          textstyle={{
            textAlign: "center",
          }}
          title="S"
        />
      </View>
      {/* Inputbox */}
      <Inputbox
        icon={<FontAwesome name="search" size={24} color="black" />}
        style={{ width: wp(58) }}
      />
      <FontAwesome6 name="rocketchat" size={30} color="black" />
    </View>
  );
};

export default TopBar;
