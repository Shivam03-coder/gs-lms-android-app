import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import { Styles } from "@/styles/global";
import Lottie from "@/components/shared/lotties";
import { Heading1, Heading3, Paragraph } from "@/components/ui/texts";
import colors from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { hp } from "@/utils/common";
import Button from "@/components/ui/button";
import { router } from "expo-router";

const AppStartScreen = () => {
  return (
    <ScreenWrapper>
      <View style={Styles.container}>
        <Lottie
          heightp={25}
          widthp={60}
          src={require("@/assets/lottie-json/hat.json")}
        />
        <View style={onboardingstyles.textcontainer}>
          <Heading3
            textstyle={{ color: colors.secondary }}
            title="SGSITS LMS"
          />
          <Paragraph
            textstyle={onboardingstyles.paragraphtext}
            fontFamily={Fonts.nunito}
            title="Sgsits lms is a comprehensive platform designed to enhance the learning experience for students and faculty at SGSITS."
          />
          <Button
            onPress={() => router.push("/(routes)/(home)/welcome")}
            title="Getting Started"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};


const onboardingstyles = StyleSheet.create({
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: hp(3),
  },
  paragraphtext: {
    color: colors.secondary,
    opacity: 0.8,
    textAlign: "center",
    fontFamily: Fonts.inter,
  },
});

export default AppStartScreen;