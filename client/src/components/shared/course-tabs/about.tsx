import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import colors from "@/constants/colors"; // Assuming you have a colors file

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Course Overview</Text>
        <Text style={styles.subtitle}>
          Master the fundamentals of web development!
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.paragraph}>
          This course is designed for beginners who want to get started with web
          development. You will learn HTML, CSS, JavaScript, and popular
          frameworks like React to build modern, responsive websites.
        </Text>
        <Text style={styles.paragraph}>
          Whether you're looking to switch careers, build your own website, or
          enhance your current skillset, this course is the perfect place to
          start.
        </Text>
      </View>

      <View style={styles.features}>
        <Text style={styles.featuresTitle}>What You'll Learn:</Text>
        <Text style={styles.featureItem}>
          - HTML & CSS for structuring and styling web pages
        </Text>
        <Text style={styles.featureItem}>
          - JavaScript for adding interactivity to your websites
        </Text>
        <Text style={styles.featureItem}>
          - React for building modern web applications
        </Text>
        <Text style={styles.featureItem}>
          - Web development best practices and responsive design
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Start your journey today and become a web development expert!
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius:12
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    fontStyle: "italic",
  },
  content: {
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.secondary,
    marginBottom: 15,
  },
  features: {
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 8,
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: colors.secondary,
    textAlign: "center",
  },
});
