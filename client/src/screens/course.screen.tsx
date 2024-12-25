import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/shared/providers/screen-wrapper";
import { hp, wp } from "@/utils/common";
import { Heading1, Paragraph } from "@/components/ui/texts";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import colors from "@/constants/colors";

const CourseScreen = () => {
  const data = [
    "Introduction to Programming",
    "Web Development with React",
    "Data Structures and Algorithms",
    "Machine Learning Basics",
    "Mobile App Development with React Native",
    "Database Management Systems",
    "Advanced JavaScript Concepts",
    "Cloud Computing Fundamentals",
    "Cybersecurity Essentials",
    "Software Engineering Principles",
  ];

  return (
    <ScreenWrapper>
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
              <Paragraph textstyle={{ color: colors.yellow }} title="2.8" />
            </View>
            <View>
              <Paragraph textstyle={styles.priceText} title="$34" />
            </View>
          </View>
        </View>
      </View>

      {/* Card Details */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>
              <Ionicons name="key-sharp" size={24} color="blue" /> {item}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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

  priceText: {
    fontWeight: "700",
    fontSize: hp(2.2),
    color: colors.secondary,
  },
  text: {
    fontSize: 18,
    color: colors.secondary,
  },
  listItem: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    paddingVertical: wp(2),
  },
});
