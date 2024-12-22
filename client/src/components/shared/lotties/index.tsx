import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { hp, wp } from "@/utils/common";

const Lottie = ({
  src,
  heightp,
  widthp,
  Lottiestyle,
}: {
  src: any;
  heightp?: number;
  widthp?: number;
  Lottiestyle?: StyleProp<ViewStyle>;
}) => {
  const animation = useRef<LottieView>(null);

  const dynamicStyle = {
    width: widthp ? wp(widthp) : wp(90),
    height: heightp ? hp(heightp) : hp(42),
  };

  return (
    <LottieView
      autoPlay
      ref={animation}
      style={[dynamicStyle, Lottiestyle]} // Combine dynamicStyle with any user-provided styles
      source={src}
      loop
    />
  );
};

export default Lottie;

const style = StyleSheet.create({
  Lottiestyle: {
    width: wp(90),
    height: hp(12),
  },
});
