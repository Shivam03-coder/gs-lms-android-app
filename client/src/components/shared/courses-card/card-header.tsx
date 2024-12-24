import { Paragraph } from "@/components/ui/texts";
import colors from "@/constants/colors";
import { Fonts } from "@/constants/fonts";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const CourseCardHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Paragraph textstyle={styles.courseTitle} title="Sgsits Courses" />
      <TouchableOpacity onPress={() => router.push("/(tabs)/courses")}>
        <Paragraph textstyle={styles.seeAllLink} title="See All" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  courseTitle: {
    fontFamily: Fonts.inter,
    color: colors.secondary,
  },
  seeAllLink: {
    fontFamily: Fonts.inter,
    color: colors.link,
    textDecorationLine: "underline",
  },
});

export default CourseCardHeader;
