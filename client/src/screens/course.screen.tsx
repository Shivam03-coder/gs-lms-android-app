import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import { hp, wp } from "@/utils/common";
import { Paragraph } from "@/components/ui/texts";
import { AntDesign } from "@expo/vector-icons";
import colors from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import CourseTabs from "@/components/shared/course-tabs";
import ReturnButton from "@/components/ui/return-button";
import { RelativePathString } from "expo-router";
import Button from "@/components/ui/button";

const CourseScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        style={{
          flexGrow: 1,
          gap: wp(2),
        }}
      >
        <ReturnButton url={"/(tabs)" as RelativePathString} />
        {/* Card Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/yt.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.overlay}>
            <View style={styles.courseinfo}>
              <View style={styles.rating}>
                <AntDesign name="star" size={24} color={colors.yellow} />
                <Paragraph textstyle={styles.yellowText} title="2.8" />
              </View>
              <View>
                <Paragraph
                  textstyle={styles.priceText}
                  title="Prof. Shivam Anand"
                />
              </View>
            </View>
          </View>
        </View>

        {/*  Button */}
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paragraph
            textstyle={{
              color: colors.secondary,
            }}
            title="WEB DEVELOPMENT"
          />
          <View
            style={{
              flexDirection: "row",
              gap: wp(4),
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.dark,
                padding: wp(3),
                marginVertical: wp(3),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: hp(1),
              }}
            >
              <AntDesign name="plus" size={24} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.dark,
                padding: wp(3),
                marginVertical: wp(3),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: hp(1),
              }}
            >
              <AntDesign
                name="clockcircleo"
                size={24}
                color={colors.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.dark,
                padding: wp(3),
                marginVertical: wp(3),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: hp(1),
              }}
            >
              <AntDesign name="sharealt" size={24} color={colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Details */}
        <View style={styles.cardDetails}>
          <Text style={styles.text}>
            Master the fundamentals of web development in this comprehensive
            course. Learn HTML, CSS, JavaScript, and modern frameworks. Build
            responsive websites, enhance user experience, and gain hands-on
            experience with real-world projects to kickstart your tech career
            today!
          </Text>
        </View>

        {/* Price details */}

        <View style={styles.pricecontainer}>
          <Paragraph
            textstyle={{
              color: colors.paleblue,
            }}
            fontFamily={Fonts.roboto}
            title="$ 34"
          />
          <Paragraph
            textstyle={{
              color: colors.paleblue,
            }}
            fontFamily={Fonts.roboto}
            title="32 Students"
          />
        </View>

        {/* Course Tabs */}
        <CourseTabs />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    borderRadius: 18,
    marginBottom: wp(3),
    position: "relative",
  },
  cardImage: {
    height: 240,
    width: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "20%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "column",
    justifyContent: "center",
  },
  courseinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
  },
  rating: {
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: wp(3),
  },
  yellowText: {
    color: colors.yellow,
  },
  priceText: {
    fontWeight: "700",
    fontSize: hp(2.2),
    color: colors.secondary,
  },
  cardDetails: {
    padding: wp(1),
  },
  text: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: "justify",
  },
  listItem: {
    marginBottom: 10,
    backgroundColor: "green",
    paddingVertical: wp(2),
  },
  pricecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: wp(2),
    padding: wp(2),
    justifyContent: "space-between",
  },
});
