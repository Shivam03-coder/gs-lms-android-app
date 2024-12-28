import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  { name: 'Red', population: 215, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Blue', population: 280, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Yellow', population: 150, color: '#ffcd56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Green', population: 140, color: '#4bc0c0', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Purple', population: 120, color: '#9966ff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
];

const Pie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colorful Pie Chart</Text>
      <PieChart
        data={data}
        width={350} // Adjust according to your screen
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Pie;
