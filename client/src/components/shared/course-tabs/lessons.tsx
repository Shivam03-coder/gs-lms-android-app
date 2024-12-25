import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Lessons = () => {
  const lessons = [
    'Introduction to Web Development',
    'HTML Basics and Structure',
    'CSS Styling and Layouts',
    'JavaScript Fundamentals',
    'Building Web Applications with React',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Course Lessons</Text>
        <Text style={styles.subtitle}>Explore the lessons in this course:</Text>
      </View>

      <View style={styles.content}>
        {lessons.map((lesson, index) => (
          <View key={index} style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>{index + 1}. {lesson}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Lessons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius:12
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    fontStyle: 'italic',
  },
  content: {
    marginTop: 20,
  },
  lessonItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  lessonTitle: {
    fontSize: 16,
    color: '#333',
  },
});
