import { hp } from "@/utils/common";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";

const slides = [
  { id: 1, src: require("@/assets/images/g1.png") },
  { id: 2, src: require("@/assets/images/g2.png") },
  { id: 3, src: require("@/assets/images/g3.png") },
  { id: 4, src: require("@/assets/images/g4.png") },
];

const styles = StyleSheet.create({
  slide: {
    height: hp(30),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    overflow: "hidden", 
  },
  image: {
    width: "100%", 
    height: "100%", 
    resizeMode: "cover", // Ensures the image scales correctly
  },
});

const SwiperComponent = () => (
  <Swiper
    autoplay
    style={{ marginVertical: hp(2) }}
    showsPagination={false}
    loop
    autoplayTimeout={3}
  >
    {slides.map((slide) => (
      <View key={slide.id} style={styles.slide}>
        <Image source={slide.src} style={styles.image} />
      </View>
    ))}
  </Swiper>
);

export default SwiperComponent;
