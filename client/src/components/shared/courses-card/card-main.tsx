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
    imageSource: require("@/assets/images/yt.jpg"),
    description:
      "This video teaches the basics of React Native, focusing on layout, styling, and component usage. Perfect for beginners!",
    rating: 2.9,
    studentCount: 0,
    price: "$32.00",
    lessons: 32,
  },
  {
    id: 2,
    imageSource: require("@/assets/images/yt2.jpg"),
    description:
      "An advanced tutorial on React Native that covers state management, navigation, and hooks. Ideal for developers with some experience.",
    rating: 4.5,
    studentCount: 120,
    price: "$45.00",
    lessons: 35,
  },
  {
    id: 3,
    imageSource: require("@/assets/images/yt3.jpg"),
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
              <Paragraph textstyle={styles.priceText} title={`${item.lessons} students`} />
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
    backgroundColor: colors.dark,
    width: "100%",
    minHeight: hp(35),
    marginTop: hp(3),
    borderRadius: 18,
    elevation: 2,
    shadowColor: colors.palepurple,
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  imageContainer: {
    overflow: "hidden",
    borderTopEndRadius: 18,
    borderTopStartRadius: 18,
    marginBottom: wp(3),
  },
  cardImage: {
    height: 220,
    width: "100%",
    resizeMode: "cover",
  },
  cardText: {
    fontSize: hp(1.8),
    paddingHorizontal: wp(2.3),
    paddingVertical: wp(1),
    textAlign: "justify",
    fontWeight: "500",
    shadowColor: "#000",
    color: colors.secondary,
  },
  ratingContainer: {
    paddingHorizontal: wp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: wp(3),
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
});

export default CardMain;
