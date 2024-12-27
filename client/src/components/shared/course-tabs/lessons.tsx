import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "@/constants/colors";

const Lessons = () => {
  const lessons = [
    "Introduction to Web Development",
    "HTML Basics and Structure",
    "CSS Styling and Layouts",
    "JavaScript Fundamentals",
    "Building Web Applications with React",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Course Lessons</Text>
      <View style={styles.content}>
        {lessons.map((lesson, index) => (
          <View key={index} style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>
              {index + 1}. {lesson}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    color: colors.palepurple,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    fontStyle: "italic",
  },
  content: {
  },
  lessonItem: {
    borderRadius: 8,
    paddingBlock:11
  },
  lessonTitle: {
    color: colors.secondary,
    fontSize: 16,
  },
});

export default Lessons;