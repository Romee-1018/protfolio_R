import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

// Mock spending trends data (replace with API call if needed)
const mockSpendingData = [
  { month: 'Jan', amount: 500 },
  { month: 'Feb', amount: 700 },
  { month: 'Mar', amount: 900 },
  { month: 'Apr', amount: 600 },
  { month: 'May', amount: 800 },
  { month: 'Jun', amount: 1000 },
];

const ReportsScreen = () => {
  const [spendingData, setSpendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchSpendingData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
        setSpendingData(mockSpendingData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpendingData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  // Prepare data for the chart
  const labels = spendingData.map((item) => item.month);
  const data = spendingData.map((item) => item.amount);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monthly Spending Trends</Text>
      <BarChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={350} // Width of the chart
        height={220} // Height of the chart
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default ReportsScreen;