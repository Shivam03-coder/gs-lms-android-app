import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import React from "react";
import { hp, wp } from "@/utils/common";
import { Paragraph } from "@/components/ui/texts";
import { Fonts } from "@/constants/fonts";
import colors from "@/constants/colors";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Use useRouter for navigation
import SwiperComponent from "../swiper";
import CourseCardHeader from "./card-header";
import SearchBar from "../searchbar";

// Sample data array
const cardData = [
  {
    id: 1,
    imageSource: require("@/assets/images/yt.jpg"), // Image for Video 1
    description:
      "This video teaches the basics of React Native, focusing on layout, styling, and component usage. Perfect for beginners!",
    rating: 2.9,
    studentCount: 0,
    price: "$32.00",
    lessons: 32,
  },
  {
    id: 2,
    imageSource: require("@/assets/images/yt2.jpg"), // Image for Video 2
    description:
      "An advanced tutorial on React Native that covers state management, navigation, and hooks. Ideal for developers with some experience.",
    rating: 4.5,
    studentCount: 120,
    price: "$45.00",
    lessons: 35,
  },
  {
    id: 3,
    imageSource: require("@/assets/images/yt3.jpg"), // Image for Video 3
    description:
      "Learn about integrating backend services with React Native, including how to set up APIs and handle data fetching and state.",
    rating: 3.8,
    studentCount: 56,
    price: "$28.00",
    lessons: 53,
  },
];

const CardMain = () => {
  const router = useRouter(); // Use router for navigation

  // Function to handle card press
  const handleCardPress = (id: number) => {
    router.push(`/(routes)/(root)/course`); // Navigate to course details page
  };

  return (
    <FlatList
      data={cardData}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.scrollContainer} // Use this for padding inside FlatList
      ListHeaderComponent={
        <>
          <SearchBar />
          <SwiperComponent />
          <CourseCardHeader />
        </>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleCardPress(item.id)}
          style={styles.card}
        >
          {/* Card Image */}
          <View style={styles.imageContainer}>
            <Image source={item.imageSource} style={styles.cardImage} />
          </View>

          {/* Card Title/Description */}
          <Text style={styles.cardText}>{item.description}</Text>

          {/* Rating and Student Count */}
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <AntDesign name="star" size={24} color={colors.yellow} />
              <Paragraph
                textstyle={{ color: colors.yellow }}
                title={item.rating.toString()}
              />
            </View>
            <View>
              <Paragraph
                textstyle={styles.studentCountText}
                fontFamily={Fonts.roboto}
                title={`${item.studentCount} Students`}
              />
            </View>
          </View>

          {/* Price and  Lesson  */}
          <View style={styles.priceContainer}>
            <Paragraph textstyle={styles.priceText} title={item.price} />
            <View style={styles.classroomContainer}>
              <MaterialCommunityIcons
                name="google-classroom"
                size={30}
                color="black"
              />
              <Paragraph
                textstyle={styles.priceText}
                title={`${item.lessons} Lessons`}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: hp(2), // Add bottom padding
  },
  card: {
    backgroundColor: colors.secondary,
    width: "100%",
    minHeight: hp(35),
    marginTop: hp(3),
    borderRadius: 18,
    padding: wp(2),
    elevation: 8, // For Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 18,
    marginBottom: wp(3),
  },
  cardImage: {
    height: 220,
    width: "100%",
    resizeMode: "cover",
  },
  cardText: {
    fontSize: hp(2),
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
    fontFamily: Fonts.inter,
    textAlign: "justify",
    fontWeight: "600",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: wp(3),
    color: colors.primary,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  ratingContainer: {
    paddingHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: wp(3),
  },
  rating: {
    backgroundColor: colors.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  studentCountText: {
    fontWeight: "600",
    opacity: 0.8,
    color: colors.primary,
  },
  priceContainer: {
    paddingHorizontal: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontWeight: "700",
    fontSize: hp(2.2),
    color: colors.primary,
  },
  classroomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default CardMain;
