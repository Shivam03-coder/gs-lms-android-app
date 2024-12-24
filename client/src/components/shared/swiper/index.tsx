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

const SwiperComponent = () => (
  <View style={styles.container}>
    <Swiper autoplay showsPagination={false} loop autoplayTimeout={2}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.src} style={styles.image} />
        </View>
      ))}
    </Swiper>
  </View>
);

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    height: hp(30),
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: hp(3),
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
