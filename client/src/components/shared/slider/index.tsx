import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RelativePathString, router } from "expo-router";
import colors from "@/constants/colors";
import { slidesData } from "@/data";
import { hp, wp } from "@/utils/common";
import { Fonts } from "@/constants/fonts";
import { Heading5 } from "@/components/ui/texts";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Slider = () => {
  // Render each slide
  const renderItem = ({ item }: { item: (typeof slidesData)[0] }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Heading5
          fontFamily={Fonts.nunito}
          textstyle={styles.title}
          title={item.title}
        />
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slidesData}
      renderItem={renderItem}
      // onSkip={() => router.push("(routes)/(auth)/login" as RelativePathString)}
      onDone={() => router.push("(routes)/(auth)/login" as RelativePathString)}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      renderDoneButton={() => (
        <View style={styles.donebuttonCircle}>
          <MaterialIcons name="done" size={34} color="black" />
        </View>
      )}
      renderNextButton={() => (
        <View style={styles.buttonCircle}>
          <AntDesign name="arrowright" size={34} color="black" />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 80,
  },
  image: {
    width: wp(80),
    height: hp(40),
    resizeMode: "contain",
    marginBottom: hp(3),
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: colors.palepurple,
    textAlign: "center",
    marginBottom: hp(2),
  },
  description: {
    fontSize: hp(2),
    color: colors.secondary,
    textAlign: "center",
  },
  dot: {
    backgroundColor: colors.palepurple,
    width: wp(2.3),
    height: wp(2.3),
    borderRadius: wp(1.15),
    marginHorizontal: wp(1),
  },
  activeDot: {
    backgroundColor: colors.yellow,
    width: wp(2.8),
    height: wp(2.8),
    borderRadius: wp(1.4),
    marginHorizontal: wp(1),
  },
  buttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: colors.palepurple,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  donebuttonCircle: {
    width: 50,
    height: 50,
    backgroundColor: colors.yellow,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Slider;
